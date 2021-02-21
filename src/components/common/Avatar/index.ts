import Vue from "vue";
import component from "./index.vue";

let Avatar: Vue.Plugin = {
    install: function (Vue: Vue.App) {
        Vue.component("Avatar", component);
    },
};

export default Avatar;
