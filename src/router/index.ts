import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress"; // 引入nprogress插件

const homeComponent = () => import("../views/home/index");
const postDetail = () => import("../views/post/pid");
const signin = () => import("../views/signin/index");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home-page",
    component: homeComponent,
  },
  {
    path: "/post/:pid",
    name: "post-detail",
    component: postDetail,
    props: true,
  },
  {
    path: "/signin",
    name: "signin",
    component: signin,
  },
];

const RouterInstance = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, _, savedPos) => {
    if (savedPos) {
      return savedPos;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return { left: 0, top: 0 };
  },
});

RouterInstance.beforeEach((to, from, next) => {
  NProgress.start();
  console.log("from:", from.path, "--->", to.path);
  next();
});

RouterInstance.afterEach(() => {
  NProgress.done();
});

export default RouterInstance;
