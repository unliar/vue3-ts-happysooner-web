import { createVNode, render } from "vue";
import Ins from "./index.vue";
import type { MessageInstance, Options } from "./type";
const Message: MessageInstance = (opt?: Options) => {
    const cfg = opt || {};
    const vm = createVNode(Ins, { ...cfg });
    const container = document.createElement("div");
    container.className = "happy__message";
    render(vm, container);
    document.body.appendChild(container);
};

Message.closeAll = () => {};

Message.success = () => {};

Message.warn = () => {};

Message.info = () => {};

Message.error = () => {};

export default Message;
