import{_ as k,y as U,K as v,L as _,a9 as b,M as w,N as V,q as z,O as A,o,c as n,F as B,Y as L,l,w as K,U as i,V as g,f as r,J as c,W as m,a7 as P,b as f,a as S,aa as F}from"./CVTLfr-j.js";import{o as I}from"./BQlmpPki.js";import"./BaWsLenN.js";const O=U({components:{UIcon:v,UAvatar:_,ULink:b},props:{links:{type:Array,default:()=>[]},ui:{type:Object,default:()=>w.ui.verticalNavigation}},setup(a){const t=V();return{ui:z(()=>A({},a.ui,t.ui.verticalNavigation)),omit:I}}});function j(a,t,u,y,p,d){const h=_,C=v,$=b;return o(),n("nav",{class:c(a.ui.wrapper)},[(o(!0),n(B,null,L(a.links,(e,N)=>(o(),l($,g({key:N,ref_for:!0},a.omit(e,["label","icon","iconClass","avatar","badge","click"]),{class:[a.ui.base,a.ui.padding,a.ui.width,a.ui.ring,a.ui.rounded,a.ui.font,a.ui.size],"active-class":a.ui.active,"inactive-class":a.ui.inactive,onClick:e.click,onKeyup:t[0]||(t[0]=P(s=>s.target.blur(),["enter"]))}),{default:K(({isActive:s})=>[i(a.$slots,"avatar",{link:e,isActive:s},()=>[e.avatar?(o(),l(h,g({key:0,ref_for:!0},{size:a.ui.avatar.size,...e.avatar},{class:[a.ui.avatar.base]}),null,16,["class"])):r("",!0)]),i(a.$slots,"icon",{link:e,isActive:s},()=>[e.icon?(o(),l(C,{key:0,name:e.icon,class:c([a.ui.icon.base,s?a.ui.icon.active:a.ui.icon.inactive,e.iconClass])},null,8,["name","class"])):r("",!0)]),i(a.$slots,"default",{link:e,isActive:s},()=>[e.label?(o(),n("span",{key:0,class:c(a.ui.label)},m(e.label),3)):r("",!0)]),i(a.$slots,"badge",{link:e,isActive:s},()=>[e.badge?(o(),n("span",{key:0,class:c([a.ui.badge.base,s?a.ui.badge.active:a.ui.badge.inactive])},m(e.badge),3)):r("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],2)}const q=k(O,[["render",j]]),D={class:"grid grid-cols-6 gap-8"},E={class:"col-span-4"},Y={__name:"settings",setup(a){const t=[{label:"Profile",icon:"i-heroicons-user",to:"/settings/profile"},{label:"Avatar",icon:"i-heroicons-cog-8-tooth",to:"/settings/avatar"},{label:"Settings",icon:"i-heroicons-cog-8-tooth",to:"/settings/settings"},{label:"Notifications",icon:"i-heroicons-bell-alert",to:"/settings/notifications"}];return(u,y)=>{const p=q,d=F;return o(),n("div",D,[f(p,{links:t,class:"col-span-2"}),S("div",E,[f(d)])])}}};export{Y as default};
