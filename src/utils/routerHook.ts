import { Router } from "vue-router";
import NProgress from "nprogress"; // 引入nprogress插件
NProgress.configure({
  showSpinner: false,
});

export const AddNProgress = (r: Router) => {
  r.beforeEach((to, from, next) => {
    NProgress.start();
    console.log("from:", from.path, "--->", to.path);
    next();
  });

  r.afterEach(() => {
    NProgress.done();
  });
};
