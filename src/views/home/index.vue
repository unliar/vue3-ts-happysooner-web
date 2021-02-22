<script lang="ts" setup="">
import { defineProps, onMounted, reactive } from "vue";
import { useHead } from "@vueuse/head";

import { GetArticles } from "~/api/article";
import ContentLayout from "~/components/layouts/Content/index.vue";
import DefaultLayout from "~/components/layouts/Default/index.vue";
import SimpleInfoItem from "~/components/article/SimpleInfoItem.vue";
const props = defineProps({
    query: {
        type: Object as () => API.ARTICLE.GetArticleListRequest,
    },
});
const data = reactive<{
    List: API.ARTICLE.ArticleInfo[];
    q: API.ARTICLE.GetArticleListRequest;
    loading: boolean;
}>({
    List: [],
    q: props.query || {},
    loading: false,
});

useHead({
    title: "远浅 - 给世界献上美好的祝福 - Vue3实战项目",
});

// 获取数据
const getList = (req: API.ARTICLE.GetArticleListRequest) => {
    data.loading = true;
    data.List = [];
    return GetArticles(req)
        .then(r => {
            data.List = [...(r.Result?.Articles ?? [])];
        })
        .finally(() => {
            data.loading = false;
        });
};

onMounted(async () => {
    await getList(props.query ?? {});
});
</script>

<template>
    <DefaultLayout>
        <ContentLayout>
            <!-- <LoadingBall padding="40vh 0" :loading="data.loading" infoSize="18px"></LoadingBall> -->
            <transition-group name="list">
                <SimpleInfoItem
                    v-for="i in data.List"
                    :key="i.Id"
                    :info="i"
                ></SimpleInfoItem>
            </transition-group>
            <div class="page-navi" v-if="!data.loading">
                <router-link
                    v-if="data.q.Page && data.q.Page >= 2"
                    :to="`/?Page=${data.q.Page - 1}&OrderType=${
                        data.q.OrderType || 'desc'
                    }`"
                    >上一页</router-link
                >

                <router-link
                    v-if="data.List.length == 15"
                    :to="`/?Page=${
                        data.q.Page ? +data.q.Page + 1 : 2
                    }&OrderType=${data.q.OrderType || 'desc'}`"
                    >下一页</router-link
                >
            </div>
        </ContentLayout>
    </DefaultLayout>
</template>

<style scoped>
.page-navi {
    padding: 20px 0;
    text-align: center;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.65s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
