import{d as a,o as l,a as s,t as e,w as t,p as n,i,u as o,x as d,N as r,D as u,j as v,c,k as p,l as g,r as m,b as f,h as R,m as b,T as k,F as _,f as I,O as y,G as h}from"./index.59eb880a.js";import{_ as x}from"./index.vue_vue&type=style&index=0&lang.2634306e.js";import{_ as j}from"./SimpleInfoItem.68ad341a.js";import"./vendor.46abe524.js";import"./time.502f0929.js";const N=t("data-v-221b3b1e");n("data-v-221b3b1e");const A={class:"tips"};i();var E=a({expose:[],props:{title:String},setup(a){const t=a;return N(((a,n)=>(l(),s("div",A,e(t.title)+"~",1))))}});E.__scopeId="data-v-221b3b1e";const S=t("data-v-29a97a92");n("data-v-29a97a92");const U={class:"user-header-container"},D={class:"avatar-container"},P={class:"user-info-container"},T={class:"user-info"},B={class:"nickname-op"},C={class:"nickname"},L={class:"user-article-cotainer"};i();var O=a({expose:[],props:{uid:{required:!0,type:Number,validator:a=>!isNaN(+a)}},setup(a){const t=a,n=o(),i=d(),{data:N}=r(t.uid);u((()=>N.value.ErrorMsg),(a=>{a&&i.error(a)}));const A=v({list:[],page:1,loading:!1,loaded:!1}),O=c((()=>{var a;return n.state.User.Id===(null==(a=N.value.Result)?void 0:a.Id)})),q=c((()=>{var a;return`${null==(a=N.value.Result)?void 0:a.Nickname}的个人中心`}));p({title:q});const w=()=>{console.log("退出登录"),n.commit(y.RESET_USER_STORE),i.success("退出登录成功~")},z=()=>{var a;A.loading=!0,h({UID:null==(a=N.value.Result)?void 0:a.Id,Page:A.page+1}).then((a=>{var l,s,e,t;0!==(null!=(s=null==(l=a.Result)?void 0:l.Articles)?s:[]).length?(A.page+=1,A.list=[...A.list,...null!=(t=null==(e=a.Result)?void 0:e.Articles)?t:[]]):A.loaded=!0})).finally((()=>{A.loading=!1}))};return g((()=>{var a,l;a=t.uid,l=1,A.loading=!0,h({UID:a,Page:l=l||1}).then((a=>{var s,e;const t=null!=(e=null==(s=null==a?void 0:a.Result)?void 0:s.Articles)?e:[];A.page=l,A.list=t,0===t.length?A.loaded=!0:A.loaded=!1})).finally((()=>{A.loading=!1}))})),S(((a,t)=>{const n=m("Avatar"),i=m("LoadingBall");return l(),s(x,null,{default:S((()=>{var a,t,o,d,r;return[f("main",null,[f("div",U,[f("div",D,[f(n,{size:"150px",src:null==(a=R(N).Result)?void 0:a.Avatar},null,8,["src"])]),f("div",P,[f("div",T,[f("span",B,[f("span",C,e(null==(t=R(N).Result)?void 0:t.Nickname),1)]),R(O)?(l(),s("span",{key:0,class:"op-btn",onClick:w},"退出")):b("",!0)]),f("div",null,e(null==(o=R(N).Result)?void 0:o.Location)+" · "+e(null==(d=R(N).Result)?void 0:d.Profession),1),f("div",null,e(null==(r=R(N).Result)?void 0:r.Brief),1)])]),f("div",L,[f(k,{name:"list"},{default:S((()=>[(l(!0),s(_,null,I(A.list,(a=>(l(),s(j,{key:a.Id,info:a},null,8,["info"])))),128))])),_:1}),A.list.length>0&&!A.loaded&&!A.loading?(l(),s("div",{key:0,class:"more-list",onClick:z}," 加载更多 ")):b("",!0),f(i,{loading:A.list.length>0&&A.loading},null,8,["loading"]),A.loaded?(l(),s(E,{key:1,title:"世界终有尽头~"})):b("",!0)])])]})),_:1})}))}});O.__scopeId="data-v-29a97a92";export default O;
