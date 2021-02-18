import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
});

export default RouterInstance;
