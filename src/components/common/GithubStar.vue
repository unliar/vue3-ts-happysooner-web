<script lang="ts" setup>
const GoGithub = () => {
    window.open("https://github.com/unliar/vue3-ts-happysooner-web");
};
</script>

<template>
    <div @click="GoGithub">
        <div>本项目为 Vue3 + Vite2 开源实践项目</div>
        <div>
            请点击前往
            <strong>Github</strong>交友网站查看源码
        </div>
    </div>
</template>

<style scoped>
div {
    cursor: pointer;
}
</style>
