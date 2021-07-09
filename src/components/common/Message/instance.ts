import { createVNode, render } from "vue";
import Ins from "./index.vue";
import type {
    InstanceQueqe,
    MessageInstance,
    Options,
    InstanceComponent,
    InstanceOptions,
    InstanceHandle,
} from "./type";

const isServer = typeof window === "undefined";

const Queqe: InstanceQueqe = [];
let seed = 5201414;
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
    console.log("配置高度", offset);
    Queqe.forEach(v => {
        console.log("实例高度", v.el?.offsetHeight);
        offset += (v.el?.offsetHeight || 0) + 16;
    });
    console.log(Queqe, offset);
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
        console.log("销毁实例");
        render(null, container);
    };
    render(vm, container);
    Queqe.push(vm);
    document.body.appendChild(container.firstElementChild as Element);
    return {
        close: () => {
            (vm.component?.proxy as InstanceComponent).visible = false;
        },
    } as InstanceHandle;
};

Message.closeAll = () => {
    for (let i = Queqe.length - 1; i >= 0; i--) {
        const instance = Queqe[i].component as any;
        instance.ctx.close();
    }
};

(["success", "warn", "info", "error"] as const).forEach(type => {
    Message[type] = (options: InstanceOptions) => {
        if (typeof options === "string") {
            options = {
                content: options,
                type,
            };
        } else {
            options.type = type;
        }
        return Message(options);
    };
});

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
        console.log(
            "更改队列里全部高度 fixed 高度 全部减去 - " + removedHeight,
            Queqe
        );
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
