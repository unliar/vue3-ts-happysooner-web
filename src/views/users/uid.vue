<template>
    <DefaultLayout>
        <main>
            <div class="user-header-container">
                <div class="avatar-container">
                    <Avatar
                        size="150px"
                        :src="user.data.value.Result?.Avatar"
                    />
                </div>
                <div class="user-info-container">
                    <div class="user-info">
                        <span class="nickname-op">
                            <span class="nickname">{{
                                user.data.value.Result?.Nickname
                            }}</span>
                        </span>
                        <span
                            class="op-btn"
                            v-if="isCurrentUser"
                            @click="removeLogin"
                            >退出</span
                        >
                    </div>
                    <div>
                        {{ user.data.value.Result?.Location }} ·
                        {{ user.data.value.Result?.Profession }}
                    </div>
                    <div>{{ user.data.value.Result?.Brief }}</div>
                </div>
            </div>
            <div class="user-article-cotainer">
                <transition-group name="list">
                    <template v-for="item in articles.list" :key="item.Id">
                        <SimpleInfoItem :info="item"></SimpleInfoItem>
                    </template>
                </transition-group>

                <div
                    class="more-list"
                    @click="loadMore"
                    v-if="
                        articles.list.length > 0 &&
                        !articles.loaded &&
                        !articles.loading
                    "
                >
                    加载更多
                </div>
                <LoadingBall
                    :loading="articles.list.length > 0 && articles.loading"
                ></LoadingBall>
                <EmptyContent
                    title="世界终有尽头~"
                    v-if="articles.loaded"
                ></EmptyContent>
            </div>
        </main>
    </DefaultLayout>
</template>
<script lang="ts" setup>
import { defineProps, reactive, onMounted, computed, watch } from "vue";
import { useHead } from "@vueuse/head";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
// - - 项目内import
import DefaultLayout from "~/components/layouts/Default/index.vue";
import EmptyContent from "~/components/common/EmptyContent.vue";
import SimpleInfoItem from "~/components/article/SimpleInfoItem.vue";
import { UseGetUserInfoByID } from "~/api/user";
import type { StoreType } from "~/store";
import { MUTATIONS } from "~/store/type";
import { GetArticles } from "~/api/article";

const props = defineProps({
    uid: {
        required: true, // props 是否必要
        type: Number, // props 类型
        validator: (v: String) => !isNaN(+v), // 自定义校验器
    },
});

const store = useStore<StoreType>();
const toast = useToast();

const user = UseGetUserInfoByID(props.uid);

watch(
    () => user.data.value.ErrorMsg,
    (c, p) => {
        c && toast.error(c);
    }
);

const articles = reactive<{
    list: API.ARTICLE.ArticleInfo[];
    page: number;
    loading: boolean;
    loaded: boolean;
}>({
    list: [],
    page: 1,
    loading: false,
    loaded: false,
});

// 判断用户是否是
const isCurrentUser = computed(
    () => store.state.User.Id === user.data.value.Result?.Id
);

useHead({
    title: computed(() => `${user.data.value.Result?.Nickname}的个人中心`),
});

// 注销登录
const removeLogin = () => {
    console.log("退出登录");
    store.commit(MUTATIONS.RESET_USER_STORE);
    toast.success("退出登录成功~");
};

// 获取文章列表
const fetchArticleList = (uid: number, page: number) => {
    articles.loading = true;
    page = page || 1;
    GetArticles({ UID: uid, Page: page })
        .then(r => {
            const list = r?.Result?.Articles ?? [];
            articles.page = page;
            articles.list = list;
            if (list.length === 0) {
                articles.loaded = true;
            } else {
                articles.loaded = false;
            }
        })
        .finally(() => {
            articles.loading = false;
        });
};

// 加载更多
const loadMore = () => {
    articles.loading = true;

    GetArticles({
        UID: user.data.value.Result?.Id,
        Page: articles.page + 1,
    })
        .then(r => {
            const list = r.Result?.Articles ?? [];
            if (list.length === 0) {
                articles.loaded = true;
                return;
            }
            articles.page += 1;
            articles.list = [...articles.list, ...(r.Result?.Articles ?? [])];
        })
        .finally(() => {
            articles.loading = false;
        });
};

onMounted(() => {
    fetchArticleList(props.uid, 1);
});
</script>

<style scoped>
@media (max-width: 750px) {
    .avatar-container {
        display: none;
    }
}
@media (min-width: 1024px) {
    .user-header-container {
        padding: 40px;
    }
}
.user-header-container {
    display: flex;
    padding: 10px 0;
}
.user-info-container {
    width: 400px;
    line-height: 1.5;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.avatar-container {
    margin-right: 30px;
}
.user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 45px;
}
.logout {
    cursor: pointer;
}
.nickname {
    font-size: 28px;
}
.social-info {
    display: none;
    justify-content: space-between;
    padding: 10px 0;
}
.more-list {
    text-align: center;
    padding: 20px;
    cursor: pointer;
}
</style>
