import Vue from "vue";

let Highlight: Vue.Plugin = {
  install: function (Vue: Vue.App) {
    Vue.directive("highlight", {
      mounted: function (el) {
        el.querySelectorAll("pre code").forEach((block: any) => {
          (window as any).hljs.highlightBlock(block);
        });
      },
    });
  },
};

export default Highlight;
