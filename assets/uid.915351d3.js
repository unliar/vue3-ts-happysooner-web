import{k as l,n as a,p as e,B as s,N as n,O as t,P as i,x as o,z as d,u as r,y as u,T as c,F as v,E as p}from"./vendor.18b3a30d.js";import{u as f,c as g,i as m,a as R,G as k}from"./index.7b8df9f4.js";import{_ as y}from"./index.vue_vue&type=style&index=0&lang.d6191442.js";import{_ as I}from"./SimpleInfoItem.b3f6f051.js";import"./time.93dfc2a8.js";const b=n();t("data-v-47ffa996");const _={class:"tips"};i();var h=l({expose:[],props:{title:String},setup(l){const n=l;return b(((l,t)=>(a(),e("div",_,s(n.title)+"~",1))))}});h.__scopeId="data-v-47ffa996";const x=n();t("data-v-94b7b0aa");const N={class:"user-header-container"},j={class:"avatar-container"},A={class:"user-info-container"},P={class:"user-info"},U={class:"nickname-op"},B={class:"nickname"},S={class:"user-article-cotainer"};i();var z=l({expose:[],props:{uid:{required:!0,type:Number,validator:l=>!isNaN(+l)}},setup(l){const n=l,t=f(),i=g(),{data:b}=m(n.uid);watch((()=>b.value.ErrorMsg),(l=>{l&&i.error(l)}));const _=reactive({list:[],page:1,loading:!1,loaded:!1}),z=computed((()=>{var l;return t.User.Id===(null==(l=b.value.Result)?void 0:l.Id)})),C=computed((()=>{var l;return`${null==(l=b.value.Result)?void 0:l.Nickname}的个人中心`}));R({title:C});const D=()=>{console.log("退出登录"),t.ResetUserStore(),i.success("退出登录成功~")},E=()=>{var l;_.loading=!0,k({UID:null==(l=b.value.Result)?void 0:l.Id,Page:_.page+1}).then((l=>{var a,e,s,n;0!==(null!=(e=null==(a=l.Result)?void 0:a.Articles)?e:[]).length?(_.page+=1,_.list=[..._.list,...null!=(n=null==(s=l.Result)?void 0:s.Articles)?n:[]]):_.loaded=!0})).finally((()=>{_.loading=!1}))};return onMounted((()=>{var l,a;l=n.uid,a=1,_.loading=!0,k({UID:l,Page:a=a||1}).then((l=>{var e,s;const n=null!=(s=null==(e=null==l?void 0:l.Result)?void 0:e.Articles)?s:[];_.page=a,_.list=n,0===n.length?_.loaded=!0:_.loaded=!1})).finally((()=>{_.loading=!1}))})),x(((l,n)=>{const t=o("Avatar"),i=o("LoadingBall");return a(),e(y,null,{default:x((()=>{var l,n,o,f,g;return[d("main",null,[d("div",N,[d("div",j,[d(t,{size:"150px",src:null==(l=r(b).Result)?void 0:l.Avatar},null,8,["src"])]),d("div",A,[d("div",P,[d("span",U,[d("span",B,s(null==(n=r(b).Result)?void 0:n.Nickname),1)]),r(z)?(a(),e("span",{key:0,class:"op-btn",onClick:D},"退出")):u("",!0)]),d("div",null,s(null==(o=r(b).Result)?void 0:o.Location)+" · "+s(null==(f=r(b).Result)?void 0:f.Profession),1),d("div",null,s(null==(g=r(b).Result)?void 0:g.Brief),1)])]),d("div",S,[d(c,{name:"list"},{default:x((()=>[(a(!0),e(v,null,p(_.list,(l=>(a(),e(I,{key:l.Id,info:l},null,8,["info"])))),128))])),_:1}),_.list.length>0&&!_.loaded&&!_.loading?(a(),e("div",{key:0,class:"more-list",onClick:E}," 加载更多 ")):u("",!0),d(i,{loading:_.list.length>0&&_.loading},null,8,["loading"]),_.loaded?(a(),e(h,{key:1,title:"世界终有尽头~"})):u("",!0)])])]})),_:1})}))}});z.__scopeId="data-v-94b7b0aa";export default z;
