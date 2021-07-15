<script lang="ts" setup>
const props = defineProps({
    info: String,
    color: String,
    infoSize: String,
    loading: Boolean,
    padding: String,
});

const r = reactive({
    info: props.info ?? "努力加载中",
    color: props.color ?? "#888",
    infoSize: props.infoSize ?? "1rem",
    loading: props.loading,
    padding: props.padding ?? "30px 0",
});

const loading = computed(() => props.loading);
</script>

<template>
    <div class="loading-container" v-if="loading">
        <div class="text-info">{{ r.info }}</div>
        <div class="balls">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<style scoped>
div {
    --color: v-bind(r.color);
    --size: v-bind(r.infoSize);
    --padding: v-bind(r.padding);
}
.loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: var(--padding);
    font-size: var(--size);
}
.text-info {
    padding: 0 0.8em;
}
.balls {
    width: 4em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}

.balls div {
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: var(--color);
}

.balls div:nth-of-type(1) {
    transform: translateX(-100%);
    animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
    transform: translateX(-95%);
    animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
    50%,
    100% {
        transform: translateX(95%);
    }
}

@keyframes right-swing {
    50% {
        transform: translateX(-95%);
    }
    100% {
        transform: translateX(100%);
    }
}
</style>
