import type { MessageInstance, Options } from "./type";
const Message: MessageInstance = (opt: Options) => {
    console.log(opt);
};

Message.closeAll = () => {};

Message.success = () => {};

Message.warn = () => {};

Message.info = () => {};

Message.error = () => {};
