import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.BASE_URL || "/", // 静态资源地址 一般情况下是 cdn 地址
    plugins: [vue(), vueJsx({})],
    server: {
        proxy: {
            "/api": "https://happysooner.com",
        },
    },
    css: {
        modules: {
            scopeBehaviour: "local",
        },
    },
    resolve: {
        alias: {
            "~": resolve(__dirname, "src"),
        },
    },
});
