import{r as i,h as t,H as n,g as a}from"./p-7c78c4f2.js";import{b as e,h as o}from"./p-ca562010.js";import{u as s}from"./p-7b97aed3.js";import{a as c,s as l,c as r}from"./p-04967691.js";import{C as d}from"./p-5f83161a.js";import"./p-30b0f762.js";const m="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline}:host a,:host span{position:relative;display:flex;cursor:pointer;align-items:center;justify-content:center;border-radius:0px;border-style:none;font-family:inherit;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;text-decoration:none;line-height:inherit;font-size:inherit;-webkit-appearance:none}:host a:hover,:host span:hover{text-decoration:none}:host a,:host span{outline-color:transparent}:host a:focus,:host span:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-icon{inline-size:1em;block-size:1em;min-inline-size:unset;min-block-size:unset}.calcite-link--icon{vertical-align:middle;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-block-start:-0.25em}:host .calcite-link--icon.icon-start{margin-inline-end:0.5rem}:host .calcite-link--icon.icon-end{margin-inline-start:0.5rem}:host span,:host a{position:relative;display:inline;border-style:none;background-color:transparent;padding:0px;color:var(--calcite-ui-text-link);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;line-height:inherit;white-space:initial;background-image:linear-gradient(currentColor, currentColor), linear-gradient(var(--calcite-link-blue-underline), var(--calcite-link-blue-underline));background-position-x:0%, 100%;background-position-y:min(1.5em, 100%);background-repeat:no-repeat, no-repeat;background-size:0% 1px, 100% 1px}:host span:hover,:host span:focus,:host a:hover,:host a:focus{background-size:100% 1px, 100% 1px}:host span:active,:host a:active{background-size:100% 2px, 100% 2px}:host span.calcite--rtl,:host a.calcite--rtl{background-position:100% 100%, 100% 100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";const h=class{constructor(t){i(this,t);this.childElClickHandler=i=>{if(!i.isTrusted){i.stopPropagation()}};this.storeTagRef=i=>{this.childEl=i};this.disabled=false;this.download=false;this.href=undefined;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.rel=undefined;this.target=undefined}componentWillLoad(){c(this)}componentDidLoad(){l(this)}componentDidRender(){s(this)}render(){const{download:i,el:a}=this;const o=e(a);const s=this.href?"a":"span";const c=t("calcite-icon",{class:"calcite-link--icon icon-start",flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:"s"});const l=t("calcite-icon",{class:"calcite-link--icon icon-end",flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:"s"});const r=s;const m=s==="span"?"link":null;const h=s==="span"?0:null;return t(n,{role:"presentation"},t(r,{class:{[d.rtl]:o==="rtl"},download:r==="a"&&(i===""||i)?i:null,href:r==="a"&&this.href,onClick:this.childElClickHandler,rel:r==="a"&&this.rel,role:m,tabIndex:h,target:r==="a"&&this.target,ref:this.storeTagRef},this.iconStart?c:null,t("slot",null),this.iconEnd?l:null))}clickHandler(i){if(!i.isTrusted){this.childEl.click()}}async setFocus(){await r(this);o(this.childEl)}get el(){return a(this)}};h.style=m;export{h as calcite_link};
//# sourceMappingURL=p-d0e47c18.entry.js.map