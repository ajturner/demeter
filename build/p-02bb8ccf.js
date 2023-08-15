import{a as n}from"./p-7c78c4f2.js";import{c as o}from"./p-78cee83a.js";import{g as s}from"./p-1ddddc69.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const t={};const r={};async function a(o){const c=s(o);if(t[c]){return t[c]}if(!r[c]){r[c]=fetch(n(`./assets/date-picker/nls/${c}.json`)).then((n=>n.json())).catch((()=>{console.error(`Translations for "${c}" not found or invalid, falling back to english`);return a("en")}))}const e=await r[c];t[c]=e;return e}function c(n){return n.map(((n,s)=>o(n,s===1)))}export{a,c as g};
//# sourceMappingURL=p-02bb8ccf.js.map