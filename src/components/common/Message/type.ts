import type { VNode } from "vue";

export type MessageType = "warn" | "error" | "success" | "info";

export type MessageInstance = {
    (opt: Options): void;
    warn(opt: Options): void;
    error(opt: Options): void;
    success(opt: Options): void;
    info(opt: Options): void;
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

export type InstanceQueqe = Array<VNode>;
