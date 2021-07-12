import type { VNode, ComponentPublicInstance } from "vue";

export type MessageType = "warn" | "error" | "success" | "info";

export type MessageInstance = {
    (opt: InstanceOptions): InstanceHandle;
    warn: (opt: InstanceOptions) => InstanceHandle;
    error: (opt: InstanceOptions) => InstanceHandle;
    success: (opt: InstanceOptions) => InstanceHandle;
    info: (opt: InstanceOptions) => InstanceHandle;
    closeAll(): void;
};

export type Options = {
    content: string; // 文字类型
    isHTML?: boolean; // 是否是html
    duration?: number; // 显示时长
    onClose?: () => void; // 关闭时的调用
    type?: MessageType;
    offset?: number; // 垂直偏移
    id?: string;
};

export type InstanceComponent = ComponentPublicInstance<{ visible: boolean }>;

export type InstanceQueqe = Array<VNode>;

export type InstanceOptions = Options | string;

export interface InstanceHandle {
    close: () => void;
}
