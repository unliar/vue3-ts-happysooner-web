<template>
    <router-view />
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head";
import { onMounted, ref, toRefs } from "vue";
import { POSITION, useToast } from "vue-toastification";
import { useStore } from "vuex";

import GithubStar from "./components/common/GithubStar.vue";
import { ACTIONS } from "~/store/type";

const store = useStore();
const toast = useToast();

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
    (window as any).hljs && (window as any).hljs.initHighlightingOnLoad();
});
</script>

<style>
@import url(./components/css/global.css);
@import url(./components/css/highlight.css);
</style>
