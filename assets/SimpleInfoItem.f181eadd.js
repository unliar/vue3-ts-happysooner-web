import{F as c}from"./time.c677e366.js";import{d as r,r as d,o as l,c as m,f as n,w as a,a as e,t as o,g as _,h as f,_ as p,p as u,i as h}from"./index.9f66ff77.js";const I=t=>(u("data-v-15c332d0"),t=t(),h(),t),v={class:"item-container"},S={class:"article-title content-limit-one"},x={class:"item-summary content-limit-two"},y={class:"item-info"},C={class:"article-info-base"},N=I(()=>e("span",{class:"item-dot"},"\xB7",-1)),k={class:"article-info-time"},w=r({__name:"SimpleInfoItem",props:{info:{type:Object,required:!0}},setup(t){const i=c(t.info.CreatedAt);return(A,B)=>{const s=d("router-link");return l(),m("div",v,[n(s,{to:`/post/${t.info.Id}`},{default:a(()=>[e("h2",S,o(t.info.Title),1),e("div",x,o(t.info.Summary),1)]),_:1},8,["to"]),e("div",y,[e("span",C,[e("span",null,o(t.info.Category.CN),1),N,e("span",null,[n(s,{to:`/users/${t.info.AuthorInfo.UID}`},{default:a(()=>[_(o(t.info.AuthorInfo.Nickname),1)]),_:1},8,["to"])])]),e("span",k,o(f(i)),1)])])}}});var D=p(w,[["__scopeId","data-v-15c332d0"]]);export{D as S};