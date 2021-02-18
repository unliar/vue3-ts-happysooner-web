import { createApp } from "vue";
import App from "./App.vue";
import RouterInstance from "./router";
import Store from "./store/index";

createApp(App).use(RouterInstance).use(Store).mount("#app");
