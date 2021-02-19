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
      store.dispatch(ACTIONS.GET_AUTHED_USER_INFO)
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
#lsp {
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
</style>