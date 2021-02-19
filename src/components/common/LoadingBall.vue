<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    props: {
        info: String,
        color: String,
        size: String,
        loading: Boolean
    },
    setup(props) {
        const r = reactive({
            info: props.info,
            color: props.color ?? "#888",
            size: props.size,
            loading: props.loading
        })
        return {
            r
        }
    }
})
</script>

<template>
    <div class="loading-container" v-if="r.loading === true">
        <div class="text-info">{{ r.info || "努力加载中" }}</div>
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
}
.loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
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