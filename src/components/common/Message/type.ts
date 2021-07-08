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
    onClose: () => void; // 关闭时的调用
};
