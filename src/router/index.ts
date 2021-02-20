import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const homeComponent = () => import("../views/home/index");
const postDetail = () => import("../views/post/pid.vue");
const signin = () => import("../views/signin/index");
const about = () => import("../views/about/index.vue");
const NotFound = () => import("../views/404/index.vue");
const DailyRead = () => import("../views/daily-articles/index.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home-page",
    component: homeComponent,
    props: (r) => ({ query: r.query }),
  },
  {
    path: "/post/:pid",
    name: "post-detail",
    component: postDetail,
    props: true,
  },
  {
    path: "/daily-articles",
    name: "daily-read",
    component: DailyRead,
    props: (r) => ({ query: r.query }),
  },
  {
    path: "/signin",
    name: "signin",
    component: signin,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
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

export default RouterInstance;
