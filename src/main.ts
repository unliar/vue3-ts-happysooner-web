import { createApp } from "vue";
import App from "./App.vue";
import RouterInstance from "./router";
import Store from "./store/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

createApp(App).use(ElementPlus).use(RouterInstance).use(Store).mount("#app");
