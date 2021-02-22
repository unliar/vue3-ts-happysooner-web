<template>
    <DefaultLayout>
        <LoadingBall
            :loading="loading"
            padding="30vh 0"
            infoSize="18px"
            info="努力加载中"
        ></LoadingBall>
        <main v-if="!loading">
            <h1 class="article-title">{{ title }}</h1>
            <div>作者：{{ author }}</div>
            <div class="article-container" v-html="content"></div>
            <div class="article-nav-container">
                <div class="article-nav">
                    <router-link :to="`/daily-articles?date=${prev}`">
                        <a>查看{{ prev }}的文章</a>
                    </router-link>
                </div>
            </div>
        </main>
    </DefaultLayout>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, reactive, computed, watch } from "vue";
import { useHead } from "@vueuse/head";

import { UseGetMeiRiYiWen } from "~/api/article";
import DefaultLayout from "~/components/layouts/Default/index.vue";
import { useToast } from "vue-toastification";

const props = defineProps({
    query: {
        type: Object as () => { date: string },
    },
});

const toast = useToast();
const r = UseGetMeiRiYiWen(props.query?.date);
// const r = reactive<{
//     data?: Partial<API.ARTICLE.MeiRiYiWenData>;
//     loading: boolean;
//     q: typeof props.query;
// }>({
//     data: {},
//     loading: false,
//     q: props.query,
// });

const title = computed(() => r.data.value.Result?.title);
const author = computed(() => r.data.value.Result?.author);
const content = computed(() => r.data.value.Result?.content);
const prev = computed(() => r.data.value.Result?.date.prev);
const loading = computed(() => r.loading).value;

useHead({
    title: computed(
        () =>
            `每日阅读 - ${r.data.value.Result?.title} - ${r.data.value.Result?.author}`
    ),
    meta: [
        {
            name: `description`,
            content: computed(() => `${r.data.value.Result?.digest}`),
        },
    ],
});

watch(
    () => r.data.value.ErrorMsg,
    c => {
        toast.warning(c);
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
