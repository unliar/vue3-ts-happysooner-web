import { createApp } from "vue";

import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from "./App.vue";
import RouterInstance from "./router";
import Store from "./store/index";
import { AddNProgress } from "./utils/routerHooks";

AddNProgress(RouterInstance);

const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 3000,
  newestOnTop: true,
  transition: "Vue-Toastification__fade",
};

createApp(App)
  .use(Toast, options)
  .use(RouterInstance)
  .use(Store)
  .mount("#vue-next");
