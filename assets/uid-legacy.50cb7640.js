var __vite_style__=document.createElement("style");__vite_style__.innerHTML=".tips[data-v-221b3b1e]{text-align:center;padding:50px}@media (max-width:750px){.avatar-container[data-v-29a97a92]{display:none}}@media (min-width:1024px){.user-header-container[data-v-29a97a92]{padding:40px}}.user-header-container[data-v-29a97a92]{display:flex;padding:10px 0}.user-info-container[data-v-29a97a92]{width:400px;line-height:1.5;padding:10px 0;display:flex;flex-direction:column;justify-content:space-between}.avatar-container[data-v-29a97a92]{margin-right:30px}.user-info[data-v-29a97a92]{display:flex;justify-content:space-between;align-items:center;min-height:45px}.logout[data-v-29a97a92]{cursor:pointer}.nickname[data-v-29a97a92]{font-size:28px}.social-info[data-v-29a97a92]{display:none;justify-content:space-between;padding:10px 0}.more-list[data-v-29a97a92]{text-align:center;padding:20px;cursor:pointer}",document.head.appendChild(__vite_style__),System.register(["./index-legacy.8270f456.js","./index.vue_vue&type=style&index=0&lang-legacy.00bb617b.js","./SimpleInfoItem-legacy.efc8c3b0.js","./vendor-legacy.7cfe02ca.js","./time-legacy.317c1e9a.js"],(function(a){"use strict";var e,n,t,i,l,o,r,d,s,u,c,v,p,f,g,m,x,y,_,h,b,R,k,I,j,w;return{setters:[function(a){e=a.d,n=a.o,t=a.a,i=a.t,l=a.w,o=a.p,r=a.i,d=a.u,s=a.x,u=a.N,c=a.D,v=a.j,p=a.c,f=a.k,g=a.l,m=a.r,x=a.b,y=a.h,_=a.m,h=a.T,b=a.F,R=a.f,k=a.O,I=a.G},function(a){j=a._},function(a){w=a._},function(){},function(){}],execute:function(){var E=l("data-v-221b3b1e");o("data-v-221b3b1e");var N={class:"tips"};r();var S=e({expose:[],props:{title:String},setup:function(a){var e=a;return E((function(a,l){return n(),t("div",N,i(e.title)+"~",1)}))}});S.__scopeId="data-v-221b3b1e";var A=l("data-v-29a97a92");o("data-v-29a97a92");var T={class:"user-header-container"},U={class:"avatar-container"},C={class:"user-info-container"},D={class:"user-info"},L={class:"nickname-op"},P={class:"nickname"},z={class:"user-article-cotainer"};r();a("default",e({expose:[],props:{uid:{required:!0,type:Number,validator:function(a){return!isNaN(+a)}}},setup:function(a){var e=a,l=d(),o=s(),r=u(e.uid).data;c((function(){return r.value.ErrorMsg}),(function(a){a&&o.error(a)}));var E=v({list:[],page:1,loading:!1,loaded:!1}),N=p((function(){var a;return l.state.User.Id===(null==(a=r.value.Result)?void 0:a.Id)})),B=p((function(){var a;return(null==(a=r.value.Result)?void 0:a.Nickname)+"的个人中心"}));f({title:B});var M=function(){console.log("退出登录"),l.commit(k.RESET_USER_STORE),o.success("退出登录成功~")},O=function(){var a;E.loading=!0,I({UID:null==(a=r.value.Result)?void 0:a.Id,Page:E.page+1}).then((function(a){var e,n,t,i;0!==(null!=(e=null==(n=a.Result)?void 0:n.Articles)?e:[]).length?(E.page+=1,E.list=[].concat(E.list,null!=(t=null==(i=a.Result)?void 0:i.Articles)?t:[])):E.loaded=!0})).finally((function(){E.loading=!1}))};return g((function(){var a,n;a=e.uid,n=1,E.loading=!0,I({UID:a,Page:n=n||1}).then((function(a){var e,t,i=null!=(e=null==a||null==(t=a.Result)?void 0:t.Articles)?e:[];E.page=n,E.list=i,0===i.length?E.loaded=!0:E.loaded=!1})).finally((function(){E.loading=!1}))})),A((function(a,e){var l=m("Avatar"),o=m("LoadingBall");return n(),t(j,null,{default:A((function(){var a,e,d,s,u;return[x("main",null,[x("div",T,[x("div",U,[x(l,{size:"150px",src:null==(a=y(r).Result)?void 0:a.Avatar},null,8,["src"])]),x("div",C,[x("div",D,[x("span",L,[x("span",P,i(null==(e=y(r).Result)?void 0:e.Nickname),1)]),y(N)?(n(),t("span",{key:0,class:"op-btn",onClick:M},"退出")):_("",!0)]),x("div",null,i(null==(d=y(r).Result)?void 0:d.Location)+" · "+i(null==(s=y(r).Result)?void 0:s.Profession),1),x("div",null,i(null==(u=y(r).Result)?void 0:u.Brief),1)])]),x("div",z,[x(h,{name:"list"},{default:A((function(){return[(n(!0),t(b,null,R(E.list,(function(a){return n(),t(w,{key:a.Id,info:a},null,8,["info"])})),128))]})),_:1}),E.list.length>0&&!E.loaded&&!E.loading?(n(),t("div",{key:0,class:"more-list",onClick:O}," 加载更多 ")):_("",!0),x(o,{loading:E.list.length>0&&E.loading},null,8,["loading"]),E.loaded?(n(),t(S,{key:1,title:"世界终有尽头~"})):_("",!0)])])]})),_:1})}))}})).__scopeId="data-v-29a97a92"}}}));
