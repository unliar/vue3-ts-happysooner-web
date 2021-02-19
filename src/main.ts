import { createApp } from "vue";
import App from "./App.vue";
import RouterInstance from "./router";
import Store from "./store/index";
import "nprogress/nprogress.css"; // 这个
import Ng from "nprogress";
Ng.configure({
  showSpinner: false,
});
createApp(App).use(RouterInstance).use(Store).mount("#lsp");
