<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from "vuex"
import { ACTIONS } from './store/type'
export default defineComponent({
  name: 'happy-app',
  setup() {
    const store = useStore()
    onMounted(async () => {
      // 应用初始化 Store 数据
      // 用户登录信息
      store.dispatch(ACTIONS.GET_AUTHED_USER_INFO)
      // 用户主题信息
      store.dispatch(ACTIONS.GET_CATEGORY_LIST)
      console.log("oooops", "app.vue mounted")
    })
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  word-break: break-word;
}
#vue-next {
  min-height: 100vh;
  background: #fafafa;
}
html,
body {
  -webkit-overflow-scrolling: touch;
  font-family: "Noto Sans SC", sans-serif;
}
a {
  text-decoration: none;
  color: #000;
  -webkit-tap-highlight-color: transparent;
}
a:hover {
  font-weight: bold;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.article-title {
  font-size: 16px;
  font-weight: bold;
  color: #21756c;
}
.content-limit-one {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.content-limit-two {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>