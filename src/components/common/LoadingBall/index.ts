import Vue from "vue";
import LoadingBallcomponent from "./index.vue";

let LoadingBall: Vue.Plugin = {
    install: function (Vue: Vue.App) {
        Vue.component("LoadingBall", LoadingBallcomponent);
    },
};

export default LoadingBall;
