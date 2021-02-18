import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import homeComponent from "../views/home/index.vue";
import postDetail from "../views/post/pid";

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
];

const RouterInstance = createRouter({
  history: createWebHistory(),
  routes,
});

export default RouterInstance;
