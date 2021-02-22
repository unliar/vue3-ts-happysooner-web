<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
    size: String,
    src: String,
    scale: Number,
});

const src = computed(
    () =>
        props.src ?? "https://happysooner.com/api/v1/tools/ident-icon?key=happy"
);
</script>

<template>
    <img alt="avatar" :src="src" :key="src" />
</template>

<style scoped>
img {
    --size: v-bind(props.size);
    --scale: v-bind(props.scale);
}
img {
    border-radius: 50%;
    text-align: center;
    display: block;
    width: var(--size);
    height: var(--size);
    line-height: var(--size);
}
img:hover {
    transition: transform 0.1s ease-in-out;
    transform: scale(var(--scale));
}
</style>
