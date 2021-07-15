<script lang="ts" setup>
const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="tips">{{ props.title }}~</div>
</template>
<style scoped>
.tips {
    text-align: center;
    padding: 50px;
}
</style>
