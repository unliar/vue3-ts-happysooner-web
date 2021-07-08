<template>
    <transition name="message-fade">
        <div v-show="visible" :class="['message-box', `message-box--${type}`]">
            <slot>
                <p v-if="!isHTML" class="message-content">
                    {{ $props.content }}
                </p>
                <p v-else v-html="$props.content" class="message-content"></p>
            </slot>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import {
    ref,
    onMounted,
    onBeforeUnmount,
    defineProps,
    getCurrentInstance,
} from "vue";
// 是否可见
const visible = ref(false);

const props = defineProps({
    /**
     * 弹窗警告类型
     */
    type: {
        validator: (v: string) => {
            return ["info", "warn", "error", "success"].includes(v);
        },
        default: "info",
    },
    /**
     * 弹窗文本内容
     */
    content: {
        type: String,
        require: true,
    },
    /**
     * 是否是 HTML
     */
    isHTML: Boolean, // 是否是html
    /**
     * 持续时长单位 秒
     */
    duration: {
        type: Number,
        default: 3, // 秒
        validator: (v: number) => {
            return +v > 0;
        },
    },
    /**
     * 弹窗关闭时的调用
     */
    onClose: Function,
});

// 开启弹窗
const onOpen = () => {
    setTimeout(() => {
        visible.value = true;
    }, 10);
    setTimeout(() => {
        visible.value = false;
    }, props.duration * 1000);
};

onMounted(() => {
    onOpen();
    console.log("message box onMounted", getCurrentInstance());
});
onBeforeUnmount(() => {
    if (typeof props.onClose === "function") {
        props.onClose();
    }
    console.log("message box onUnmounted");
});
</script>

<style scoped></style>
