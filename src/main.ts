import { createApp } from "vue";
import App from "./App.vue";
import RouterInstance from "./router";
import Store from "./store/index";
import "nprogress/nprogress.css"; // 这个
import Ng from "nprogress";
import { AddNProgress } from "./utils/routerHook";

AddNProgress(RouterInstance);

createApp(App).use(RouterInstance).use(Store).mount("#lsp");
