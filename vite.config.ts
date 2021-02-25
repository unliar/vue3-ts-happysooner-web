import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.BASE_URL || "/",
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
