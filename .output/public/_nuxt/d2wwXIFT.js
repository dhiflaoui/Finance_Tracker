import{_ as z}from"./DJXwE0iC.js";import{a as D,_ as B}from"./DTyaJT8V.js";import{r as U,o as f,c as C,a as h,b as o,w as v,a7 as L,u as t,i as $,F as j,Y as q,W as G,a3 as A,h as K,l as N,a2 as O}from"./CVTLfr-j.js";import{_ as T}from"./DnddY5KO.js";import{z as d}from"./DXqQCM1T.js";import{a as x,b as M}from"./BQaAxLrp.js";import{u as R}from"./CkJbm7BT.js";import{u as W}from"./CIyTCRbJ.js";import{u as Y}from"./tc4O3Aqh.js";import"./CTksWtrq.js";import"./BaWsLenN.js";const H={class:"flex gap-2 items-start"},J={class:"mt-4 space-y-2"},P={__name:"CategoryInput",props:{categories:{type:Array,required:!0},initialCategories:{type:Array,required:!0}},emits:["update:categories"],setup(b,{emit:w}){const c=b,_=w,a=U(""),n=()=>{if(!a.value)return;const e=[...c.categories,a.value];_("update:categories",e),a.value=""},g=e=>{const r=c.categories.filter(l=>l!==e);_("update:categories",r)};return(e,r)=>{const l=D,y=B,u=A;return f(),C("div",null,[h("div",H,[o(y,{label:"Expense categories",name:"newCategory",class:"flex-1"},{default:v(()=>[o(l,{type:"text",placeholder:"Add new category...",onKeyup:L(n,["enter"]),modelValue:t(a),"onUpdate:modelValue":r[0]||(r[0]=s=>$(a)?a.value=s:null),clearable:""},null,8,["modelValue"])]),_:1}),o(u,{class:"mt-7",onClick:n,color:"primary",size:"md",label:"Add",disabled:!t(a)},null,8,["disabled"])]),h("div",J,[(f(!0),C(j,null,q(b.categories,s=>(f(),C("div",{key:s,class:"flex items-center justify-between p-1 rounded border"},[h("span",null,G(s),1),o(u,{size:"sm",color:"red",variant:"soft",icon:"i-heroicons-trash",onClick:V=>g(s),title:"Delete category"},null,8,["onClick"])]))),128))])])}}},ce={__name:"settings",setup(b){var y,u,s,V;const w=R(),c=K(),{toastSuccess:_,toastError:a}=W(),n=U(!1),{categoryList:g}=Y(),e=U({transactionView:((u=(y=c.value)==null?void 0:y.user_metadata)==null?void 0:u.transaction_view)??x[1],currency:((V=(s=c.value)==null?void 0:s.user_metadata)==null?void 0:V.currency)??"USD",categories:g.value}),r=d.object({transactionView:d.enum(x),currency:d.string(),categories:d.array(d.string())}),l=async()=>{n.value=!0;try{const{error:p}=await w.auth.updateUser({data:{transaction_view:e.value.transactionView,currency:e.value.currency,categories:e.value.categories}});if(p)throw p;_({title:"Settings updated"})}catch(p){a({title:"Error updating settings",description:p.message})}finally{n.value=!1}};return(p,i)=>{const k=z,S=B,F=P,I=A,E=T;return f(),N(E,{state:t(e),schema:t(r),onSubmit:O(l,["prevent"])},{default:v(()=>[o(S,{label:"Transaction View",class:"mb-4",help:"Choose how you would like to view transactions"},{default:v(()=>[o(k,{modelValue:t(e).transactionView,"onUpdate:modelValue":i[0]||(i[0]=m=>t(e).transactionView=m),options:t(x)},null,8,["modelValue","options"])]),_:1}),o(S,{label:"Currency",class:"mb-4",help:"Choose the currency you would like to use"},{default:v(()=>[o(k,{modelValue:t(e).currency,"onUpdate:modelValue":i[1]||(i[1]=m=>t(e).currency=m),options:t(M)},null,8,["modelValue","options"])]),_:1}),o(F,{categories:t(e).categories,"onUpdate:categories":i[2]||(i[2]=m=>t(e).categories=m),"initial-categories":t(g)},null,8,["categories","initial-categories"]),o(I,{class:"mt-4",type:"submit",color:"black",variant:"solid",label:"Save",loading:t(n),disabled:t(n)},null,8,["loading","disabled"])]),_:1},8,["state","schema"])}}};export{ce as default};
