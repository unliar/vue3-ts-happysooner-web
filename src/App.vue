<template>
    <router-view :key="key" />
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head";
import { onMounted, computed } from "vue";
import { POSITION, useToast } from "vue-toastification";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import GithubStar from "~/components/common/GithubStar.vue";
import { ACTIONS } from "~/store/type";
import { useBaiduInit } from "./utils/pageView";
const store = useStore();
const toast = useToast();
const route = useRoute();

const id = import.meta.env.VITE_BAIDUTONGJI_ID as string;
id && useBaiduInit(id);

//强制渲染组件
const key = computed(() => route.fullPath);

useHead({
    title: "远浅 - 给世界献上美好的祝福 - Vue3实战项目",
});

onMounted(async () => {
    // github star 弹窗
    setTimeout(() => {
        toast.info(GithubStar, {
            position: POSITION.BOTTOM_RIGHT,
            timeout: 30000,
        });
    }, 2000);

    // 应用初始化 Store 数据
    // 用户登录信息
    store.dispatch(ACTIONS.GET_AUTHED_USER_INFO);
    // 用户主题信息
    store.dispatch(ACTIONS.GET_CATEGORY_LIST);
    // 高亮初始化
    (window as any)?.hljs?.initHighlightingOnLoad?.();
});
</script>

<style>
@import url(./assets/css/global.css);
@import url(./assets/css/highlight.css);
</style>
