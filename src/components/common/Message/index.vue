<template>
    <transition name="message-fade">
        <div v-show="visible" :class="['message-box', `message-box--${type}`]">
            <slot>
                <p v-if="!isHTML" class="message-content">{{ message }}</p>
                <p v-else v-html="message" class="message-content"></p>
            </slot>
        </div>
    </transition>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import type { MessageType } from "./type";
// 是否可见
const visible = ref(false);
// 弹窗类型
const type = ref<MessageType>("info");
// 是否是html
const isHTML = ref(false);
// 消息类型
const message = ref("");

// 键盘esc消息
const keyDown = () => {};

// 关闭弹窗
const close = () => {};

onMounted(() => {
    console.log("message box onMounted");
});
onUnmounted(() => {
    console.log("message box onUnmounted");
});
</script>

<style scoped></style>
