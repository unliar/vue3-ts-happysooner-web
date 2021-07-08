import { createApp, getCurrentInstance } from "vue";
import Ins from "./index.vue";
import type { MessageInstance, Options } from "./type";
const Message: MessageInstance = (opt?: Options) => {
    const cfg = opt || {};
    const app = createApp(Ins, { ...cfg });
    const dom = document.createElement("div");
    dom.className = "happy__message";
    const t = app.mount(dom);
};

Message.closeAll = () => {};

Message.success = () => {};

Message.warn = () => {};

Message.info = () => {};

Message.error = () => {};

export default Message;
