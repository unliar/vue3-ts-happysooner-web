import{d as a,x as e,M as l,c as t,k as n,D as r,r as s,o as i,a as u,b as o,h as v,t as d,m as c,w as p,p as f,i as g}from"./index.8a867a04.js";import{_ as m}from"./index.vue_vue&type=style&index=0&lang.eff5b6a1.js";import"./vendor.46abe524.js";const b=p("data-v-0c5be47c");f("data-v-0c5be47c");const x={key:0},y={class:"article-title"},R={class:"article-nav-container"},_={class:"article-nav"};g();var h=a({expose:[],props:{query:{type:Object}},setup(a){var p;const f=a,g=e(),{data:h,loading:j}=l(null==(p=f.query)?void 0:p.date),M=t((()=>{var a;return null==(a=h.value.Result)?void 0:a.title})),$=t((()=>{var a;return null==(a=h.value.Result)?void 0:a.author})),k=t((()=>{var a;return null==(a=h.value.Result)?void 0:a.content})),L=t((()=>{var a;return null==(a=h.value.Result)?void 0:a.date.prev}));return n({title:t((()=>{var a,e;return`每日阅读 - ${null==(a=h.value.Result)?void 0:a.title} - ${null==(e=h.value.Result)?void 0:e.author}`})),meta:[{name:"description",content:t((()=>{var a;return`${null==(a=h.value.Result)?void 0:a.digest}`}))}]}),r((()=>h.value.ErrorMsg),(a=>{a&&g.warning(a)})),b(((a,e)=>{const l=s("LoadingBall"),t=s("router-link");return i(),u(m,null,{default:b((()=>[o(l,{loading:v(j),padding:"30vh 0",infoSize:"18px",info:"努力加载中"},null,8,["loading"]),v(j)?c("",!0):(i(),u("main",x,[o("h1",y,d(v(M)),1),o("div",null,"作者："+d(v($)),1),o("div",{class:"article-container",innerHTML:v(k)},null,8,["innerHTML"]),o("div",R,[o("div",_,[o(t,{to:`/daily-articles?date=${v(L)}`},{default:b((()=>[o("a",null,"查看"+d(v(L))+"的文章",1)])),_:1},8,["to"])])])]))])),_:1})}))}});h.__scopeId="data-v-0c5be47c";export default h;
