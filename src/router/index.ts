import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw,
} from "vue-router";

const homeComponent = () => import("~/views/home/index.vue");
const postDetail = () => import("~/views/post/pid.vue");
const signin = () => import("~/views/signin/index.vue");
const about = () => import("~/views/about/index.vue");
const notFound = () => import("~/views/404/index.vue");
const dailyRead = () => import("~/views/daily-articles/index.vue");
const userDetail = () => import("~/views/users/uid.vue");

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home-page",
        component: homeComponent,
        props: r => ({ query: r.query }),
    },
    {
        path: "/post/:pid",
        name: "post-detail",
        component: postDetail,
        props: r => ({ pid: +r.params.pid }),
    },
    {
        path: "/users/:uid",
        name: "user-details",
        component: userDetail,
        props: r => ({ uid: +r.params.uid }),
    },
    {
        path: "/daily-articles",
        name: "daily-read",
        component: dailyRead,
        props: r => ({ query: r.query }),
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
        component: notFound,
    },
];

const RouterInstance = createRouter({
    // 通过构建环境变量判断是否是 hash 模式, - 由于我想要部署到 github page 才加了这么一段
    // 自主可控的服务器 使用 createWebHistory 比较美观
    // 默认history模式
    history:
        import.meta.env.VITE_ROUTER_MODE == "hash"
            ? createWebHashHistory()
            : createWebHistory(),
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
