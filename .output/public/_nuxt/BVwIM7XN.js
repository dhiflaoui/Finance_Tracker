import{ap as bn,aq as Rt,ar as Ge,as as yn,at as wn,au as Lt,av as Bt,aw as On,C as we,r as P,q as T,D as Ft,A as Nt,y as ie,k as Ze,x as xn,E as ue,ax as wt,_ as et,M as L,N as tt,O as Te,P as Mn,o as R,c as Y,U as Ce,e as nt,W as Re,J as G,K as Ht,L as _t,a9 as Wt,g as Pe,l as me,w as re,b as Se,a as Ot,Z as An,X as En,V as qe,F as Xe,Y as Ke,f as Ye}from"./CVTLfr-j.js";import{g as Pn}from"./CTksWtrq.js";import{c as rt,t as Be,i as jt,b as Ut,a as Sn}from"./BaWsLenN.js";import{i as Dn,a as In,g as $n,o as kn}from"./BQlmpPki.js";import{c as zt,o as S,w as Vt,h as qt,a as Tn,u as Cn,A as Fe,i as at,s as Rn,N as xt,b as I,v as Ln,d as Mt,_ as Xt,O as Bn}from"./BIwr1OEQ.js";var Fn=1,Nn=2;function Hn(e,t,n,a){var i=n.length,o=i;if(e==null)return!o;for(e=Object(e);i--;){var r=n[i];if(r[2]?r[1]!==e[r[0]]:!(r[0]in e))return!1}for(;++i<o;){r=n[i];var s=r[0],u=e[s],d=r[1];if(r[2]){if(u===void 0&&!(s in e))return!1}else{var f=new bn,m;if(!(m===void 0?Rt(d,u,Fn|Nn,a,f):m))return!1}}return!0}function Kt(e){return e===e&&!Ge(e)}function _n(e){for(var t=yn(e),n=t.length;n--;){var a=t[n],i=e[a];t[n]=[a,i,Kt(i)]}return t}function Yt(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Wn(e){var t=_n(e);return t.length==1&&t[0][2]?Yt(t[0][0],t[0][1]):function(n){return n===e||Hn(n,e,t)}}function jn(e,t){return e!=null&&t in Object(e)}function Un(e,t,n){t=rt(t,e);for(var a=-1,i=t.length,o=!1;++a<i;){var r=Be(t[a]);if(!(o=e!=null&&n(e,r)))break;e=e[r]}return o||++a!=i?o:(i=e==null?0:e.length,!!i&&wn(i)&&Lt(r,i)&&(Bt(e)||On(e)))}function zn(e,t){return e!=null&&Un(e,t,jn)}var Vn=1,qn=2;function Xn(e,t){return jt(e)&&Kt(t)?Yt(Be(e),t):function(n){var a=Pn(n,e);return a===void 0&&a===t?zn(n,e):Rt(t,a,Vn|qn)}}function Kn(e){return function(t){return t==null?void 0:t[e]}}function Yn(e){return function(t){return Ut(t,e)}}function Gn(e){return jt(e)?Kn(Be(e)):Yn(e)}function Gt(e){return typeof e=="function"?e:e==null?Dn:typeof e=="object"?Bt(e)?Xn(e[0],e[1]):Wn(e):Gn(e)}function Jn(e){return e===void 0}var Qn="Expected a function";function Zn(e){if(typeof e!="function")throw new TypeError(Qn);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function er(e,t,n,a){if(!Ge(e))return e;t=rt(t,e);for(var i=-1,o=t.length,r=o-1,s=e;s!=null&&++i<o;){var u=Be(t[i]),d=n;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(i!=r){var f=s[u];d=void 0,d===void 0&&(d=Ge(f)?f:Lt(t[i+1])?[]:{})}In(s,u,d),s=s[u]}return e}function tr(e,t,n){for(var a=-1,i=t.length,o={};++a<i;){var r=t[a],s=Ut(e,r);n(s,r)&&er(o,rt(r,e),s)}return o}function nr(e,t){if(e==null)return{};var n=Sn($n(e),function(a){return[a]});return t=Gt(t),tr(e,n,function(a,i){return t(a,i[0])})}function rr(e,t){return nr(e,Zn(Gt(t)))}function ar(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function or(){return/Android/gi.test(window.navigator.userAgent)}function ir(){return ar()||or()}function De(e,t,n){zt.isServer||we(a=>{document.addEventListener(e,t,n),a(()=>document.removeEventListener(e,t,n))})}function sr(e,t,n){zt.isServer||we(a=>{window.addEventListener(e,t,n),a(()=>window.removeEventListener(e,t,n))})}function ur(e,t,n=T(()=>!0)){function a(o,r){if(!n.value||o.defaultPrevented)return;let s=r(o);if(s===null||!s.getRootNode().contains(s))return;let u=function d(f){return typeof f=="function"?d(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let d of u){if(d===null)continue;let f=d instanceof HTMLElement?d:S(d);if(f!=null&&f.contains(s)||o.composed&&o.composedPath().includes(f))return}return!Vt(s,qt.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let i=P(null);De("pointerdown",o=>{var r,s;n.value&&(i.value=((s=(r=o.composedPath)==null?void 0:r.call(o))==null?void 0:s[0])||o.target)},!0),De("mousedown",o=>{var r,s;n.value&&(i.value=((s=(r=o.composedPath)==null?void 0:r.call(o))==null?void 0:s[0])||o.target)},!0),De("click",o=>{ir()||i.value&&(a(o,()=>i.value),i.value=null)},!0),De("touchend",o=>a(o,()=>o.target instanceof HTMLElement?o.target:null),!0),sr("blur",o=>a(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function At(e){return[e.screenX,e.screenY]}function lr(){let e=P([-1,-1]);return{wasMoved(t){let n=At(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=At(t)}}}function fr({container:e,accept:t,walk:n,enabled:a}){we(()=>{let i=e.value;if(!i||a!==void 0&&!a.value)return;let o=Tn(e);if(!o)return;let r=Object.assign(u=>t(u),{acceptNode:t}),s=o.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,r,!1);for(;s.nextNode();)n(s.currentNode)})}let Jt=Symbol("Context");var be=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(be||{});function Na(){return Qt()!==null}function Qt(){return Ft(Jt,null)}function cr(e){Nt(Jt,e)}function dr(e){throw new Error("Unexpected object: "+e)}var B=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(B||{});function pr(e,t){let n=t.resolveItems();if(n.length<=0)return null;let a=t.resolveActiveIndex(),i=a??-1;switch(e.focus){case 0:{for(let o=0;o<n.length;++o)if(!t.resolveDisabled(n[o],o,n))return o;return a}case 1:{i===-1&&(i=n.length);for(let o=i-1;o>=0;--o)if(!t.resolveDisabled(n[o],o,n))return o;return a}case 2:{for(let o=i+1;o<n.length;++o)if(!t.resolveDisabled(n[o],o,n))return o;return a}case 3:{for(let o=n.length-1;o>=0;--o)if(!t.resolveDisabled(n[o],o,n))return o;return a}case 4:{for(let o=0;o<n.length;++o)if(t.resolveId(n[o],o,n)===e.id)return o;return a}case 5:return null;default:dr(e)}}let Et=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Pt(e){var t,n;let a=(t=e.innerText)!=null?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return a;let o=!1;for(let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),o=!0;let r=o?(n=i.innerText)!=null?n:"":a;return Et.test(r)&&(r=r.replace(Et,"")),r}function vr(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let a=n.split(" ").map(i=>{let o=document.getElementById(i);if(o){let r=o.getAttribute("aria-label");return typeof r=="string"?r.trim():Pt(o).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return Pt(e).trim()}function mr(e){let t=P(""),n=P("");return()=>{let a=S(e);if(!a)return"";let i=a.innerText;if(t.value===i)return n.value;let o=vr(a).trim().toLowerCase();return t.value=i,n.value=o,o}}var gr=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(gr||{}),hr=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(hr||{});function br(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Zt=Symbol("MenuContext");function Ne(e){let t=Ft(Zt,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ne),n}return t}let yr=ie({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let a=P(1),i=P(null),o=P(null),r=P([]),s=P(""),u=P(null),d=P(1);function f(l=c=>c){let c=u.value!==null?r.value[u.value]:null,p=Bn(l(r.value.slice()),h=>S(h.dataRef.domRef)),v=c?p.indexOf(c):null;return v===-1&&(v=null),{items:p,activeItemIndex:v}}let m={menuState:a,buttonRef:i,itemsRef:o,items:r,searchQuery:s,activeItemIndex:u,activationTrigger:d,closeMenu:()=>{a.value=1,u.value=null},openMenu:()=>a.value=0,goToItem(l,c,p){let v=f(),h=pr(l===B.Specific?{focus:B.Specific,id:c}:{focus:l},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});s.value="",u.value=h,d.value=p??1,r.value=v.items},search(l){let c=s.value!==""?0:1;s.value+=l.toLowerCase();let p=(u.value!==null?r.value.slice(u.value+c).concat(r.value.slice(0,u.value+c)):r.value).find(h=>h.dataRef.textValue.startsWith(s.value)&&!h.dataRef.disabled),v=p?r.value.indexOf(p):-1;v===-1||v===u.value||(u.value=v,d.value=1)},clearSearch(){s.value=""},registerItem(l,c){let p=f(v=>[...v,{id:l,dataRef:c}]);r.value=p.items,u.value=p.activeItemIndex,d.value=1},unregisterItem(l){let c=f(p=>{let v=p.findIndex(h=>h.id===l);return v!==-1&&p.splice(v,1),p});r.value=c.items,u.value=c.activeItemIndex,d.value=1}};return ur([i,o],(l,c)=>{var p;m.closeMenu(),Vt(c,qt.Loose)||(l.preventDefault(),(p=S(i))==null||p.focus())},T(()=>a.value===0)),Nt(Zt,m),cr(T(()=>Cn(a.value,{0:be.Open,1:be.Closed}))),()=>{let l={open:a.value===0,close:m.closeMenu};return Fe({ourProps:{},theirProps:e,slot:l,slots:t,attrs:n,name:"Menu"})}}}),wr=ie({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var i;let o=(i=e.id)!=null?i:`headlessui-menu-button-${at()}`,r=Ne("MenuButton");a({el:r.buttonRef,$el:r.buttonRef});function s(m){switch(m.key){case I.Space:case I.Enter:case I.ArrowDown:m.preventDefault(),m.stopPropagation(),r.openMenu(),ue(()=>{var l;(l=S(r.itemsRef))==null||l.focus({preventScroll:!0}),r.goToItem(B.First)});break;case I.ArrowUp:m.preventDefault(),m.stopPropagation(),r.openMenu(),ue(()=>{var l;(l=S(r.itemsRef))==null||l.focus({preventScroll:!0}),r.goToItem(B.Last)});break}}function u(m){switch(m.key){case I.Space:m.preventDefault();break}}function d(m){e.disabled||(r.menuState.value===0?(r.closeMenu(),ue(()=>{var l;return(l=S(r.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(m.preventDefault(),r.openMenu(),br(()=>{var l;return(l=S(r.itemsRef))==null?void 0:l.focus({preventScroll:!0})})))}let f=Rn(T(()=>({as:e.as,type:t.type})),r.buttonRef);return()=>{var m;let l={open:r.menuState.value===0},{...c}=e,p={ref:r.buttonRef,id:o,type:f.value,"aria-haspopup":"menu","aria-controls":(m=S(r.itemsRef))==null?void 0:m.id,"aria-expanded":r.menuState.value===0,onKeydown:s,onKeyup:u,onClick:d};return Fe({ourProps:p,theirProps:c,slot:l,attrs:t,slots:n,name:"MenuButton"})}}}),Or=ie({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var i;let o=(i=e.id)!=null?i:`headlessui-menu-items-${at()}`,r=Ne("MenuItems"),s=P(null);a({el:r.itemsRef,$el:r.itemsRef}),fr({container:T(()=>S(r.itemsRef)),enabled:T(()=>r.menuState.value===0),accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});function u(l){var c;switch(s.value&&clearTimeout(s.value),l.key){case I.Space:if(r.searchQuery.value!=="")return l.preventDefault(),l.stopPropagation(),r.search(l.key);case I.Enter:if(l.preventDefault(),l.stopPropagation(),r.activeItemIndex.value!==null){let p=r.items.value[r.activeItemIndex.value];(c=S(p.dataRef.domRef))==null||c.click()}r.closeMenu(),Xt(S(r.buttonRef));break;case I.ArrowDown:return l.preventDefault(),l.stopPropagation(),r.goToItem(B.Next);case I.ArrowUp:return l.preventDefault(),l.stopPropagation(),r.goToItem(B.Previous);case I.Home:case I.PageUp:return l.preventDefault(),l.stopPropagation(),r.goToItem(B.First);case I.End:case I.PageDown:return l.preventDefault(),l.stopPropagation(),r.goToItem(B.Last);case I.Escape:l.preventDefault(),l.stopPropagation(),r.closeMenu(),ue(()=>{var p;return(p=S(r.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case I.Tab:l.preventDefault(),l.stopPropagation(),r.closeMenu(),ue(()=>Ln(S(r.buttonRef),l.shiftKey?Mt.Previous:Mt.Next));break;default:l.key.length===1&&(r.search(l.key),s.value=setTimeout(()=>r.clearSearch(),350));break}}function d(l){switch(l.key){case I.Space:l.preventDefault();break}}let f=Qt(),m=T(()=>f!==null?(f.value&be.Open)===be.Open:r.menuState.value===0);return()=>{var l,c;let p={open:r.menuState.value===0},{...v}=e,h={"aria-activedescendant":r.activeItemIndex.value===null||(l=r.items.value[r.activeItemIndex.value])==null?void 0:l.id,"aria-labelledby":(c=S(r.buttonRef))==null?void 0:c.id,id:o,onKeydown:u,onKeyup:d,role:"menu",tabIndex:0,ref:r.itemsRef};return Fe({ourProps:h,theirProps:v,slot:p,attrs:t,slots:n,features:xt.RenderStrategy|xt.Static,visible:m.value,name:"MenuItems"})}}}),xr=ie({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:n,expose:a}){var i;let o=(i=e.id)!=null?i:`headlessui-menu-item-${at()}`,r=Ne("MenuItem"),s=P(null);a({el:s,$el:s});let u=T(()=>r.activeItemIndex.value!==null?r.items.value[r.activeItemIndex.value].id===o:!1),d=mr(s),f=T(()=>({disabled:e.disabled,get textValue(){return d()},domRef:s}));Ze(()=>r.registerItem(o,f)),xn(()=>r.unregisterItem(o)),we(()=>{r.menuState.value===0&&u.value&&r.activationTrigger.value!==0&&ue(()=>{var g,O;return(O=(g=S(s))==null?void 0:g.scrollIntoView)==null?void 0:O.call(g,{block:"nearest"})})});function m(g){if(e.disabled)return g.preventDefault();r.closeMenu(),Xt(S(r.buttonRef))}function l(){if(e.disabled)return r.goToItem(B.Nothing);r.goToItem(B.Specific,o)}let c=lr();function p(g){c.update(g)}function v(g){c.wasMoved(g)&&(e.disabled||u.value||r.goToItem(B.Specific,o,0))}function h(g){c.wasMoved(g)&&(e.disabled||u.value&&r.goToItem(B.Nothing))}return()=>{let{disabled:g,...O}=e,x={active:u.value,disabled:g,close:r.closeMenu};return Fe({ourProps:{id:o,ref:s,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,onClick:m,onFocus:l,onPointerenter:p,onMouseenter:p,onPointermove:v,onMousemove:v,onPointerleave:h,onMouseleave:h},theirProps:{...n,...O},slot:x,attrs:n,slots:t,name:"MenuItem"})}}});function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function oe(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function N(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ot(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var ae=Math.max,Le=Math.min,le=Math.round;function Je(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function en(){return!/^((?!chrome|android).)*safari/i.test(Je())}function fe(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var a=e.getBoundingClientRect(),i=1,o=1;t&&N(e)&&(i=e.offsetWidth>0&&le(a.width)/e.offsetWidth||1,o=e.offsetHeight>0&&le(a.height)/e.offsetHeight||1);var r=oe(e)?F(e):window,s=r.visualViewport,u=!en()&&n,d=(a.left+(u&&s?s.offsetLeft:0))/i,f=(a.top+(u&&s?s.offsetTop:0))/o,m=a.width/i,l=a.height/o;return{width:m,height:l,top:f,right:d+m,bottom:f+l,left:d,x:d,y:f}}function it(e){var t=F(e),n=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:n,scrollTop:a}}function Mr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ar(e){return e===F(e)||!N(e)?it(e):Mr(e)}function U(e){return e?(e.nodeName||"").toLowerCase():null}function J(e){return((oe(e)?e.ownerDocument:e.document)||window.document).documentElement}function st(e){return fe(J(e)).left+it(e).scrollLeft}function q(e){return F(e).getComputedStyle(e)}function ut(e){var t=q(e),n=t.overflow,a=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+a)}function Er(e){var t=e.getBoundingClientRect(),n=le(t.width)/e.offsetWidth||1,a=le(t.height)/e.offsetHeight||1;return n!==1||a!==1}function Pr(e,t,n){n===void 0&&(n=!1);var a=N(t),i=N(t)&&Er(t),o=J(t),r=fe(e,i,n),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((U(t)!=="body"||ut(o))&&(s=Ar(t)),N(t)?(u=fe(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):o&&(u.x=st(o))),{x:r.left+s.scrollLeft-u.x,y:r.top+s.scrollTop-u.y,width:r.width,height:r.height}}function tn(e){var t=fe(e),n=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:a}}function He(e){return U(e)==="html"?e:e.assignedSlot||e.parentNode||(ot(e)?e.host:null)||J(e)}function nn(e){return["html","body","#document"].indexOf(U(e))>=0?e.ownerDocument.body:N(e)&&ut(e)?e:nn(He(e))}function he(e,t){var n;t===void 0&&(t=[]);var a=nn(e),i=a===((n=e.ownerDocument)==null?void 0:n.body),o=F(a),r=i?[o].concat(o.visualViewport||[],ut(a)?a:[]):a,s=t.concat(r);return i?s:s.concat(he(He(r)))}function Sr(e){return["table","td","th"].indexOf(U(e))>=0}function St(e){return!N(e)||q(e).position==="fixed"?null:e.offsetParent}function Dr(e){var t=/firefox/i.test(Je()),n=/Trident/i.test(Je());if(n&&N(e)){var a=q(e);if(a.position==="fixed")return null}var i=He(e);for(ot(i)&&(i=i.host);N(i)&&["html","body"].indexOf(U(i))<0;){var o=q(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function _e(e){for(var t=F(e),n=St(e);n&&Sr(n)&&q(n).position==="static";)n=St(n);return n&&(U(n)==="html"||U(n)==="body"&&q(n).position==="static")?t:n||Dr(e)||t}var H="top",z="bottom",X="right",j="left",lt="auto",We=[H,z,X,j],ce="start",ye="end",Ir="clippingParents",rn="viewport",ge="popper",$r="reference",Dt=We.reduce(function(e,t){return e.concat([t+"-"+ce,t+"-"+ye])},[]),an=[].concat(We,[lt]).reduce(function(e,t){return e.concat([t,t+"-"+ce,t+"-"+ye])},[]),kr="beforeRead",Tr="read",Cr="afterRead",Rr="beforeMain",Lr="main",Br="afterMain",Fr="beforeWrite",Nr="write",Hr="afterWrite",_r=[kr,Tr,Cr,Rr,Lr,Br,Fr,Nr,Hr];function Wr(e){var t=new Map,n=new Set,a=[];e.forEach(function(o){t.set(o.name,o)});function i(o){n.add(o.name);var r=[].concat(o.requires||[],o.requiresIfExists||[]);r.forEach(function(s){if(!n.has(s)){var u=t.get(s);u&&i(u)}}),a.push(o)}return e.forEach(function(o){n.has(o.name)||i(o)}),a}function jr(e){var t=Wr(e);return _r.reduce(function(n,a){return n.concat(t.filter(function(i){return i.phase===a}))},[])}function Ur(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function zr(e){var t=e.reduce(function(n,a){var i=n[a.name];return n[a.name]=i?Object.assign({},i,a,{options:Object.assign({},i.options,a.options),data:Object.assign({},i.data,a.data)}):a,n},{});return Object.keys(t).map(function(n){return t[n]})}function Vr(e,t){var n=F(e),a=J(e),i=n.visualViewport,o=a.clientWidth,r=a.clientHeight,s=0,u=0;if(i){o=i.width,r=i.height;var d=en();(d||!d&&t==="fixed")&&(s=i.offsetLeft,u=i.offsetTop)}return{width:o,height:r,x:s+st(e),y:u}}function qr(e){var t,n=J(e),a=it(e),i=(t=e.ownerDocument)==null?void 0:t.body,o=ae(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),r=ae(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-a.scrollLeft+st(e),u=-a.scrollTop;return q(i||n).direction==="rtl"&&(s+=ae(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:r,x:s,y:u}}function Xr(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&ot(n)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Qe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Kr(e,t){var n=fe(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function It(e,t,n){return t===rn?Qe(Vr(e,n)):oe(t)?Kr(t,n):Qe(qr(J(e)))}function Yr(e){var t=he(He(e)),n=["absolute","fixed"].indexOf(q(e).position)>=0,a=n&&N(e)?_e(e):e;return oe(a)?t.filter(function(i){return oe(i)&&Xr(i,a)&&U(i)!=="body"}):[]}function Gr(e,t,n,a){var i=t==="clippingParents"?Yr(e):[].concat(t),o=[].concat(i,[n]),r=o[0],s=o.reduce(function(u,d){var f=It(e,d,a);return u.top=ae(f.top,u.top),u.right=Le(f.right,u.right),u.bottom=Le(f.bottom,u.bottom),u.left=ae(f.left,u.left),u},It(e,r,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function V(e){return e.split("-")[0]}function de(e){return e.split("-")[1]}function on(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function sn(e){var t=e.reference,n=e.element,a=e.placement,i=a?V(a):null,o=a?de(a):null,r=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,u;switch(i){case H:u={x:r,y:t.y-n.height};break;case z:u={x:r,y:t.y+t.height};break;case X:u={x:t.x+t.width,y:s};break;case j:u={x:t.x-n.width,y:s};break;default:u={x:t.x,y:t.y}}var d=i?on(i):null;if(d!=null){var f=d==="y"?"height":"width";switch(o){case ce:u[d]=u[d]-(t[f]/2-n[f]/2);break;case ye:u[d]=u[d]+(t[f]/2-n[f]/2);break}}return u}function un(){return{top:0,right:0,bottom:0,left:0}}function Jr(e){return Object.assign({},un(),e)}function Qr(e,t){return t.reduce(function(n,a){return n[a]=e,n},{})}function ft(e,t){t===void 0&&(t={});var n=t,a=n.placement,i=a===void 0?e.placement:a,o=n.strategy,r=o===void 0?e.strategy:o,s=n.boundary,u=s===void 0?Ir:s,d=n.rootBoundary,f=d===void 0?rn:d,m=n.elementContext,l=m===void 0?ge:m,c=n.altBoundary,p=c===void 0?!1:c,v=n.padding,h=v===void 0?0:v,g=Jr(typeof h!="number"?h:Qr(h,We)),O=l===ge?$r:ge,x=e.rects.popper,b=e.elements[p?O:l],y=Gr(oe(b)?b:b.contextElement||J(e.elements.popper),u,f,r),w=fe(e.elements.reference),M=sn({reference:w,element:x,strategy:"absolute",placement:i}),$=Qe(Object.assign({},x,M)),E=l===ge?$:w,A={top:y.top-E.top+g.top,bottom:E.bottom-y.bottom+g.bottom,left:y.left-E.left+g.left,right:E.right-y.right+g.right},D=e.modifiersData.offset;if(l===ge&&D){var _=D[i];Object.keys(A).forEach(function(k){var Q=[X,z].indexOf(k)>=0?1:-1,Z=[H,z].indexOf(k)>=0?"y":"x";A[k]+=_[Z]*Q})}return A}var $t={placement:"bottom",modifiers:[],strategy:"absolute"};function kt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Zr(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,a=n===void 0?[]:n,i=t.defaultOptions,o=i===void 0?$t:i;return function(s,u,d){d===void 0&&(d=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},$t,o),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},m=[],l=!1,c={state:f,setOptions:function(g){var O=typeof g=="function"?g(f.options):g;v(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:oe(s)?he(s):s.contextElement?he(s.contextElement):[],popper:he(u)};var x=jr(zr([].concat(a,f.options.modifiers)));return f.orderedModifiers=x.filter(function(b){return b.enabled}),p(),c.update()},forceUpdate:function(){if(!l){var g=f.elements,O=g.reference,x=g.popper;if(kt(O,x)){f.rects={reference:Pr(O,_e(x),f.options.strategy==="fixed"),popper:tn(x)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var b=0;b<f.orderedModifiers.length;b++){if(f.reset===!0){f.reset=!1,b=-1;continue}var y=f.orderedModifiers[b],w=y.fn,M=y.options,$=M===void 0?{}:M,E=y.name;typeof w=="function"&&(f=w({state:f,options:$,name:E,instance:c})||f)}}}},update:Ur(function(){return new Promise(function(h){c.forceUpdate(),h(f)})}),destroy:function(){v(),l=!0}};if(!kt(s,u))return c;c.setOptions(d).then(function(h){!l&&d.onFirstUpdate&&d.onFirstUpdate(h)});function p(){f.orderedModifiers.forEach(function(h){var g=h.name,O=h.options,x=O===void 0?{}:O,b=h.effect;if(typeof b=="function"){var y=b({state:f,name:g,instance:c,options:x}),w=function(){};m.push(y||w)}})}function v(){m.forEach(function(h){return h()}),m=[]}return c}}var Ie={passive:!0};function ea(e){var t=e.state,n=e.instance,a=e.options,i=a.scroll,o=i===void 0?!0:i,r=a.resize,s=r===void 0?!0:r,u=F(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&d.forEach(function(f){f.addEventListener("scroll",n.update,Ie)}),s&&u.addEventListener("resize",n.update,Ie),function(){o&&d.forEach(function(f){f.removeEventListener("scroll",n.update,Ie)}),s&&u.removeEventListener("resize",n.update,Ie)}}const ln={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ea,data:{}};function ta(e){var t=e.state,n=e.name;t.modifiersData[n]=sn({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const na={name:"popperOffsets",enabled:!0,phase:"read",fn:ta,data:{}};var ra={top:"auto",right:"auto",bottom:"auto",left:"auto"};function aa(e,t){var n=e.x,a=e.y,i=t.devicePixelRatio||1;return{x:le(n*i)/i||0,y:le(a*i)/i||0}}function Tt(e){var t,n=e.popper,a=e.popperRect,i=e.placement,o=e.variation,r=e.offsets,s=e.position,u=e.gpuAcceleration,d=e.adaptive,f=e.roundOffsets,m=e.isFixed,l=r.x,c=l===void 0?0:l,p=r.y,v=p===void 0?0:p,h=typeof f=="function"?f({x:c,y:v}):{x:c,y:v};c=h.x,v=h.y;var g=r.hasOwnProperty("x"),O=r.hasOwnProperty("y"),x=j,b=H,y=window;if(d){var w=_e(n),M="clientHeight",$="clientWidth";if(w===F(n)&&(w=J(n),q(w).position!=="static"&&s==="absolute"&&(M="scrollHeight",$="scrollWidth")),w=w,i===H||(i===j||i===X)&&o===ye){b=z;var E=m&&w===y&&y.visualViewport?y.visualViewport.height:w[M];v-=E-a.height,v*=u?1:-1}if(i===j||(i===H||i===z)&&o===ye){x=X;var A=m&&w===y&&y.visualViewport?y.visualViewport.width:w[$];c-=A-a.width,c*=u?1:-1}}var D=Object.assign({position:s},d&&ra),_=f===!0?aa({x:c,y:v},F(n)):{x:c,y:v};if(c=_.x,v=_.y,u){var k;return Object.assign({},D,(k={},k[b]=O?"0":"",k[x]=g?"0":"",k.transform=(y.devicePixelRatio||1)<=1?"translate("+c+"px, "+v+"px)":"translate3d("+c+"px, "+v+"px, 0)",k))}return Object.assign({},D,(t={},t[b]=O?v+"px":"",t[x]=g?c+"px":"",t.transform="",t))}function oa(e){var t=e.state,n=e.options,a=n.gpuAcceleration,i=a===void 0?!0:a,o=n.adaptive,r=o===void 0?!0:o,s=n.roundOffsets,u=s===void 0?!0:s,d={placement:V(t.placement),variation:de(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:r,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const fn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:oa,data:{}};function ia(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var a=t.styles[n]||{},i=t.attributes[n]||{},o=t.elements[n];!N(o)||!U(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(r){var s=i[r];s===!1?o.removeAttribute(r):o.setAttribute(r,s===!0?"":s)}))})}function sa(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(a){var i=t.elements[a],o=t.attributes[a]||{},r=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:n[a]),s=r.reduce(function(u,d){return u[d]="",u},{});!N(i)||!U(i)||(Object.assign(i.style,s),Object.keys(o).forEach(function(u){i.removeAttribute(u)}))})}}const ua={name:"applyStyles",enabled:!0,phase:"write",fn:ia,effect:sa,requires:["computeStyles"]};var la=[ln,na,fn,ua],fa={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return fa[t]})}var ca={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return ca[t]})}function da(e,t){t===void 0&&(t={});var n=t,a=n.placement,i=n.boundary,o=n.rootBoundary,r=n.padding,s=n.flipVariations,u=n.allowedAutoPlacements,d=u===void 0?an:u,f=de(a),m=f?s?Dt:Dt.filter(function(p){return de(p)===f}):We,l=m.filter(function(p){return d.indexOf(p)>=0});l.length===0&&(l=m);var c=l.reduce(function(p,v){return p[v]=ft(e,{placement:v,boundary:i,rootBoundary:o,padding:r})[V(v)],p},{});return Object.keys(c).sort(function(p,v){return c[p]-c[v]})}function pa(e){if(V(e)===lt)return[];var t=$e(e);return[Ct(e),t,Ct(t)]}function va(e){var t=e.state,n=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,r=n.altAxis,s=r===void 0?!0:r,u=n.fallbackPlacements,d=n.padding,f=n.boundary,m=n.rootBoundary,l=n.altBoundary,c=n.flipVariations,p=c===void 0?!0:c,v=n.allowedAutoPlacements,h=t.options.placement,g=V(h),O=g===h,x=u||(O||!p?[$e(h)]:pa(h)),b=[h].concat(x).reduce(function(se,K){return se.concat(V(K)===lt?da(t,{placement:K,boundary:f,rootBoundary:m,padding:d,flipVariations:p,allowedAutoPlacements:v}):K)},[]),y=t.rects.reference,w=t.rects.popper,M=new Map,$=!0,E=b[0],A=0;A<b.length;A++){var D=b[A],_=V(D),k=de(D)===ce,Q=[H,z].indexOf(_)>=0,Z=Q?"width":"height",C=ft(t,{placement:D,boundary:f,rootBoundary:m,altBoundary:l,padding:d}),W=Q?k?X:j:k?z:H;y[Z]>w[Z]&&(W=$e(W));var Oe=$e(W),ee=[];if(o&&ee.push(C[_]<=0),s&&ee.push(C[W]<=0,C[Oe]<=0),ee.every(function(se){return se})){E=D,$=!1;break}M.set(D,ee)}if($)for(var xe=p?3:1,je=function(K){var ve=b.find(function(Ae){var te=M.get(Ae);if(te)return te.slice(0,K).every(function(Ue){return Ue})});if(ve)return E=ve,"break"},pe=xe;pe>0;pe--){var Me=je(pe);if(Me==="break")break}t.placement!==E&&(t.modifiersData[a]._skip=!0,t.placement=E,t.reset=!0)}}const ma={name:"flip",enabled:!0,phase:"main",fn:va,requiresIfExists:["offset"],data:{_skip:!1}};function ga(e,t,n){var a=V(e),i=[j,H].indexOf(a)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,r=o[0],s=o[1];return r=r||0,s=(s||0)*i,[j,X].indexOf(a)>=0?{x:s,y:r}:{x:r,y:s}}function ha(e){var t=e.state,n=e.options,a=e.name,i=n.offset,o=i===void 0?[0,0]:i,r=an.reduce(function(f,m){return f[m]=ga(m,t.rects,o),f},{}),s=r[t.placement],u=s.x,d=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[a]=r}const ba={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ha};function ya(e){return e==="x"?"y":"x"}function ke(e,t,n){return ae(e,Le(t,n))}function wa(e,t,n){var a=ke(e,t,n);return a>n?n:a}function Oa(e){var t=e.state,n=e.options,a=e.name,i=n.mainAxis,o=i===void 0?!0:i,r=n.altAxis,s=r===void 0?!1:r,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,m=n.padding,l=n.tether,c=l===void 0?!0:l,p=n.tetherOffset,v=p===void 0?0:p,h=ft(t,{boundary:u,rootBoundary:d,padding:m,altBoundary:f}),g=V(t.placement),O=de(t.placement),x=!O,b=on(g),y=ya(b),w=t.modifiersData.popperOffsets,M=t.rects.reference,$=t.rects.popper,E=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,A=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,_={x:0,y:0};if(w){if(o){var k,Q=b==="y"?H:j,Z=b==="y"?z:X,C=b==="y"?"height":"width",W=w[b],Oe=W+h[Q],ee=W-h[Z],xe=c?-$[C]/2:0,je=O===ce?M[C]:$[C],pe=O===ce?-$[C]:-M[C],Me=t.elements.arrow,se=c&&Me?tn(Me):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:un(),ve=K[Q],Ae=K[Z],te=ke(0,M[C],se[C]),Ue=x?M[C]/2-xe-te-ve-A.mainAxis:je-te-ve-A.mainAxis,dn=x?-M[C]/2+xe+te+Ae+A.mainAxis:pe+te+Ae+A.mainAxis,ze=t.elements.arrow&&_e(t.elements.arrow),pn=ze?b==="y"?ze.clientTop||0:ze.clientLeft||0:0,ct=(k=D==null?void 0:D[b])!=null?k:0,vn=W+Ue-ct-pn,mn=W+dn-ct,dt=ke(c?Le(Oe,vn):Oe,W,c?ae(ee,mn):ee);w[b]=dt,_[b]=dt-W}if(s){var pt,gn=b==="x"?H:j,hn=b==="x"?z:X,ne=w[y],Ee=y==="y"?"height":"width",vt=ne+h[gn],mt=ne-h[hn],Ve=[H,j].indexOf(g)!==-1,gt=(pt=D==null?void 0:D[y])!=null?pt:0,ht=Ve?vt:ne-M[Ee]-$[Ee]-gt+A.altAxis,bt=Ve?ne+M[Ee]+$[Ee]-gt-A.altAxis:mt,yt=c&&Ve?wa(ht,ne,bt):ke(c?ht:vt,ne,c?bt:mt);w[y]=yt,_[y]=yt-ne}t.modifiersData[a]=_}}const xa={name:"preventOverflow",enabled:!0,phase:"main",fn:Oa,requiresIfExists:["offset"]},Ma=Zr({defaultModifiers:[...la,ba,ma,xa,fn,ln]});function Aa({locked:e=!1,overflowPadding:t=8,offsetDistance:n=8,offsetSkid:a=0,gpuAcceleration:i=!0,adaptive:o=!0,scroll:r=!0,resize:s=!0,placement:u,strategy:d},f){const m=P(null),l=P(null),c=P(null);return Ze(()=>{we(p=>{if(!l.value||!m.value&&!(f!=null&&f.value))return;const v=wt(l),h=wt(m);v instanceof HTMLElement&&h&&(c.value=Ma(h,v,rr({placement:u,strategy:d,modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[a,n]}},{name:"computeStyles",options:{adaptive:o,gpuAcceleration:i}},{name:"eventListeners",options:{scroll:r,resize:s}}]},Jn)),p(c.value.destroy))})}),[m,l,c]}const Ea=ie({props:{size:{type:String,default:()=>L.ui.badge.default.size,validator(e){return Object.keys(L.ui.badge.size).includes(e)}},color:{type:String,default:()=>L.ui.badge.default.color,validator(e){return[...L.ui.colors,...Object.keys(L.ui.badge.color)].includes(e)}},variant:{type:String,default:()=>L.ui.badge.default.variant,validator(e){return[...Object.keys(L.ui.badge.variant),...Object.values(L.ui.badge.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:String,default:null},ui:{type:Object,default:()=>L.ui.badge}},setup(e){const t=tt(),n=T(()=>Te({},e.ui,t.ui.badge));return{badgeClass:T(()=>{var o,r;const i=((r=(o=n.value.color)==null?void 0:o[e.color])==null?void 0:r[e.variant])||n.value.variant[e.variant];return Mn(n.value.base,n.value.font,n.value.rounded,n.value.size[e.size],i==null?void 0:i.replaceAll("{color}",e.color))})}}});function Pa(e,t,n,a,i,o){return R(),Y("span",{class:G(e.badgeClass)},[Ce(e.$slots,"default",{},()=>[nt(Re(e.label),1)])],2)}const Ha=et(Ea,[["render",Pa]]),Sa=ie({props:{value:{type:String,default:null},size:{type:String,default:()=>L.ui.kbd.default.size,validator(e){return Object.keys(L.ui.kbd.size).includes(e)}},ui:{type:Object,default:()=>L.ui.kbd}},setup(e){const t=tt();return{ui:T(()=>Te({},e.ui,t.ui.kbd))}}});function Da(e,t,n,a,i,o){return R(),Y("kbd",{class:G([e.ui.base,e.ui.size[e.size],e.ui.padding,e.ui.rounded,e.ui.font,e.ui.background,e.ui.ring])},[Ce(e.$slots,"default",{},()=>[nt(Re(e.value),1)])],2)}const cn=et(Sa,[["render",Da]]),Ia=ie({components:{HMenu:yr,HMenuButton:wr,HMenuItems:Or,HMenuItem:xr,UIcon:Ht,UAvatar:_t,UKbd:cn,ULink:Wt},props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:50},closeDelay:{type:Number,default:0},ui:{type:Object,default:()=>L.ui.dropdown}},setup(e){const t=tt(),n=T(()=>Te({},e.ui,t.ui.dropdown)),a=T(()=>Te(e.mode==="hover"?{offsetDistance:0}:{},e.popper,n.value.popper)),[i,o]=Aa(a.value),r=P(null);let s=null,u=null;Ze(()=>{setTimeout(()=>{var p;const l=(p=i.value)==null?void 0:p.$.provides;if(!l)return;const c=Object.getOwnPropertySymbols(l);r.value=c.length&&l[c[0]]},200)});const d=T(()=>{var c,p;const l=((c=e.popper)==null?void 0:c.offsetDistance)||((p=n.value.popper)==null?void 0:p.offsetDistance)||8;return e.mode==="hover"?{paddingTop:`${l}px`,paddingBottom:`${l}px`}:{}});function f(){e.mode!=="hover"||!r.value||(u&&(clearTimeout(u),u=null),r.value.menuState!==0&&(s=s||setTimeout(()=>{r.value.openMenu&&r.value.openMenu(),s=null},e.openDelay)))}function m(){e.mode!=="hover"||!r.value||(s&&(clearTimeout(s),s=null),r.value.menuState!==1&&(u=u||setTimeout(()=>{r.value.closeMenu&&r.value.closeMenu(),u=null},e.closeDelay)))}return{ui:n,trigger:i,container:o,containerStyle:d,onMouseOver:f,onMouseLeave:m,omit:kn}}}),$a=["disabled"],ka={class:"truncate"};function Ta(e,t,n,a,i,o){const r=Pe("HMenuButton"),s=Ht,u=_t,d=cn,f=Wt,m=Pe("HMenuItem"),l=Pe("HMenuItems"),c=Pe("HMenu");return R(),me(c,{as:"div",class:G(e.ui.wrapper),onMouseleave:e.onMouseLeave},{default:re(({open:p})=>[Se(r,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:re(()=>[Ce(e.$slots,"default",{open:p,disabled:e.disabled},()=>[Ot("button",{disabled:e.disabled}," Open ",8,$a)])]),_:2},1032,["disabled","onMouseover"]),p&&e.items.length?(R(),Y("div",{key:0,ref:"container",class:G([e.ui.container,e.ui.width]),style:An(e.containerStyle),onMouseover:t[0]||(t[0]=(...v)=>e.onMouseOver&&e.onMouseOver(...v))},[Se(En,qe({appear:""},e.ui.transition),{default:re(()=>[Se(l,{class:G([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:re(()=>[(R(!0),Y(Xe,null,Ke(e.items,(v,h)=>(R(),Y("div",{key:h,class:G(e.ui.padding)},[(R(!0),Y(Xe,null,Ke(v,(g,O)=>(R(),me(m,{key:O,disabled:g.disabled},{default:re(({active:x,disabled:b})=>[Se(f,qe({ref_for:!0},e.omit(g,["label","slot","icon","iconClass","avatar","shortcuts","disabled","click"]),{class:[e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,x?e.ui.item.active:e.ui.item.inactive,b&&e.ui.item.disabled],onClick:g.click}),{default:re(()=>[Ce(e.$slots,g.slot||"item",{item:g},()=>{var y;return[g.icon?(R(),me(s,{key:0,name:g.icon,class:G([e.ui.item.icon.base,x?e.ui.item.icon.active:e.ui.item.icon.inactive,g.iconClass])},null,8,["name","class"])):g.avatar?(R(),me(u,qe({key:1,ref_for:!0},{size:e.ui.item.avatar.size,...g.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):Ye("",!0),Ot("span",ka,Re(g.label),1),(y=g.shortcuts)!=null&&y.length?(R(),Y("span",{key:2,class:G(e.ui.item.shortcuts)},[(R(!0),Y(Xe,null,Ke(g.shortcuts,w=>(R(),me(d,{key:w},{default:re(()=>[nt(Re(w),1)]),_:2},1024))),128))],2)):Ye("",!0)]})]),_:2},1040,["class","onClick"])]),_:2},1032,["disabled"]))),128))],2))),128))]),_:3},8,["class"])]),_:3},16)],38)):Ye("",!0)]),_:3},8,["class","onMouseleave"])}const _a=et(Ia,[["render",Ta]]);export{Ha as _,fr as a,sr as b,B as c,ar as d,Aa as e,pr as f,_a as g,be as i,Qt as l,ir as n,mr as p,Na as s,cr as t,lr as u,ur as w};
