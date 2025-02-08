import{_ as M,y as D,M as S,N as W,q as y,O as z,P as R,o as r,c as m,a as i,a5 as Y,ab as te,V as G,U as I,e as J,W as U,J as g,f as h,ac as oe,r as f,j as se,b as n,w as $,l as F,F as ne,Y as ie,u as T,a2 as re,a3 as ue}from"./CVTLfr-j.js";import{u as Z,_ as de,a as me}from"./DTyaJT8V.js";import{_ as pe}from"./DJXwE0iC.js";import{_ as ce}from"./J3ZPWQxr.js";import{z as p}from"./DXqQCM1T.js";import{u as ve}from"./aiGwtZwV.js";import{u as be}from"./tc4O3Aqh.js";import"./CTksWtrq.js";import"./BaWsLenN.js";import"./CkJbm7BT.js";import"./BQaAxLrp.js";const fe=D({inheritAttrs:!1,props:{value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>S.ui.radio.default.color,validator(e){return S.ui.colors.includes(e)}},ui:{type:Object,default:()=>S.ui.radio}},emits:["update:modelValue","change"],setup(e,{emit:s}){const V=W(),t=y(()=>z({},e.ui,V.ui.radio)),{emitFormBlur:k}=Z(),C=y({get(){return e.modelValue},set(v){s("update:modelValue",v),v&&k()}}),a=y(()=>R(t.value.base,t.value.background,t.value.border,t.value.ring.replaceAll("{color}",e.color),t.value.color.replaceAll("{color}",e.color)));return{ui:t,pick:C,inputClass:a}}}),ge={class:"flex items-center h-5"},ye=["id","name","required","value","disabled"],he={key:0,class:"ms-3 text-sm"},Ve=["for"];function ke(e,s,V,t,k,C){return r(),m("div",{class:g(e.ui.wrapper)},[i("div",ge,[Y(i("input",G({id:`${e.name}-${e.value}`,"onUpdate:modelValue":s[0]||(s[0]=a=>e.pick=a),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:["form-radio",e.inputClass]},e.$attrs,{onChange:s[1]||(s[1]=(...a)=>e.onChange&&e.onChange(...a))}),null,16,ye),[[te,e.pick]])]),e.label||e.$slots.label?(r(),m("div",he,[i("label",{for:`${e.name}-${e.value}`,class:g(e.ui.label)},[I(e.$slots,"label",{},()=>[J(U(e.label),1)]),e.required?(r(),m("span",{key:0,class:g(e.ui.required)},"*",2)):h("",!0)],10,Ve),e.help?(r(),m("p",{key:0,class:g(e.ui.help)},U(e.help),3)):h("",!0)])):h("",!0)],2)}const Ce=M(fe,[["render",ke]]),$e=D({inheritAttrs:!1,props:{value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>S.ui.checkbox.default.color,validator(e){return S.ui.colors.includes(e)}},ui:{type:Object,default:()=>S.ui.checkbox}},emits:["update:modelValue","change"],setup(e,{emit:s}){const V=W(),t=y(()=>z({},e.ui,V.ui.checkbox)),{emitFormBlur:k}=Z(),C=y({get(){return e.modelValue},set(c){s("update:modelValue",c)}}),a=c=>{s("change",c),k()},v=y(()=>R(t.value.base,t.value.rounded,t.value.background,t.value.border,t.value.ring.replaceAll("{color}",e.color),t.value.color.replaceAll("{color}",e.color)));return{ui:t,toggle:C,inputClass:v,onChange:a}}}),_e={class:"flex items-center h-5"},Le=["id","name","required","value","disabled","checked","indeterminate"],Se={key:0,class:"ms-3 text-sm"},Ue=["for"];function Be(e,s,V,t,k,C){return r(),m("div",{class:g(e.ui.wrapper)},[i("div",_e,[Y(i("input",G({id:e.name,"onUpdate:modelValue":s[0]||(s[0]=a=>e.toggle=a),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:["form-checkbox",e.inputClass]},e.$attrs,{onChange:s[1]||(s[1]=(...a)=>e.onChange&&e.onChange(...a))}),null,16,Le),[[oe,e.toggle]])]),e.label||e.$slots.label?(r(),m("div",Se,[i("label",{for:e.name,class:g(e.ui.label)},[I(e.$slots,"label",{},()=>[J(U(e.label),1)]),e.required?(r(),m("span",{key:0,class:g(e.ui.required)},"*",2)):h("",!0)],10,Ue),e.help?(r(),m("p",{key:0,class:g(e.ui.help)},U(e.help),3)):h("",!0)])):h("",!0)],2)}const Ne=M($e,[["render",Be]]),qe={class:"p-6"},we={class:"flex gap-4"},je={class:"flex items-center gap-2"},Ae={key:0,class:"text-red-500"},Ee={class:"flex items-center gap-2"},Oe={key:0,class:"text-red-500"},Pe={class:"space-y-2"},Fe={class:"mt-2"},Te={class:"flex items-center gap-2"},Ke={__name:"notifications",setup(e){const{categoryList:s}=be(),{setOverallLimit:V,setCategoryLimit:t,setLimitTimePeriod:k,setNotificationSettings:C}=ve(),a=f("overall"),v=f(0),c=f([{category:"",amount:0}]),q=f("monthly"),d=f(!1),b=f({email:!0,push:!1,threshold:80}),_=f(""),L=f(""),H=[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"},{value:"yearly",label:"Yearly"}];se(a,u=>{u==="overall"?(c.value=[{category:"",amount:0}],L.value=""):(v.value=0,_.value="")});const K=y(()=>a.value==="overall"?p.object({overallLimit:p.number().positive("Overall spending limit must be a positive number."),notifications:p.object({threshold:p.number().min(1).max(100)})}):p.object({categoryLimits:p.array(p.object({category:p.string().min(1,"Category is required"),amount:p.number().min(0,"Amount must be non-negative")})),notifications:p.object({threshold:p.number().min(1).max(100)})})),Q=y(()=>_.value||L.value),X=()=>{c.value.push({category:"",amount:0})},x=u=>{c.value.splice(u,1)},ee=()=>{_.value="",L.value="";try{const u=a.value==="overall"?{overallLimit:Number(v.value),notifications:{threshold:Number(b.value.threshold)}}:{categoryLimits:c.value.map(l=>({category:l.category,amount:Number(l.amount)})),notifications:{threshold:Number(b.value.threshold)}};return K.value.parse(u),!0}catch(u){return u instanceof p.ZodError&&u.errors.forEach(l=>{l.path[0]==="overallLimit"?_.value=l.message:l.path[0]==="categoryLimits"&&(L.value="Please check category limits for errors")}),!1}},le=async()=>{if(ee()){d.value=!0;try{a.value==="overall"?await V({amount:v.value}):await Promise.all(c.value.map(u=>t({category:u.category,amount:u.amount}))),await k(q.value),await C(b.value),alert("Settings saved successfully!")}catch(u){console.error("Error saving settings:",u),alert("Failed to save settings. Please try again.")}finally{d.value=!1}}};return(u,l)=>{const A=Ce,B=de,w=me,E=pe,j=ue,O=Ne,ae=ce;return r(),m("div",qe,[n(ae,null,{header:$(()=>l[7]||(l[7]=[i("h1",{class:"text-3xl font-bold"},"Spent Limiter",-1)])),default:$(()=>[i("form",{onSubmit:re(le,["prevent"])},[n(B,{label:"Limit Type",class:"mb-4"},{default:$(()=>[i("div",we,[n(A,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=o=>a.value=o),value:"overall",label:"Overall Spending Limit"},null,8,["modelValue"]),n(A,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=o=>a.value=o),value:"category",label:"Category Spending Limits"},null,8,["modelValue"])])]),_:1}),a.value==="overall"?(r(),F(B,{key:0,label:"Overall Spending Limit",class:"mb-4"},{default:$(()=>[i("div",je,[n(w,{type:"number",modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=o=>v.value=o),placeholder:"Enter overall spending limit",disabled:d.value,step:"0.01",min:"0"},null,8,["modelValue","disabled"])]),_.value?(r(),m("span",Ae,U(_.value),1)):h("",!0)]),_:1})):(r(),F(B,{key:1,label:"Category Spending Limits",class:"mb-4"},{default:$(()=>[(r(!0),m(ne,null,ie(c.value,(o,P)=>(r(),m("div",{key:P,class:"mb-2"},[i("div",Ee,[n(E,{modelValue:o.category,"onUpdate:modelValue":N=>o.category=N,options:T(s),class:"flex-1",disabled:d.value},null,8,["modelValue","onUpdate:modelValue","options","disabled"]),n(w,{type:"number",modelValue:o.amount,"onUpdate:modelValue":N=>o.amount=N,placeholder:"Limit amount",class:"w-32",disabled:d.value,step:"0.01",min:"0"},null,8,["modelValue","onUpdate:modelValue","disabled"]),n(j,{color:"red",variant:"soft",icon:"i-heroicons-trash",onClick:N=>x(P),disabled:d.value},null,8,["onClick","disabled"])])]))),128)),n(j,{size:"sm",color:"gray",variant:"soft",icon:"i-heroicons-plus",label:"Add Category Limit",onClick:X,disabled:d.value||c.value.length>=T(s).length,class:"mt-2"},null,8,["disabled"]),L.value?(r(),m("span",Oe,U(L.value),1)):h("",!0)]),_:1})),n(B,{label:"Limit Time Period",class:"mb-4"},{default:$(()=>[n(E,{modelValue:q.value,"onUpdate:modelValue":l[3]||(l[3]=o=>q.value=o),options:H,disabled:d.value},null,8,["modelValue","disabled"])]),_:1}),n(B,{label:"Notification Settings",class:"mb-4"},{default:$(()=>[i("div",Pe,[n(O,{modelValue:b.value.email,"onUpdate:modelValue":l[4]||(l[4]=o=>b.value.email=o),label:"Email notifications",disabled:d.value},null,8,["modelValue","disabled"]),n(O,{modelValue:b.value.push,"onUpdate:modelValue":l[5]||(l[5]=o=>b.value.push=o),label:"Push notifications",disabled:d.value},null,8,["modelValue","disabled"]),i("div",Fe,[l[9]||(l[9]=i("label",{class:"text-sm text-gray-600"},"Warning Threshold",-1)),i("div",Te,[n(w,{type:"number",modelValue:b.value.threshold,"onUpdate:modelValue":l[6]||(l[6]=o=>b.value.threshold=o),placeholder:"Warning threshold %",class:"w-32",disabled:d.value,min:"1",max:"100"},null,8,["modelValue","disabled"]),l[8]||(l[8]=i("span",{class:"text-sm text-gray-600"},"% of limit",-1))])])])]),_:1}),n(j,{class:"mt-4",type:"submit",color:"black",variant:"solid",label:"Save Settings",loading:d.value,disabled:d.value||Q.value},null,8,["loading","disabled"])],32)]),_:1})])}}};export{Ke as default};
