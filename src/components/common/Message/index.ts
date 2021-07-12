import { Plugin } from "vue";

const injectKey = Symbol("VueMessage");

const Message: Plugin = App => {
    App.provide(injectKey, null);
};

const useMessage = () => {};
export default Message;
export { useMessage };
