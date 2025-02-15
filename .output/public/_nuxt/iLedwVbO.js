import{_ as Q}from"./DTf8hWUB.js";import{y as C,r as x,B as W,q as S,A as ae,k as z,j as fe,C as be,F as K,x as se,D as X,_ as ge,M as he,N as ye,O as xe,g as V,o as F,l as B,w as g,b as y,J as U,Z as we,a as $,c as Y,Y as te,U as le,e as H,W as M,ae as Ie,a3 as J,K as re,a2 as oe,u as G,i as _e,n as Te}from"./rgeR6B72.js";import{O as q,o as T,A as L,T as Se,i as ue,s as $e,N as ne,u as j,b as P,e as D,a as ke,P as O,d as E}from"./B-YK6MRX.js";import{u as Pe,f as ie,t as Ee}from"./BTnexMj7.js";import{a as de,b as pe,_ as ce}from"./92jBbbUf.js";import{z as N}from"./DXqQCM1T.js";import{u as me}from"./CNK5AUCf.js";import{c as Ue}from"./BQaAxLrp.js";let Fe=C({props:{onFocus:{type:Function,required:!0}},setup(e){let i=x(!0);return()=>i.value?W(ie,{as:"button",type:"button",features:Pe.Focusable,onFocus(m){m.preventDefault();let d,v=50;function u(){var a;if(v--<=0){d&&cancelAnimationFrame(d);return}if((a=e.onFocus)!=null&&a.call(e)){i.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(u)}d=requestAnimationFrame(u)}}):null}});var Ae=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ae||{}),Ne=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ne||{});let ve=Symbol("TabsContext");function R(e){let i=X(ve,null);if(i===null){let m=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,R),m}return i}let ee=Symbol("TabsSSRContext"),Ce=C({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:i,attrs:m,emit:d}){var v;let u=x((v=e.selectedIndex)!=null?v:e.defaultIndex),a=x([]),t=x([]),p=S(()=>e.selectedIndex!==null),I=S(()=>p.value?e.selectedIndex:u.value);function _(n){var c;let b=q(l.tabs.value,T),s=q(l.panels.value,T),w=b.filter(h=>{var k;return!((k=T(h))!=null&&k.hasAttribute("disabled"))});if(n<0||n>b.length-1){let h=j(u.value===null?0:Math.sign(n-u.value),{[-1]:()=>1,0:()=>j(Math.sign(n),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),k=j(h,{0:()=>b.indexOf(w[0]),1:()=>b.indexOf(w[w.length-1])});k!==-1&&(u.value=k),l.tabs.value=b,l.panels.value=s}else{let h=b.slice(0,n),k=[...b.slice(n),...h].find(Z=>w.includes(Z));if(!k)return;let A=(c=b.indexOf(k))!=null?c:l.selectedIndex.value;A===-1&&(A=l.selectedIndex.value),u.value=A,l.tabs.value=b,l.panels.value=s}}let l={selectedIndex:S(()=>{var n,c;return(c=(n=u.value)!=null?n:e.defaultIndex)!=null?c:null}),orientation:S(()=>e.vertical?"vertical":"horizontal"),activation:S(()=>e.manual?"manual":"auto"),tabs:a,panels:t,setSelectedIndex(n){I.value!==n&&d("change",n),p.value||_(n)},registerTab(n){var c;if(a.value.includes(n))return;let b=a.value[u.value];if(a.value.push(n),a.value=q(a.value,T),!p.value){let s=(c=a.value.indexOf(b))!=null?c:u.value;s!==-1&&(u.value=s)}},unregisterTab(n){let c=a.value.indexOf(n);c!==-1&&a.value.splice(c,1)},registerPanel(n){t.value.includes(n)||(t.value.push(n),t.value=q(t.value,T))},unregisterPanel(n){let c=t.value.indexOf(n);c!==-1&&t.value.splice(c,1)}};ae(ve,l);let r=x({tabs:[],panels:[]}),f=x(!1);z(()=>{f.value=!0}),ae(ee,S(()=>f.value?null:r.value));let o=S(()=>e.selectedIndex);return z(()=>{fe([o],()=>{var n;return _((n=e.selectedIndex)!=null?n:e.defaultIndex)},{immediate:!0})}),be(()=>{if(!p.value||I.value==null||l.tabs.value.length<=0)return;let n=q(l.tabs.value,T);n.some((c,b)=>T(l.tabs.value[b])!==T(c))&&l.setSelectedIndex(n.findIndex(c=>T(c)===T(l.tabs.value[I.value])))}),()=>{let n={selectedIndex:u.value};return W(K,[a.value.length<=0&&W(Fe,{onFocus:()=>{for(let c of a.value){let b=T(c);if((b==null?void 0:b.tabIndex)===0)return b.focus(),!0}return!1}}),L({theirProps:{...m,...Se(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:n,slots:i,attrs:m,name:"TabGroup"})])}}}),Oe=C({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:i,slots:m}){let d=R("TabList");return()=>{let v={selectedIndex:d.selectedIndex.value},u={role:"tablist","aria-orientation":d.orientation.value};return L({ourProps:u,theirProps:e,slot:v,attrs:i,slots:m,name:"TabList"})}}}),Be=C({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:i,slots:m,expose:d}){var v;let u=(v=e.id)!=null?v:`headlessui-tabs-tab-${ue()}`,a=R("Tab"),t=x(null);d({el:t,$el:t}),z(()=>a.registerTab(t)),se(()=>a.unregisterTab(t));let p=X(ee),I=S(()=>{if(p.value){let s=p.value.tabs.indexOf(u);return s===-1?p.value.tabs.push(u)-1:s}return-1}),_=S(()=>{let s=a.tabs.value.indexOf(t);return s===-1?I.value:s}),l=S(()=>_.value===a.selectedIndex.value);function r(s){var w;let h=s();if(h===D.Success&&a.activation.value==="auto"){let k=(w=ke(t))==null?void 0:w.activeElement,A=a.tabs.value.findIndex(Z=>T(Z)===k);A!==-1&&a.setSelectedIndex(A)}return h}function f(s){let w=a.tabs.value.map(h=>T(h)).filter(Boolean);if(s.key===P.Space||s.key===P.Enter){s.preventDefault(),s.stopPropagation(),a.setSelectedIndex(_.value);return}switch(s.key){case P.Home:case P.PageUp:return s.preventDefault(),s.stopPropagation(),r(()=>O(w,E.First));case P.End:case P.PageDown:return s.preventDefault(),s.stopPropagation(),r(()=>O(w,E.Last))}if(r(()=>j(a.orientation.value,{vertical(){return s.key===P.ArrowUp?O(w,E.Previous|E.WrapAround):s.key===P.ArrowDown?O(w,E.Next|E.WrapAround):D.Error},horizontal(){return s.key===P.ArrowLeft?O(w,E.Previous|E.WrapAround):s.key===P.ArrowRight?O(w,E.Next|E.WrapAround):D.Error}}))===D.Success)return s.preventDefault()}let o=x(!1);function n(){var s;o.value||(o.value=!0,!e.disabled&&((s=T(t))==null||s.focus({preventScroll:!0}),a.setSelectedIndex(_.value),Ee(()=>{o.value=!1})))}function c(s){s.preventDefault()}let b=$e(S(()=>({as:e.as,type:i.type})),t);return()=>{var s,w;let h={selected:l.value,disabled:(s=e.disabled)!=null?s:!1},{...k}=e,A={ref:t,onKeydown:f,onMousedown:c,onClick:n,id:u,role:"tab",type:b.value,"aria-controls":(w=T(a.panels.value[_.value]))==null?void 0:w.id,"aria-selected":l.value,tabIndex:l.value?0:-1,disabled:e.disabled?!0:void 0};return L({ourProps:A,theirProps:k,slot:h,attrs:i,slots:m,name:"Tab"})}}}),He=C({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:i,attrs:m}){let d=R("TabPanels");return()=>{let v={selectedIndex:d.selectedIndex.value};return L({theirProps:e,ourProps:{},slot:v,attrs:m,slots:i,name:"TabPanels"})}}}),Ve=C({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:i,slots:m,expose:d}){var v;let u=(v=e.id)!=null?v:`headlessui-tabs-panel-${ue()}`,a=R("TabPanel"),t=x(null);d({el:t,$el:t}),z(()=>a.registerPanel(t)),se(()=>a.unregisterPanel(t));let p=X(ee),I=S(()=>{if(p.value){let r=p.value.panels.indexOf(u);return r===-1?p.value.panels.push(u)-1:r}return-1}),_=S(()=>{let r=a.panels.value.indexOf(t);return r===-1?I.value:r}),l=S(()=>_.value===a.selectedIndex.value);return()=>{var r;let f={selected:l.value},{tabIndex:o,...n}=e,c={ref:t,id:u,role:"tabpanel","aria-labelledby":(r=T(a.tabs.value[_.value]))==null?void 0:r.id,tabIndex:l.value?o:-1};return!l.value&&e.unmount&&!e.static?W(ie,{as:"span","aria-hidden":!0,...c}):L({ourProps:c,theirProps:n,slot:f,attrs:i,slots:m,features:ne.Static|ne.RenderStrategy,visible:l.value,name:"TabPanel"})}}});const qe=C({components:{HTabGroup:Ce,HTabList:Oe,HTab:Be,HTabPanels:He,HTabPanel:Ve},props:{orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},ui:{type:Object,default:()=>he.ui.tabs}},setup(e){const i=ye(),m=S(()=>xe({},e.ui,i.ui.tabs)),d=x([]),v=x();function u(a){var p;const t=(p=d.value[a])==null?void 0:p.$el;t&&(v.value.style.top=`${t.offsetTop}px`,v.value.style.left=`${t.offsetLeft}px`,v.value.style.width=`${t.offsetWidth}px`,v.value.style.height=`${t.offsetHeight}px`)}return z(()=>u(e.defaultIndex)),{ui:m,itemRefs:d,markerRef:v,onChange:u}}});function ze(e,i,m,d,v,u){const a=V("HTab"),t=V("HTabList"),p=V("HTabPanel"),I=V("HTabPanels"),_=V("HTabGroup");return F(),B(_,{vertical:e.orientation==="vertical","default-index":e.defaultIndex,as:"div",class:U(e.ui.wrapper),onChange:e.onChange},{default:g(()=>[y(t,{class:U([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:we([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:g(()=>[$("div",{ref:"markerRef",class:U(e.ui.list.marker.wrapper)},[$("div",{class:U([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(F(!0),Y(K,null,te(e.items,(l,r)=>(F(),B(a,{key:r,ref_for:!0,ref:"itemRefs",disabled:l.disabled,as:"template"},{default:g(({selected:f,disabled:o})=>[$("button",{class:U([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,f?e.ui.list.tab.active:e.ui.list.tab.inactive])},[le(e.$slots,"default",{item:l,index:r,selected:f,disabled:o},()=>[H(M(l.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),y(I,{class:U(e.ui.container)},{default:g(()=>[(F(!0),Y(K,null,te(e.items,(l,r)=>(F(),B(p,{key:r,class:U(e.ui.base)},{default:g(({selected:f})=>[le(e.$slots,l.slot||"item",{item:l,index:r,selected:f},()=>[H(M(l.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},8,["vertical","default-index","class","onChange"])}const Le=ge(qe,[["render",ze]]),Re={key:0,class:"bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"},Ge={class:"text-center"},De={__name:"SignIn",setup(e){const i=x(!1),m=x(""),d=x(!1),v=me(),{toastError:u}=de(),a=Ie().public.baseUrl;console.log('"""""""""""redirectUrl""""""""""""""": ',a);const t=N.string().email("Please enter a valid email address"),p=x(""),I=()=>{try{t.parse(m.value),p.value=""}catch(l){l instanceof N.ZodError&&(p.value=l.errors[0].message)}},_=async()=>{if(I(),!p.value){d.value=!0;try{const{error:l}=await v.auth.signInWithOtp({email:m.value,options:{emailRedirectTo:`${a}/confirm`}});l?u({title:"Error authenticating",description:l.message}):i.value=!0}catch(l){console.error("Error authenticating:",l),m.value="",p.value="",i.value=!1}finally{d.value=!1}}};return(l,r)=>{const f=re,o=pe,n=ce,c=oe,b=Q;return i.value?(F(),B(b,{key:1},{header:g(()=>r[2]||(r[2]=[$("span",{class:"font-bold text-xl"},"Email has been sent",-1)])),default:g(()=>[$("div",Ge,[$("p",null,[r[3]||(r[3]=H(" We have sent an email to ")),$("strong",null,M(m.value),1),r[4]||(r[4]=H(" with a link to sign in "))]),r[5]||(r[5]=$("p",{class:"font-bold"},"Important: the link will expire in 5 minutes.",-1))])]),_:1})):(F(),Y("div",Re,[$("form",{onSubmit:J(_,["prevent"])},[y(n,{label:"Email Address",name:"email",class:"mb-2 text-sm",required:!0,help:"You will receive an email with the confirmation link"},{default:g(()=>[y(o,{type:"email",required:"",modelValue:m.value,"onUpdate:modelValue":r[0]||(r[0]=s=>m.value=s),onBlur:I,placeholder:"Enter your email"},{leading:g(()=>[y(f,{name:"i-heroicons-envelope"})]),_:1},8,["modelValue"])]),_:1}),$("p",{class:U([{"text-red-600":p.value},"h-5 text-sm mb-2"])},M(p.value),3),y(c,{type:"submit",variant:"solid",color:"teal",size:"lg",class:U(["rounded-xl shadow-md",{"transition-transform hover:scale-[1.02] active:scale-[0.98]":!d.value&&!p.value}]),loading:d.value,disabled:d.value||!!p.value},{default:g(()=>r[1]||(r[1]=[H("Sign-in")])),_:1},8,["class","loading","disabled"])],32)]))}}},je={class:"relative"},We={__name:"SignUp",setup(e){let i=x(!1);const{toastSuccess:m,toastError:d}=de(),v=me(),u=N.object({password:N.string().min(8,"Password must be at least 8 characters").max(50,"Password must be less than 50 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,"Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),email:N.string().email("Invalid email address").min(1,"Email is required"),fullName:N.string().min(1,"Full Name is required").max(100,"Full name must be less than 100 characters")}),a=x({email:"",password:"",fullName:""}),t=x({}),p=x(!1),I=f=>{try{u.shape[f].parse(a.value[f]),t.value[f]=""}catch(o){o instanceof N.ZodError&&(t.value[f]=o.errors[0].message)}},_=()=>{try{return u.parse(a.value),t.value={},!0}catch(f){return f instanceof N.ZodError&&f.errors.forEach(o=>{o.path[0]&&(t.value[o.path[0]]=o.message)}),!1}},l=S(()=>u.safeParse(a.value).success);async function r(){if(_()){p.value=!0;try{const{error:f}=await v.auth.signUp({email:a.value.email,password:a.value.password,options:{data:{first_name:a.value.fullName,categories:[...Ue]}}});Te("/"),m({title:"user saved",description:"User added successfully"}),a.value={email:"",password:"",fullName:""},f&&d({title:"Error while adding your account",description:f.message}),t.value={}}catch(f){console.error("An error occurred while adding user account: ",f)}finally{p.value=!1}}}return(f,o)=>{const n=re,c=pe,b=ce,s=oe,w=Q;return F(),B(w,{class:"bg-gray-50 dark:bg-gray-800",onSubmit:J(r,["prevent"])},{default:g(()=>[$("form",{onSubmit:J(r,["prevent"])},[y(b,{label:"Full Name",name:"fullName",error:t.value.fullName,required:""},{default:g(()=>[y(c,{modelValue:a.value.fullName,"onUpdate:modelValue":o[0]||(o[0]=h=>a.value.fullName=h),onBlur:o[1]||(o[1]=h=>I("fullName")),required:"",placeholder:"Enter your Full Name"},{leading:g(()=>[y(n,{name:"i-heroicons-user"})]),_:1},8,["modelValue"])]),_:1},8,["error"]),y(b,{label:"Email",name:"email",error:t.value.email,required:"",class:"mt-2"},{default:g(()=>[y(c,{placeholder:"Enter your email",modelValue:a.value.email,"onUpdate:modelValue":o[2]||(o[2]=h=>a.value.email=h),onBlur:o[3]||(o[3]=h=>I("email")),required:""},{leading:g(()=>[y(n,{name:"i-heroicons-envelope"})]),_:1},8,["modelValue"])]),_:1},8,["error"]),y(b,{label:"Password",name:"password",error:t.value.password,required:"",class:"mb-4 mt-2"},{default:g(()=>[$("div",je,[y(c,{type:G(i)?"text":"password",modelValue:a.value.password,"onUpdate:modelValue":o[4]||(o[4]=h=>a.value.password=h),onBlur:o[5]||(o[5]=h=>I("password")),placeholder:"Enter your password"},{leading:g(()=>[y(n,{name:"i-heroicons-lock-closed"})]),_:1},8,["type","modelValue"]),$("button",{type:"button",class:"absolute right-2 top-1/2 -translate-y-1/2",onClick:o[6]||(o[6]=h=>_e(i)?i.value=!G(i):i=!G(i))},[y(n,{name:G(i)?"i-heroicons-eye-slash":"i-heroicons-eye",class:"h-5 w-5 text-gray-500"},null,8,["name"])])])]),_:1},8,["error"]),y(s,{type:"submit",variant:"solid",color:"teal",loading:p.value,disabled:p.value||!l.value,size:"lg",class:U(["rounded-xl shadow-md",{"transition-transform hover:scale-[1.02] active:scale-[0.98]":!p.value&&!t.value}])},{default:g(()=>o[7]||(o[7]=[H(" Sign-Up ")])),_:1},8,["loading","disabled","class"])],32)]),_:1})}}},aa={__name:"login",setup(e){const i=[{slot:"signIn",label:"SignIn"},{slot:"signUp",label:"SignUp"}];return x("signIn"),(m,d)=>{const v=Q,u=Le;return F(),B(u,{items:i,variant:"link",class:"gap-4 w-full",ui:{trigger:"flex-1"}},{signIn:g(()=>[y(v,null,{header:g(()=>d[0]||(d[0]=[$("p",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Sign-in to Finance Tracker ",-1)])),default:g(()=>[y(De)]),_:1})]),signUp:g(()=>[y(v,null,{header:g(()=>d[1]||(d[1]=[$("p",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Sign-Up for the Finance Tracker ",-1)])),default:g(()=>[y(We)]),_:1})]),_:1})}}};export{aa as default};
