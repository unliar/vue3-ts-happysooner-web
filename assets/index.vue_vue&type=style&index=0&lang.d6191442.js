import{b as a,u as t}from"./index.7b8df9f4.js";import{k as e,x as s,n as r,p as n,z as o,B as l,u as i,N as c,O as u,A as d,P as p,S as v,G as f,F as h}from"./vendor.18b3a30d.js";const b=c();u("data-v-e7338c34");const m={class:"happy-header-container"},y={class:"happy-header-wrapper"},k={class:"title-container"},g={class:"brief"},w={class:"tools-container"},_={key:0,class:"tools-user user-center"},F={key:1,class:"tools-user user-action-btn"},x=d("登录/注册");p();var I=e({expose:[],props:{title:{type:String,required:!0},brief:{type:String}},setup(e){const c=e,u=a(),d=()=>{u.push("/")},p=t();computed((()=>{var a,t;return!!(null==(t=null==(a=p.User)?void 0:a.Roles)?void 0:t.find((a=>"Author"==a.Title)))}));const v=computed((()=>{var a;return null!=(a=p.User.Id)?a:0})),f=computed((()=>{var a;return null!=(a=p.User.Avatar)?a:""})),h=c.title,I=c.brief;return b(((a,t)=>{const e=s("Avatar"),c=s("router-link");return r(),n("header",m,[o("div",y,[o("div",k,[o("div",{class:"title",onClick:d},l(i(h)),1),o("div",g,l(i(I)),1)]),o("div",w,[i(v)>0?(r(),n("span",_,[o(c,{to:`/users/${i(v)}`},{default:b((()=>[o(e,{src:i(f),size:"40px"},null,8,["src"])])),_:1},8,["to"])])):(r(),n("span",F,[o(c,{to:"/signin"},{default:b((()=>[x])),_:1})]))])])])}))}});I.__scopeId="data-v-e7338c34";const M=c();u("data-v-c949bfb0");const A={class:"footer-container"},z={class:"footer-info content-limit-three"},U=o("a",{href:"//www.beian.miit.gov.cn/",target:"_blank",class:"icp-link",rel:"nofollow"},"粤ICP备20013375号-1",-1),j=o("div",null,"本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。",-1),O={class:"site-status"},S=d(" 本网站已坚持用 "),$=o("span",{class:"my-shake"},"❤️",-1),C=d("发 "),D=o("span",{class:"my-shake"},"⚡",-1),P=o("img",{src:"https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json"},null,-1),T=o("div",null,"本网站的作者头发还剩下挺多的。",-1),q={class:"footer-info"},B={class:"site-link"},G=d("关于本站"),N=d("随机阅读"),R=o("span",null,[o("a",{href:"https://github.com/unliar/vue3-ts-happysooner-web"},"本站源码")],-1),Y=v('<div class="friend-link" data-v-c949bfb0> 友情链接: <a href="//www.tuccuay.com/" target="_blank" data-v-c949bfb0>Tuccuay</a><a href="//orx.me/" target="_blank" data-v-c949bfb0>Orvice</a><a href="//www.oylz.site" target="_blank" data-v-c949bfb0>Oylz</a><a href="//nuomi1.github.io" target="_blank" data-v-c949bfb0>nuomi1</a></div>',1);p();var E=e({expose:[],setup(a){const t=ref("2021"),e=reactive({day:0,hour:0,min:0,sec:0});let i;return onMounted((()=>{const a=(new Date).getFullYear();t.value=`${a}`,i=setInterval((()=>{const a=Date.now(),t=Math.floor((a-15671808e5)/1e3),s=Math.floor(t/60/60/24),r=Math.floor(t/60/60)%24,n=Math.floor(t/60)%60,o=Math.floor(t%60);e.day=s,e.hour=r,e.min=n,e.sec=o}))})),onUnmounted((()=>{clearInterval(i)})),M(((a,i)=>{const c=s("router-link");return r(),n("footer",A,[o("div",z,[o("div",null,[d(" © 2019 - "+l(t.value)+" 远浅 ",1),U]),j,o("div",O,[S,$,C,D,d(" 运行了 "+l(e.day)+"天"+l(e.hour)+"小时 "+l(e.min)+"分"+l(e.sec)+"秒。 ",1),P]),T]),o("div",q,[o("div",B,[o("span",null,[o(c,{to:"/about"},{default:M((()=>[G])),_:1})]),o("span",null,[o(c,{to:"/daily-articles"},{default:M((()=>[N])),_:1})]),R]),Y])])}))}});E.__scopeId="data-v-c949bfb0";const H={class:"main-container"},J={class:"sticky-container"},K={class:"default-layout-container"};var L=e({expose:[],setup:a=>(a,t)=>(r(),n(h,null,[o("div",H,[o("div",J,[o(I,{title:"远浅",brief:"理解他人，内省自己。"})]),o("div",K,[f(a.$slots,"default")])]),o(E)],64))});export{L as _};
