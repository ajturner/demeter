import{r as a,h as i,F as t,g as n}from"./p-7c78c4f2.js";import{c as e,d as c}from"./p-09a2c844.js";import{a as o}from"./p-ca562010.js";import{H as r,c as l}from"./p-1c866b59.js";import{S as s,C as m}from"./p-26ace40d.js";import"./p-e6be3162.js";import"./p-30b0f762.js";import"./p-5f83161a.js";const d="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{margin-block-end:0.25rem;box-sizing:border-box;display:block;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host(:last-child){margin-block-end:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.heading{margin-block:0.5rem;margin-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-size:var(--calcite-font-size--1);line-height:1.375;color:var(--calcite-ui-text-3)}.container--indented{margin-inline-start:1.5rem}";const p=class{constructor(i){a(this,i);this.groupTitle=undefined;this.headingLevel=undefined}connectedCallback(){e(this)}disconnectedCallback(){c(this)}render(){var a;const{el:n,groupTitle:e,headingLevel:c}=this;const d=o(n,s.parentItem)!==null;const p={[m.container]:true,[m.indented]:d};const f=e;const u=(a=n.closest("calcite-pick-list"))===null||a===void 0?void 0:a.headingLevel;const g=u?l(u+1):null;const h=c||g;return i(t,null,f?i(r,{class:m.heading,level:h},f):null,i("slot",{name:s.parentItem}),i("section",{class:p},i("slot",null)))}get el(){return n(this)}};p.style=d;export{p as calcite_pick_list_group};
//# sourceMappingURL=p-cf1f346a.entry.js.map