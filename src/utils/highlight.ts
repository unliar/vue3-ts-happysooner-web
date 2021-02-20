import Vue from "vue"

// 代码高亮插件 但是由于代码打包太大 使用的是外链引入
let Highlight: Vue.Plugin = {
    install: function (Vue: Vue.App) {
        Vue.directive("highlight", {
            mounted: function (el) {
                el.querySelectorAll("pre code").forEach((block: any) => {
                    ;(window as any).hljs.highlightBlock(block)
                })
            },
        })
    },
}

export default Highlight
