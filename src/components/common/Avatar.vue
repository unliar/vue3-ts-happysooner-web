<script lang="ts">
import { defineComponent, reactive, watch } from "vue"

export default defineComponent({
    props: {
        size: String,
        src: String,
        scale: Number,
    },
    setup(props) {
        const d = reactive({
            scale: props.scale || 1,
            size: props.size || "32px",
            src: props.src || `https://happysooner.com/api/v1/tools/ident-icon`,
        })

        watch(
            () => props.src,
            (next) => {
                d.src =
                    next || `https://happysooner.com/api/v1/tools/ident-icon`
            }
        )

        return {
            d,
        }
    },
    methods: {
        // x(e: Event) {
        //     e.preventDefault();
        //     console.error("qqqd");
        //     (<HTMLInputElement>e.target).src = this.src
        // }
    },
})
</script>

<template>
    <img alt="avatar" :src="d.src || ''" :key="d.src" />
</template>

<style scoped>
img {
    --size: v-bind(d.size);
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
    transform: scale(v-bind(scale));
}
</style>
