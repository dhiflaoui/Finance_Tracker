import{ah as U,h as C,l as m,o as u,c as h,a as e,b as o,w as c,e as B,u as t,k as N,U as p,f as $,n as d,d as A,I,$ as M,J as V,ai as T,R as D}from"./B9gK5A-A.js";import{_ as H}from"./DKn1uJof.js";import{u as j}from"./DjB-BuO2.js";import{u as q}from"./COzxk5WM.js";import"./DX1MwlTj.js";import"./BwcHCub5.js";import"./B33jBKYt.js";import"./yKdZaUfW.js";const z=()=>U("color-mode").value,E={class:"flex justify-between items-center mt-10"},F={class:"flex items-center gap-2"},J={class:"flex items-center"},L={class:"text-left"},O={class:"font-medium text-gray-900 dark:text-white"},R={class:"truncate"},G={__name:"app-header",setup(f){const{avatarUrl:r}=j(),s=C(),i=q(),x=[[{slot:"account",disabled:!0}],[{label:"Settings",icon:"i-heroicons-cog-8-tooth",click:()=>d("/settings/profile")},{label:"Sign out",icon:"i-heroicons-arrow-left-on-rectangle",click:async()=>(await i.auth.signOut(),d("/login"))}]],n=z(),g=m(()=>n.preference==="light"?"black":"white"),k=m(()=>n.preference==="light"?"i-heroicons-moon":"i-heroicons-sun");function b(){n.preference=n.preference==="dark"?"light":"dark"}return(Q,a)=>{const w=A,_=I,v=M,y=V,S=H;return u(),h("header",E,[e("div",F,[o(w,{to:"/",class:"text-2xl font-bold"},{default:c(()=>a[0]||(a[0]=[B("My Finance Tracker")])),_:1}),o(_,{name:"i-heroicons-banknotes",class:"w-5 h-5"})]),e("div",null,[e("div",J,[o(v,{icon:t(k),color:t(g),size:"sm",square:"",onClick:b,class:"dark:text-white ms-2 mr-2"},null,8,["icon","color"]),t(s)?(u(),N(S,{key:0,items:x,ui:{item:{disabled:"cursor-text select-text"},width:"w-64"}},{account:c(({item:l})=>[e("div",L,[a[1]||(a[1]=e("p",null,"Signed in as",-1)),e("p",O,p(t(s).user_metadata.full_name??t(s).email),1)])]),item:c(({item:l})=>[e("span",R,p(l.label),1),o(_,{name:l.icon,class:"flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"},null,8,["name"])]),default:c(()=>[o(y,{src:t(r)??"https://avatars.githubusercontent.com/u/739984?v=4",alt:"Avatar"},null,8,["src"])]),_:1})):$("",!0)])])])}}},K={class:"container mx-auto max-w-4xl"},P={class:"my-10"},ne={__name:"default",setup(f){return T({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter&display=swap",crossorigin:""}]}),(r,s)=>{const i=G;return u(),h("div",K,[o(i),e("main",P,[D(r.$slots,"default")])])}}};export{ne as default};
