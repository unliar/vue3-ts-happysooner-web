<template>
    <DefaultLayout>
        <LoadingBall
            :loading="loading"
            info="努力加载文章中"
            info-size="18px"
            padding="30vh 0"
        ></LoadingBall>
        <main v-if="!loading">
            <h1 class="article-title">{{ Title }}</h1>
            <div class="artilce-info">
                <span>
                    <router-link :to="`/users/${AuthorInfoUID}`">
                        <a>{{ AuthorInfoNickname }}</a>
                    </router-link>
                </span>
                <span>发表于: {{ fromNow }}</span>
                <span>
                    分类:
                    <router-link :to="`/?CategoryID=${CategoryId}`">{{
                        CategoryCN
                    }}</router-link>
                </span>
            </div>
            <div v-html="Content" class="article-container" v-highlight></div>
            <div class="article-navi">
                <div>
                    <router-link v-if="PrevId" :to="`/post/${PrevId}`">
                        上一篇 «
                        {{ PrevTitle }}
                    </router-link>
                </div>
                <div>
                    <router-link v-if="NextId" :to="`/post/${NextId}`">
                        下一篇 »
                        {{ NextTitle }}
                    </router-link>
                </div>
            </div>
            <Comment :author-id="AuthorInfoUID" :post-id="props.pid"></Comment>
        </main>
    </DefaultLayout>
</template>
<script lang="ts" setup>
import { computed, defineProps, onMounted, reactive, watch } from "vue";
import { useToast } from "vue-toastification";
import { useHead } from "@vueuse/head";

import markdownIt from "~/utils/md";
import DefaultLayout from "~/components/layouts/Default/index.vue";
import Comment from "~/components/article/Comment.vue";
import { UseGetArticleById } from "~/api/article";
import { FromNow } from "~/utils/time";

const props = defineProps({
    pid: {
        required: true, // props 是否必要
        type: Number, // props 类型
        validator: (v: String) => !isNaN(+v), // 自定义校验器
    },
});

const toast = useToast();

const r = UseGetArticleById(props.pid);

const Content = computed(() =>
    markdownIt.render(r.data.value.Result?.Content ?? "")
);
const fromNow = computed(() =>
    FromNow(r.data.value.Result?.CreatedAt ?? Date.now())
);
const loading = computed(() => r.loading.value);
const Title = computed(() => r.data.value.Result?.Title);
const Summary = computed(() => r.data.value.Result?.Summary);
const AuthorInfoUID = computed(() => r.data.value.Result?.AuthorInfo.UID);
const AuthorInfoNickname = computed(
    () => r.data.value.Result?.AuthorInfo.Nickname
);
const CategoryId = computed(() => r.data.value.Result?.Category.Id);
const CategoryCN = computed(() => r.data.value.Result?.Category.CN);
const PrevId = computed(() => r.data.value.Result?.Navigation?.Prev?.Id);
const NextId = computed(() => r.data.value.Result?.Navigation?.Next?.Id);
const NextTitle = computed(() => r.data.value.Result?.Navigation?.Next?.Title);
const PrevTitle = computed(() => r.data.value.Result?.Navigation?.Prev?.Title);

useHead({
    title: `${Title}`,
    meta: [
        {
            name: `description`,
            content: computed(
                () => `${AuthorInfoNickname}发表了${Title},${Summary}`
            ),
        },
        {
            name: "author",
            content: computed(() => `${AuthorInfoNickname}`),
        },
    ],
});

watch(
    () => r.data.value.ErrorMsg,
    (c, _) => {
        toast.error("请求出错:" + c);
    }
);
</script>
<style scoped>
main {
    padding: 10px 0;
}
.artilce-info span {
    padding-right: 10px;
    color: #666;
    font-size: 14px;
}
.article-navi {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 0;
}
.article-navi div {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.article-navi div a {
    color: #008080;
    border-bottom: 1px solid #008080;
}
</style>
