import{f as t}from"./p-7c78c4f2.js";import{c as o}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const c=new Set;let n;const f={childList:true};function s(t){if(!n){n=o("mutation",e)}n.observe(t.el,f)}function i(t){c.delete(t.el);e(n.takeRecords());n.disconnect();for(const[t]of c.entries()){n.observe(t,f)}}function e(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,i as d};
//# sourceMappingURL=p-09a2c844.js.map