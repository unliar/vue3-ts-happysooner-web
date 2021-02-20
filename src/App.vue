<template>
  <router-view />
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { defineComponent, onMounted } from 'vue'
import { useStore } from "vuex"
import { ACTIONS } from '~/store/type'
export default defineComponent({
  name: 'happy-app',
  setup() {
    const store = useStore()
    useHead({
      title: "远浅 - 给世界献上美好的祝福 - Vue3实战项目",

    })
    onMounted(async () => {
      // 应用初始化 Store 数据
      // 用户登录信息
      store.dispatch(ACTIONS.GET_AUTHED_USER_INFO);
      // 用户主题信息
      store.dispatch(ACTIONS.GET_CATEGORY_LIST);
      // 高亮初始化
      (window as any).hljs && (window as any).hljs.initHighlightingOnLoad();

    })
  }
})
</script>

<style>
@import url(./global.css);
@import url(./highlight.css);
</style>