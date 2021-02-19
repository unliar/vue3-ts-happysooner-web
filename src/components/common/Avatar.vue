<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        size: String,
        src: String,
        scale: Number
    },
    setup(props) {
        return {
            scale: props.scale || 1,
            size: props.size || "32px",
            src: props.src || `https://happysooner.com/api/v1/tools/ident-icon`
        }
    },
    methods: {
        // x(e: Event) {
        //     e.preventDefault();
        //     console.error("qqqd");
        //     (<HTMLInputElement>e.target).src = this.src
        // }
    }
})
</script>

<template>
    <img alt="avatar" :src="src" />
</template>

<style scoped  >
img {
    border-radius: 50%;
    text-align: center;
    display: block;
    width: v-bind(size);
    height: v-bind(size);
    line-height: v-bind(size);
}
img:hover {
    transition: transform 0.1s ease-in-out;
    transform: scale(v-bind(scale));
}
</style>