import { createVNode, render } from "vue";
import Ins from "./index.vue";
import type { MessageInstance, Options } from "./type";
const Message: MessageInstance = (opt?: Options) => {
    const cfg = opt || {};
    const ContainerClassName = "happy__message";
    const c = document.querySelector(`.${ContainerClassName}`);
    if (c) {
        document.body.removeChild(c);
    }
    const vm = createVNode(Ins, { ...cfg });
    const container = document.createElement("div");
    container.className = ContainerClassName;
    render(vm, container);
    document.body.appendChild(container);
};

Message.closeAll = () => {};

Message.success = () => {};

Message.warn = () => {};

Message.info = () => {};

Message.error = () => {};

export default Message;
