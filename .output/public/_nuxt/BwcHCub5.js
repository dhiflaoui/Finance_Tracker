import{aB as g,aC as l,ay as u,ap as a,aN as h}from"./B9gK5A-A.js";var d="[object Symbol]";function s(r){return typeof r=="symbol"||g(r)&&l(r)==d}function b(r,n){for(var t=-1,e=r==null?0:r.length,i=Array(e);++t<e;)i[t]=n(r[t],t,r);return i}var I=1/0,p=u?u.prototype:void 0,y=p?p.toString:void 0;function m(r){if(typeof r=="string")return r;if(a(r))return b(r,m)+"";if(s(r))return y?y.call(r):"";var n=r+"";return n=="0"&&1/r==-I?"-0":n}var T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;function E(r,n){if(a(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||s(r)?!0:C.test(r)||!T.test(r)||n!=null&&r in Object(n)}var S="Expected a function";function c(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(S);var t=function(){var e=arguments,i=n?n.apply(this,e):e[0],o=t.cache;if(o.has(i))return o.get(i);var f=r.apply(this,e);return t.cache=o.set(i,f)||o,f};return t.cache=new(c.Cache||h),t}c.Cache=h;var N=500;function P(r){var n=c(r,function(e){return t.size===N&&t.clear(),e}),t=n.cache;return n}var w=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,M=/\\(\\)?/g,$=P(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(w,function(t,e,i,o){n.push(i?o.replace(M,"$1"):e||t)}),n});function x(r){return r==null?"":m(r)}function z(r,n){return a(r)?r:E(r,n)?[r]:$(x(r))}var A=1/0;function O(r){if(typeof r=="string"||s(r))return r;var n=r+"";return n=="0"&&1/r==-A?"-0":n}function F(r,n){n=z(n,r);for(var t=0,e=n.length;r!=null&&t<e;)r=r[O(n[t++])];return t&&t==e?r:void 0}export{b as a,F as b,z as c,E as i,O as t};
