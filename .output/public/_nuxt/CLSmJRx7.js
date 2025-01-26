import{B as h,q as k,K as o,L as j,l as i,M as q,x as W,ae as G,D as L,z as s,_ as P,I as O,r as E,y as U,N as m,o as I,c as z,a as D,S as H,R as p,H as y,b as N,f as $,af as K}from"./Df1knQT9.js";const R=()=>{const e=h("form-events",void 0),l=h("form-path",void 0);return{emitFormBlur:()=>{e&&l&&e.emit({type:"blur",path:l})}}},Z=k({props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(o.ui.formGroup.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},ui:{type:Object,default:()=>o.ui.formGroup}},setup(e,{slots:l}){const u=j(),n=i(()=>q({},e.ui,u.ui.formGroup));W("form-path",e.name);const a=h("form-errors",null),f=i(()=>{var g,t;return e.error&&typeof e.error=="string"?e.error:(t=(g=a==null?void 0:a.value)==null?void 0:g.find(v=>v.path===e.name))==null?void 0:t.message}),d=i(()=>G(l)),c=i(()=>d.value.map(g=>{var v;const t={};return f.value?(t.oldColor=(v=g.props)==null?void 0:v.color,t.color="red"):t.oldColor&&(t.color=t.oldColor),e.name&&(t.name=e.name),e.size&&(t.size=e.size),L(g,t)}));return()=>s("div",{class:[n.value.wrapper]},[e.label&&s("div",{class:[n.value.label.wrapper,n.value.size[e.size]]},[s("label",{for:e.name,class:[n.value.label.base,e.required&&n.value.label.required]},e.label),e.hint&&s("span",{class:[n.value.hint]},e.hint)]),e.description&&s("p",{class:[n.value.description,n.value.size[e.size]]},e.description),s("div",{class:[!!e.label&&n.value.container]},[...c.value,f.value?s("p",{class:[n.value.error,n.value.size[e.size]]},f.value):e.help?s("p",{class:[n.value.help,n.value.size[e.size]]},e.help):null])])}}),J=k({components:{UIcon:O},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>o.ui.input.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>o.ui.input.default.size,validator(e){return Object.keys(o.ui.input.size).includes(e)}},color:{type:String,default:()=>o.ui.input.default.color,validator(e){return[...o.ui.colors,...Object.keys(o.ui.input.color)].includes(e)}},variant:{type:String,default:()=>o.ui.input.default.variant,validator(e){return[...Object.keys(o.ui.input.variant),...Object.values(o.ui.input.color).flatMap(l=>Object.keys(l))].includes(e)}},ui:{type:Object,default:()=>o.ui.input}},emits:["update:modelValue","blur"],setup(e,{emit:l,slots:u}){const n=j(),a=i(()=>q({},e.ui,n.ui.input)),{emitFormBlur:f}=R(),d=E(null),c=()=>{var r;e.autofocus&&((r=d.value)==null||r.focus())},g=r=>{l("update:modelValue",r.target.value)},t=r=>{f(),l("blur",r)};U(()=>{setTimeout(()=>{c()},100)});const v=i(()=>{var B,C;const r=((C=(B=a.value.color)==null?void 0:B[e.color])==null?void 0:C[e.variant])||a.value.variant[e.variant];return m(a.value.base,a.value.rounded,a.value.placeholder,a.value.size[e.size],e.padded?a.value.padding[e.size]:"p-0",r==null?void 0:r.replaceAll("{color}",e.color),(b.value||u.leading)&&a.value.leading.padding[e.size],(S.value||u.trailing)&&a.value.trailing.padding[e.size])}),b=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),S=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),V=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),A=i(()=>e.loading&&!b.value?e.loadingIcon:e.trailingIcon||e.icon),w=i(()=>m(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[e.size])),F=i(()=>m(a.value.icon.base,n.ui.colors.includes(e.color)&&a.value.icon.color.replaceAll("{color}",e.color),a.value.icon.size[e.size],e.loading&&"animate-spin")),T=i(()=>m(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[e.size])),M=i(()=>m(a.value.icon.base,n.ui.colors.includes(e.color)&&a.value.icon.color.replaceAll("{color}",e.color),a.value.icon.size[e.size],e.loading&&!b.value&&"animate-spin"));return{ui:a,input:d,isLeading:b,isTrailing:S,inputClass:v,leadingIconName:V,leadingIconClass:F,leadingWrapperIconClass:w,trailingIconName:A,trailingIconClass:M,trailingWrapperIconClass:T,onInput:g,onBlur:t}}}),Q=["id","name","value","type","required","placeholder","disabled"];function X(e,l,u,n,a,f){const d=O;return I(),z("div",{class:y(e.ui.wrapper)},[D("input",H({id:e.name,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.$attrs,{onInput:l[0]||(l[0]=(...c)=>e.onInput&&e.onInput(...c)),onBlur:l[1]||(l[1]=(...c)=>e.onBlur&&e.onBlur(...c))}),null,16,Q),p(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(I(),z("span",{key:0,class:y(e.leadingWrapperIconClass)},[p(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[N(d,{name:e.leadingIconName,class:y(e.leadingIconClass)},null,8,["name","class"])])],2)):$("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(I(),z("span",{key:1,class:y(e.trailingWrapperIconClass)},[p(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[N(d,{name:e.trailingIconName,class:y(e.trailingIconClass)},null,8,["name","class"])])],2)):$("",!0)],2)}const _=P(J,[["render",X]]),x=()=>{const e=K();return{toastSuccess:({title:l,description:u=null})=>{e.add({title:l,description:u,icon:"i-heroicons-check-circle",color:"green",type:"success"})},toastError:({title:l,description:u=null})=>{e.add({title:l,description:u,icon:"i-heroicons-exclamation-circle",color:"red",type:"error"})}}};export{Z as _,x as a,_ as b,R as u};
