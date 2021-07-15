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
const { data, loading } = UseGetMeiRiYiWen(props.query?.date);

const title = computed(() => data.value.Result?.title);
const author = computed(() => data.value.Result?.author);
const content = computed(() => data.value.Result?.content);
const prev = computed(() => data.value.Result?.date.prev);

useHead({
    title: computed(
        () =>
            `每日阅读 - ${data.value.Result?.title} - ${data.value.Result?.author}`
    ),
    meta: [
        {
            name: `description`,
            content: computed(() => `${data.value.Result?.digest}`),
        },
    ],
});

watch(
    () => data.value.ErrorMsg,
    c => {
        c && toast.warning(c);
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
