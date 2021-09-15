import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import "vue-global-api";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@geist-ui/themes";
import "@geist-ui/typography";

import App from "./App.vue";
import RouterInstance from "./router";
import { AddNProgress } from "./utils/routerHooks";
import Highlight from "./utils/highlight";
import LoadingBall from "./components/common/LoadingBall";
import Avatar from "./components/common/Avatar";
AddNProgress(RouterInstance);

const options: PluginOptions = {
    position: POSITION.TOP_CENTER,
    timeout: 2000,
    newestOnTop: true,
    transition: "Vue-Toastification__fade",
};
const head = createHead();
const pinia = createPinia();
pinia.use(({ store }) => {
    store.$subscribe(t => {
        console.log("store state changed", t);
    });
    store.$onAction(a => {
        console.log("store action fired", a);
    });
});
createApp(App)
    .use(pinia)
    .use(Toast, options)
    .use(head)
    .use(RouterInstance)
    .use(Highlight)
    .use(LoadingBall)
    .use(Avatar)
    .mount("#vue-next");
