<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    iconClass: String,
});

const iconClass = computed(() => props.iconClass);
</script>

<template>
    <i :class="{ iconfont: true, [`${iconClass}`]: true }"></i>
</template>
