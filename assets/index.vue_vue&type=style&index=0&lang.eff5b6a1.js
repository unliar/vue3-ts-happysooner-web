import{d as a,n as t,u as s,c as e,r,o as l,a as n,b as o,t as i,h as c,w as u,p as f,g as d,i as v,q as p,j as h,l as m,s as y,v as b,e as g,F as k}from"./index.8a867a04.js";const w=u("data-v-4f13ff45");f("data-v-4f13ff45");const _={class:"happy-header-container"},F={class:"happy-header-wrapper"},x={class:"title-container"},I={class:"brief"},M={class:"tools-container"},A={key:0,class:"tools-user user-center"},j={key:1,class:"tools-user user-action-btn"},z=d("登录/注册");v();var U=a({expose:[],props:{title:{type:String,required:!0},brief:{type:String}},setup(a){const u=a,f=t(),d=()=>{f.push("/")},v=s();e((()=>{var a,t;return!!(null==(t=null==(a=v.state.User)?void 0:a.Roles)?void 0:t.find((a=>"Author"==a.Title)))}));const p=e((()=>{var a;return null!=(a=v.state.User.Id)?a:0})),h=e((()=>{var a;return null!=(a=v.state.User.Avatar)?a:""})),m=u.title,y=u.brief;return w(((a,t)=>{const s=r("Avatar"),e=r("router-link");return l(),n("header",_,[o("div",F,[o("div",x,[o("div",{class:"title",onClick:d},i(c(m)),1),o("div",I,i(c(y)),1)]),o("div",M,[c(p)>0?(l(),n("span",A,[o(e,{to:`/users/${c(p)}`},{default:w((()=>[o(s,{src:c(h),size:"40px"},null,8,["src"])])),_:1},8,["to"])])):(l(),n("span",j,[o(e,{to:"/signin"},{default:w((()=>[z])),_:1})]))])])])}))}});U.__scopeId="data-v-4f13ff45";const $=u("data-v-21438ff7");f("data-v-21438ff7");const q={class:"footer-container"},C={class:"footer-info content-limit-three"},D=o("a",{href:"//www.beian.miit.gov.cn/",target:"_blank",class:"icp-link",rel:"nofollow"},"粤ICP备20013375号-1",-1),O=o("div",null,"本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。",-1),S={class:"site-status"},T=d(" 本网站已坚持用 "),P=o("span",{class:"my-shake"},"❤️",-1),R=d("发 "),Y=o("span",{class:"my-shake"},"⚡",-1),B=o("img",{src:"https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json"},null,-1),E=o("div",null,"本网站的作者头发还剩下挺多的。",-1),G={class:"footer-info"},H={class:"site-link"},J=d("关于本站"),K=d("随机阅读"),L=o("span",null,[o("a",{href:"https://github.com/unliar/vue3-ts-happysooner-web"},"本站源码")],-1),N=b('<div class="friend-link" data-v-21438ff7> 友情链接: <a href="//www.tuccuay.com/" target="_blank" data-v-21438ff7>Tuccuay</a><a href="//orx.me/" target="_blank" data-v-21438ff7>Orvice</a><a href="//www.oylz.site" target="_blank" data-v-21438ff7>Oylz</a><a href="//nuomi1.github.io" target="_blank" data-v-21438ff7>nuomi1</a></div>',1);v();var Q=a({expose:[],setup(a){const t=p("2021"),s=h({day:0,hour:0,min:0,sec:0});let e;return m((()=>{const a=(new Date).getFullYear();t.value=`${a}`,e=setInterval((()=>{const a=Date.now(),t=Math.floor((a-15671808e5)/1e3),e=Math.floor(t/60/60/24),r=Math.floor(t/60/60)%24,l=Math.floor(t/60)%60,n=Math.floor(t%60);s.day=e,s.hour=r,s.min=l,s.sec=n}))})),y((()=>{clearInterval(e)})),$(((a,e)=>{const c=r("router-link");return l(),n("footer",q,[o("div",C,[o("div",null,[d(" © 2019 - "+i(t.value)+" 远浅 ",1),D]),O,o("div",S,[T,P,R,Y,d(" 运行了 "+i(s.day)+"天"+i(s.hour)+"小时 "+i(s.min)+"分"+i(s.sec)+"秒。 ",1),B]),E]),o("div",G,[o("div",H,[o("span",null,[o(c,{to:"/about"},{default:$((()=>[J])),_:1})]),o("span",null,[o(c,{to:"/daily-articles"},{default:$((()=>[K])),_:1})]),L]),N])])}))}});Q.__scopeId="data-v-21438ff7";const V={class:"main-container"},W={class:"sticky-container"},X={class:"default-layout-container"};var Z=a({expose:[],setup:a=>(a,t)=>(l(),n(k,null,[o("div",V,[o("div",W,[o(U,{title:"远浅",brief:"理解他人，内省自己。"})]),o("div",X,[g(a.$slots,"default")])]),o(Q)],64))});export{Z as _};