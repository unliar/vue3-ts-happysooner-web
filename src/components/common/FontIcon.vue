<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    props: {
        iconClass: String,
    },
    setup(props, _) {
        console.log(props.iconClass)
        return {
            iconClass: props.iconClass,
        }
    },
})
</script>

<template>
    <i :class="{ iconfont: true, [`${iconClass}`]: true }"></i>
</template>
