function asyncGeneratorStep(e,t,n,a,r,i,o){try{var c=e[i](o),d=c.value}catch(l){return void n(l)}c.done?t(d):Promise.resolve(d).then(a,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){asyncGeneratorStep(i,a,r,o,c,"next",e)}function c(e){asyncGeneratorStep(i,a,r,o,c,"throw",e)}o(void 0)}))}}var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".category-title[data-v-def86560],.content-layout-container li[data-v-def86560]{font-size:14px;color:#444}.content-layout-widget-container[data-v-def86560]{padding-top:20px}a[data-v-def86560]{color:#444}.category-title[data-v-def86560]{font-weight:700}.category-item[data-v-def86560]{padding:10px 10px 10px 0;list-style:none}.category-item[data-v-def86560]:before{display:none}.category-list[data-v-def86560]{display:flex;min-height:36px;align-items:center}.content-layout-container[data-v-def86560]{display:flex;flex-direction:column-reverse}@media screen and (min-width:1200px){.content-layout-container[data-v-def86560]{display:flex;flex-direction:row}.content-layout-child-container[data-v-def86560]{flex:1}.category-list[data-v-def86560]{display:block}.category-item[data-v-def86560]:before{display:inline-block}.content-layout-widget-container[data-v-def86560]{width:100px;padding:20px}}@media screen and (max-width:1200px){.category-list[data-v-def86560]{margin:0}}.page-navi[data-v-50c8fa19]{padding:20px 0;text-align:center}",document.head.appendChild(__vite_style__),System.register(["./index-legacy.8270f456.js","./index.vue_vue&type=style&index=0&lang-legacy.00bb617b.js","./SimpleInfoItem-legacy.efc8c3b0.js","./vendor-legacy.7cfe02ca.js","./time-legacy.317c1e9a.js"],(function(e){"use strict";var t,n,a,r,i,o,c,d,l,u,s,f,y,v,g,p,_,x,m,h,w,k,q,b;return{setters:[function(e){t=e.d,n=e.u,a=e.c,r=e.r,i=e.o,o=e.a,c=e.b,d=e.e,l=e.F,u=e.f,s=e.g,f=e.t,y=e.h,v=e.w,g=e.p,p=e.i,_=e.j,x=e.k,m=e.l,h=e.G,w=e.T,k=e.m},function(e){q=e._},function(e){b=e._},function(){},function(){}],execute:function(){var P=v("data-v-def86560");g("data-v-def86560");var I={class:"content-layout-container"},T={class:"content-layout-child-container"},j={class:"content-layout-widget-container"},L={class:"widget-category"},G=c("div",{class:"category-title"},"目录分类",-1),O={class:"category-list"};p();var S=t({expose:[],setup:function(e){var t=n(),v=a((function(){return t.state.Article.CategoryList}));return P((function(e,t){var n=r("router-link");return i(),o("div",I,[c("div",T,[d(e.$slots,"default")]),c("div",j,[c("div",L,[G,c("ul",O,[(i(!0),o(l,null,u(y(v),(function(e){return i(),o("li",{class:"category-item",key:e.Id},[c(n,{to:"/?CategoryID="+e.Id},{default:P((function(){return[s(f(e.CN),1)]})),_:2},1032,["to"])])})),128))])])])])}))}});S.__scopeId="data-v-def86560";var C=v("data-v-50c8fa19");g("data-v-50c8fa19");var R={key:0,class:"page-navi"},A=s("上一页"),z=s("下一页");p();e("default",t({expose:[],props:{query:{type:Object}},setup:function(e){var t=e,n=_({List:[],q:t.query||{},loading:!1});x({title:"远浅 - 给世界献上美好的祝福 - Vue3实战项目"});return m(_asyncToGenerator(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r=null!=(a=t.query)?a:{},n.loading=!0,n.List=[],h(r).then((function(e){var t,a;n.List=[].concat(null!=(t=null==(a=e.Result)?void 0:a.Articles)?t:[])})).finally((function(){n.loading=!1}));case 2:case"end":return e.stop()}var r}),e)})))),C((function(e,t){var a=r("router-link");return i(),o(q,null,{default:C((function(){return[c(S,null,{default:C((function(){return[c(w,{name:"list"},{default:C((function(){return[(i(!0),o(l,null,u(n.List,(function(e){return i(),o(b,{key:e.Id,info:e},null,8,["info"])})),128))]})),_:1}),n.loading?k("",!0):(i(),o("div",R,[n.q.Page&&n.q.Page>=2?(i(),o(a,{key:0,to:"/?Page="+(n.q.Page-1)+"&OrderType="+(n.q.OrderType||"desc")},{default:C((function(){return[A]})),_:1},8,["to"])):k("",!0),15==n.List.length?(i(),o(a,{key:1,to:"/?Page="+(n.q.Page?+n.q.Page+1:2)+"&OrderType="+(n.q.OrderType||"desc")},{default:C((function(){return[z]})),_:1},8,["to"])):k("",!0)]))]})),_:1})]})),_:1})}))}})).__scopeId="data-v-50c8fa19"}}}));
