<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: String,
    },
});
</script>

<template>
    <div class="tips">{{ $props.title }}~</div>
</template>
<style scoped>
.tips {
    text-align: center;
    padding: 50px;
}
</style>
