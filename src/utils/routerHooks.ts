import { Router } from "vue-router";
import NProgress from "nprogress"; // 引入nprogress插件
import "nprogress/nprogress.css";
NProgress.configure({
    showSpinner: false,
});

export const AddNProgress = (r: Router) => {
    r.beforeEach((to, from, next) => {
        NProgress.start();
        console.log("from:", from.fullPath, "--->", to.fullPath);
        next();
    });

    r.afterEach(() => {
        NProgress.done();
    });
};
