import{aj as U,h as C,q as m,o as u,c as f,a as e,b as o,w as c,e as B,u as t,l as N,W as p,f as A,n as d,d as M,K as V,a1 as $,L as I,ak as T,U as j}from"./C0ScshDG.js";import{_ as q}from"./D8Ts9Off.js";import{u as D}from"./BytgbpEt.js";import{u as H}from"./9hdlw3mI.js";import"./BhU0Bkwj.js";import"./DKh5rKPv.js";import"./Di2Zcv0U.js";import"./BJQQ_rqA.js";const L=()=>U("color-mode").value,z={class:"flex justify-between items-center mt-10"},E={class:"flex items-center gap-2"},F={class:"flex items-center"},K={class:"text-left"},O={class:"font-medium text-gray-900 dark:text-white"},W={class:"truncate"},G={__name:"app-header",setup(h){const{avatarUrl:r}=D(),s=C(),i=H(),x=[[{slot:"account",disabled:!0}],[{label:"Settings",icon:"i-heroicons-cog-8-tooth",click:()=>d("/settings/profile")},{label:"Sign out",icon:"i-heroicons-arrow-left-on-rectangle",click:async()=>(await i.auth.signOut(),d("/login"))}]],n=L(),g=m(()=>n.preference==="light"?"black":"white"),k=m(()=>n.preference==="light"?"i-heroicons-moon":"i-heroicons-sun");function b(){n.preference=n.preference==="dark"?"light":"dark"}return(Q,a)=>{const w=M,_=V,v=$,y=I,S=q;return u(),f("header",z,[e("div",E,[o(w,{to:"/",class:"text-2xl font-bold"},{default:c(()=>a[0]||(a[0]=[B("My Finance Tracker")])),_:1}),o(_,{name:"i-heroicons-banknotes",class:"w-5 h-5"})]),e("div",null,[e("div",F,[o(v,{icon:t(k),color:t(g),size:"sm",square:"",onClick:b,class:"dark:text-white ms-2 mr-2"},null,8,["icon","color"]),t(s)?(u(),N(S,{key:0,items:x,ui:{item:{disabled:"cursor-text select-text"},width:"w-64"}},{account:c(({item:l})=>[e("div",K,[a[1]||(a[1]=e("p",null,"Signed in as",-1)),e("p",O,p(t(s).user_metadata.full_name??t(s).email),1)])]),item:c(({item:l})=>[e("span",W,p(l.label),1),o(_,{name:l.icon,class:"flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"},null,8,["name"])]),default:c(()=>[o(y,{src:t(r)??"https://avatars.githubusercontent.com/u/739984?v=4",alt:"Avatar"},null,8,["src"])]),_:1})):A("",!0)])])])}}},J={class:"container mx-auto max-w-4xl"},P={class:"my-10"},ne={__name:"default",setup(h){return T({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter&display=swap",crossorigin:""}]}),(r,s)=>{const i=G;return u(),f("div",J,[o(i),e("main",P,[j(r.$slots,"default")])])}}};export{ne as default};
