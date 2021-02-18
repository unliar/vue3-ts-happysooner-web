<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from "vuex"
import { ACTIONS } from './store/type'
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch(ACTIONS.GET_AUTHED_USER_INFO)
      console.log("oooops", "app.vue mounted")
    })
  },

})
</script>

<style>
</style>