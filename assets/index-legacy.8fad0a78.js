!function(){var e=document.createElement("style");e.innerHTML=".happy-header-wrapper[data-v-e7338c34]{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;height:60px;color:#6a6a6a;margin:0 auto}.title[data-v-e7338c34]:hover{color:#000}.title[data-v-e7338c34]{font-weight:600;font-size:18px;cursor:pointer}.brief[data-v-e7338c34],.tools-user[data-v-e7338c34]{font-size:14px}.tools-container[data-v-e7338c34]{display:flex;justify-content:center;align-items:center}.site-status[data-v-767f7aee]{display:flex;align-items:center;flex-wrap:wrap}.footer-container[data-v-767f7aee]{display:flex;align-items:flex-start;justify-content:space-between;background:#f5f5f5;line-height:1.5;font-size:14px;color:#999;padding:10px 5%}@media screen and (min-width: 1200px){.footer-container[data-v-767f7aee]{padding:10px 15%}}.footer-info[data-v-767f7aee]{padding:5px}.daily-read[data-v-767f7aee]{padding:0 2px;color:#6a6a6a}.icp-link[data-v-767f7aee]{color:#999}a[data-v-767f7aee]{color:#6a6a6a;display:inline-block}.friend-link a[data-v-767f7aee]{padding:0 2px}.site-link span[data-v-767f7aee]{width:60px}.site-link[data-v-767f7aee]{display:flex}sub[data-v-767f7aee]{font-size:12px}.my-shake[data-v-767f7aee]{animation:my-face-767f7aee 1.5s infinite ease;display:inline-block;margin:0 1px}@keyframes my-face-767f7aee{0%{-webkit-transform:translate(0px,0px) rotate(0deg) scale(1)}10%{-webkit-transform:translate(-1px,-2px) rotate(-1deg) scale(1.1)}20%{-webkit-transform:translate(-3px,0px) rotate(1deg) scale(1.2)}30%{-webkit-transform:translate(0px,2px) rotate(0deg) scale(1.3)}40%{-webkit-transform:translate(1px,-1px) rotate(1deg) scale(1.4)}50%{-webkit-transform:translate(-1px,2px) rotate(-1deg) scale(1.5)}60%{-webkit-transform:translate(-3px,1px) rotate(0deg) scale(1.4)}70%{-webkit-transform:translate(2px,1px) rotate(-1deg) scale(1.3)}80%{-webkit-transform:translate(-1px,-1px) rotate(1deg) scale(1.2)}90%{-webkit-transform:translate(2px,2px) rotate(0deg) scale(1.1)}to{-webkit-transform:translate(0px,0px) rotate(-1deg) scale(1)}}.sticky-container{padding:0 5%;background:rgba(255,255,255)}.default-layout-container{padding:0 5%}@media screen and (min-width: 1200px){.sticky-container,.default-layout-container{padding:0 15%}}.main-container{min-height:calc(100vh - 80px)}\n",document.head.appendChild(e),System.register(["./index-legacy.e30550da.js"],(function(e){"use strict";var a,t,n,r,s,i,o,l,c,d,p,f,u,m,v,h,g,x;return{setters:[function(e){a=e.d,t=e.m,n=e.u,r=e.r,s=e.o,i=e.c,o=e.a,l=e.t,c=e.h,d=e.f,p=e.w,f=e.g,u=e._,m=e.n,v=e.p,h=e.i,g=e.b,x=e.F}],execute:function(){const y={class:"happy-header-container"},k={class:"happy-header-wrapper"},w={class:"title-container"},b={class:"brief"},_={class:"tools-container"},F={key:0,class:"tools-user user-center"},z={key:1,class:"tools-user user-action-btn"},M=a({__name:"Header",props:{title:{type:String,required:!0},brief:{type:String}},setup(e){const a=t(),u=e,m=()=>{a.push("/")},v=n();computed((()=>!!v.User?.Roles?.find((e=>"Author"==e.Title))));const h=computed((()=>v.User.Id??0)),g=computed((()=>v.User.Avatar??"")),x=u.title,M=u.brief;return(e,a)=>{const t=r("Avatar"),n=r("router-link");return s(),i("header",y,[o("div",k,[o("div",w,[o("div",{class:"title",onClick:m},l(c(x)),1),o("div",b,l(c(M)),1)]),o("div",_,[c(h)>0?(s(),i("span",F,[d(n,{to:`/users/${c(h)}`},{default:p((()=>[d(t,{src:c(g),size:"40px"},null,8,["src"])])),_:1},8,["to"])])):(s(),i("span",z,[d(n,{to:"/signin"},{default:p((()=>[f("登录/注册")])),_:1})]))])])])}}});var I=u(M,[["__scopeId","data-v-e7338c34"]]);const j=e=>(v("data-v-767f7aee"),e=e(),h(),e),A={class:"footer-container"},T={class:"footer-info content-limit-three"},U=j((()=>o("a",{href:"//www.beian.miit.gov.cn/",target:"_blank",class:"icp-link",rel:"nofollow"},"粤ICP备20013375号-1",-1))),C=j((()=>o("div",null,"本网站不保证网站内容更新完全跟得上时代潮流，请自行求证。",-1))),S={class:"site-status"},$=j((()=>o("span",{class:"my-shake"},"❤️",-1))),D=j((()=>o("span",{class:"my-shake"},"⚡",-1))),H=j((()=>o("img",{src:"https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Funliar%2Fhappy-upptime%2Fmaster%2Fapi%2Fhappysooner-com%2Fuptime.json"},null,-1))),O=j((()=>o("div",null,"本网站的作者头发还剩下挺多的。",-1))),q={class:"footer-info"},E={class:"site-link"},G=j((()=>o("span",null,[o("a",{href:"https://github.com/unliar/vue3-ts-happysooner-web"},"本站源码")],-1))),L=j((()=>o("span",null,[o("a",{href:"https://t.me/happy_naive"},"TG频道")],-1))),P=m('<div class="friend-link" data-v-767f7aee> 友情链接: <a href="//www.tuccuay.com/" target="_blank" data-v-767f7aee>Tuccuay</a><a href="//orx.me/" target="_blank" data-v-767f7aee>Orvice</a><a href="//www.oylz.site" target="_blank" data-v-767f7aee>Oylz</a><a href="//nuomi1.github.io" target="_blank" data-v-767f7aee>nuomi1</a></div>',1),R=a({__name:"Footer",setup(e){const a=ref("2021"),t=reactive({day:0,hour:0,min:0,sec:0});let n;return onMounted((()=>{const e=(new Date).getFullYear();a.value=`${e}`,n=setInterval((()=>{const e=Date.now(),a=Math.floor((e-15671808e5)/1e3),n=Math.floor(a/60/60/24),r=Math.floor(a/60/60)%24,s=Math.floor(a/60)%60,i=Math.floor(a%60);t.day=n,t.hour=r,t.min=s,t.sec=i}))})),onUnmounted((()=>{clearInterval(n)})),(e,n)=>{const u=r("router-link");return s(),i("footer",A,[o("div",T,[o("div",null,[f(" © 2019 - "+l(c(a))+" 远浅 ",1),U]),C,o("div",S,[f(" 本网站已坚持用 "),$,f("发 "),D,f(" 运行了 "+l(c(t).day)+"天"+l(c(t).hour)+"小时 "+l(c(t).min)+"分"+l(c(t).sec)+"秒。 ",1),H]),O]),o("div",q,[o("div",E,[o("span",null,[d(u,{to:"/about"},{default:p((()=>[f("关于本站")])),_:1})]),o("span",null,[d(u,{to:"/daily-articles"},{default:p((()=>[f("随机阅读")])),_:1})]),G,L]),P])])}}});var Y=u(R,[["__scopeId","data-v-767f7aee"]]);const B={class:"main-container"},J={class:"sticky-container"},K={class:"default-layout-container"};e("_",a({__name:"index",setup:e=>(e,a)=>(s(),i(x,null,[o("div",B,[o("div",J,[d(I,{title:"远浅",brief:"理解他人，内省自己。"})]),o("div",K,[g(e.$slots,"default")])]),d(Y)],64))}))}}}))}();
