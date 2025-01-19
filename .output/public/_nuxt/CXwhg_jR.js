import{x as m,r as d,z as u,B as v,ae as y}from"./BI6x6_08.js";const x=m({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]}},setup(e,{slots:n,expose:a}){const r=Math.random().toString(36).substring(7),s=y(`form-${r}`);s.on(async t=>{if(t.type==="blur"){const h=i.value.filter(o=>o.path!==t.path),l=(await c()).filter(o=>o.path===t.path);i.value=h.concat(l)}});const i=d([]);u("form-errors",i),u("form-events",s);async function c(){let t=await e.validate(e.state);if(e.schema)if(p(e.schema))t=t.concat(await b(e.state,e.schema));else if(w(e.schema))t=t.concat(await E(e.state,e.schema));else if(S(e.schema))t=t.concat(await j(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function f(){if(i.value=await c(),i.value.length>0)throw new Error(`Form validation failed: ${JSON.stringify(i.value,null,2)}`);return e.state}return a({validate:f}),()=>{var t;return v("form",(t=n.default)==null?void 0:t.call(n))}}});function w(e){return e.validate&&e.__isYupSchema__}function g(e){return e.inner!==void 0}async function E(e,n){try{return await n.validate(e,{abortEarly:!1}),[]}catch(a){if(g(a))return a.inner.map(r=>({path:r.path??"",message:r.message}));throw a}}function p(e){return e.parse!==void 0}function _(e){return e.issues!==void 0}async function b(e,n){try{return n.parse(e),[]}catch(a){if(_(a))return a.issues.map(r=>({path:r.path.join("."),message:r.message}));throw a}}function S(e){return e.validateAsync!==void 0&&e.id!==void 0}function J(e){return e.isJoi===!0}async function j(e,n){try{return await n.validateAsync(e,{abortEarly:!1}),[]}catch(a){if(J(a))return a.details.map(r=>({path:r.path.join("."),message:r.message}));throw a}}export{x as _};
