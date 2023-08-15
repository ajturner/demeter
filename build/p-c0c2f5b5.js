import{a as n}from"./p-7c78c4f2.js";import{g as t}from"./p-1ddddc69.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const c={};async function s(t,s){const a=`${s}_${t}`;if(c[a]){return c[a]}c[a]=fetch(n(`./assets/${s}/t9n/messages_${t}.json`)).then((n=>{if(!n.ok){o()}return n.json()})).catch((()=>o()));return c[a]}function o(){throw new Error("could not fetch component message bundle")}function a(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function e(n){n.defaultMessages=await i(n,n.effectiveLocale);a(n)}async function i(n,c){const{el:o}=n;const a=o.tagName.toLowerCase();const e=a.replace("calcite-","");return s(t(c,"t9n"),e)}async function f(n,t){n.defaultMessages=await i(n,t);a(n)}function r(n){n.onMessagesChange=d}function u(n){n.onMessagesChange=undefined}function d(){a(this)}export{r as c,u as d,e as s,f as u};
//# sourceMappingURL=p-c0c2f5b5.js.map