<template>
    <DefaultLayout>
        <LoadingBall
            :loading="r.loading"
            padding="30vh 0"
            infoSize="18px"
            info="努力加载中"
        ></LoadingBall>
        <main v-if="!r.loading">
            <h1 class="article-title">{{ r.data?.title }}</h1>
            <div>作者：{{ r.data?.author }}</div>
            <div class="article-container" v-html="r.data?.content"></div>
            <div class="article-nav-container">
                <div class="article-nav">
                    <router-link
                        :to="`/daily-articles?date=${r.data?.date?.prev}`"
                    >
                        <a>查看{{ r.data?.date?.prev }}的文章</a>
                    </router-link>
                </div>
            </div>
        </main>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import {
    defineComponent,
    defineProps,
    onMounted,
    watch,
    reactive,
    computed,
} from "vue";
import { useHead } from "@vueuse/head";

import { GetMeiRiYiWen } from "~/api/article";
import DefaultLayout from "~/components/layouts/Default";
import { useToast } from "vue-toastification";

const props = defineProps({
    query: {
        type: Object as () => { date: string },
    },
});

const toast = useToast();

const r = reactive<{
    data?: Partial<API.ARTICLE.MeiRiYiWenData>;
    loading: boolean;
    q: typeof props.query;
}>({
    data: {},
    loading: false,
    q: props.query,
});
useHead({
    title: computed(() => `每日阅读 - ${r.data?.title} - ${r.data?.author}`),
    meta: [
        {
            name: `description`,
            content: computed(() => `${r.data?.digest}`),
        },
    ],
});
const getData = (req: typeof props.query) => {
    r.loading = true;
    const type = req?.date ? "day" : "random";
    GetMeiRiYiWen(type, req?.date)
        .then(data => {
            r.data = data?.Result;
            r.q = req;
            if (data.ErrorCode) {
                toast.error(data.ErrorMsg);
            }
        })
        .finally(() => {
            r.loading = false;
        });
};
onMounted(() => {
    getData(r.q);
});
watch(
    () => props.query,
    async (next, _) => {
        await getData(next);
    }
);
</script>

<style scoped>
main {
    padding: 20px 0;
}
.article-nav-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.article-nav-container a {
    color: #008080;
}
</style>
