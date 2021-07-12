<template>
    <transition
        name="message-fade"
        @before-leave="beforeLeave"
        @after-leave="destroy"
    >
        <div
            v-show="visible"
            :class="['message-box', `message-box--${type}`]"
            :style="computedStyle"
        >
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
    computed,
    defineEmit,
} from "vue";
// 是否可见
const visible = ref(false);

const emit = defineEmit(["destroy"]);
const destroy = () => emit("destroy");
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
    onClose: {
        type: Function,
        require: true,
        default: () => {},
    },
    /**
     * zIndex
     */
    offset: { type: Number, default: 20 },
    zIndex: { type: Number, default: 0 },
    /**
     * 标识id
     */
    id: {
        type: String,
        require: true,
    },
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

const beforeLeave = () => {
    props.onClose();
};

const computedStyle = computed(() => {
    return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
    };
});

onMounted(() => {
    onOpen();
    console.log("message box onMounted");
});
onBeforeUnmount(() => {
    console.log("message box onUnmounted");
});
</script>

<style scoped>
.message-box {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.3s, transform 0.4s, top 0.4s;
    overflow: hidden;
    display: flex;
    align-items: center;
    background: #edf2fc;
    padding: 15px 15px 15px 20px;
    min-width: 280px;
    font-size: 16px;
    color: #606266;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    overflow: hidden;
}

p {
    margin: 0;
}
.message-box--info {
    background: #909399;
}
.message-box--warn {
    background: #f6a23c;
}
.message-box--error {
    background: #f56c6c;
}
.message-box--success {
    background: #67c23a;
}
.message-fade-enter-from,
.message-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
}
</style>
