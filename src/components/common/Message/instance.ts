import { createVNode, render } from "vue";
import Ins from "./index.vue";
import type {
    InstanceQueqe,
    MessageInstance,
    Options,
    InstanceComponent,
    InstanceOptions,
} from "./type";

const isServer = typeof window === "undefined";

const Queqe: InstanceQueqe = [];
let seed = 5201314;
const Message: MessageInstance = (opts: InstanceOptions) => {
    if (isServer) return;
    let options: Options = {
        content: "",
    };
    if (typeof opts === "object") {
        options = Object.assign(options, opts);
    }
    if (typeof opts === "string") {
        if (opts.length == 0) throw new Error("不能弹出空消息框");
        options.content == opts;
    }

    const id = "message_" + seed++;

    const ContainerClassName = "happy__message_container_" + id;
    let container = document.createElement("div");
    container.className = ContainerClassName;
    let offset = options.offset || 20;

    Queqe.forEach(v => {
        offset += (v.el?.offsetHeight || 0) + 16;
    });
    offset += 16;
    const userOnClose = options.onClose;
    options = {
        ...options,
        id,
        offset,
        onClose: () => {
            remove(id, userOnClose);
        },
    };
    // console.log(options, Queqe);
    const vm = createVNode(Ins, options);
    (vm.props as any).onDestroy = () => {
        render(null, container);
    };
    render(vm, container);
    Queqe.push(vm);
    document.body.appendChild(container.firstElementChild as Element);
    return {
        close: () => {
            (vm.component?.proxy as InstanceComponent).visible = false;
        },
    } as any;
};

Message.closeAll = () => {
    for (let i = Queqe.length - 1; i >= 0; i--) {
        const instance = Queqe[i].component as any;
        instance.ctx.close();
    }
};

Message.warn = (options: InstanceOptions) => {
    const t = "warn";
    if (typeof options === "string") {
        options = {
            content: options,
            type: t,
        };
    } else {
        options.type = t;
    }
    return Message(options);
};

Message.info = (options: InstanceOptions) => {
    const t = "info";
    if (typeof options === "string") {
        options = {
            content: options,
            type: t,
        };
    } else {
        options.type = t;
    }
    return Message(options);
};

Message.error = (options: InstanceOptions) => {
    const t = "error";
    if (typeof options === "string") {
        options = {
            content: options,
            type: t,
        };
    } else {
        options.type = t;
    }
    return Message(options);
};

Message.success = (options: InstanceOptions) => {
    const t = "success";
    if (typeof options === "string") {
        options = {
            content: options,
            type: t,
        };
    } else {
        options.type = t;
    }
    return Message(options);
};
const remove = (id: string, userOnclose?: () => void) => {
    const index = Queqe.findIndex(vm => {
        const tid = vm.component?.props.id;
        return tid == id;
    });
    if (index === -1) return;
    const vm = Queqe[index];
    if (!vm) return;
    userOnclose?.();
    const removedHeight = vm.el?.offsetHeight || 0;
    Queqe.splice(index, 1);
    const len = Queqe.length;
    if (len < 1) return;
    for (let i = index; i < len; i++) {
        const pos =
            parseInt((Queqe[i] as any).el.style["top"], 10) -
            removedHeight -
            16;
        (Queqe[i] as any).component.props.offset = pos;
    }
};

export default Message;

export const useMessage = () => {
    return Message;
};
