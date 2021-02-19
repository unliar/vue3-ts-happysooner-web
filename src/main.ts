import { createApp } from "vue";
import App from "./App.vue";
import RouterInstance from "./router";
import Store from "./store/index";
import { AddNProgress } from "./utils/routerHooks";

AddNProgress(RouterInstance);

createApp(App).use(RouterInstance).use(Store).mount("#vue-next");
