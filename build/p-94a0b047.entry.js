import{r as e,c as i,h as t,H as a,g as n}from"./p-7c78c4f2.js";import{g as l,t as o}from"./p-ca562010.js";import"./p-30b0f762.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const c={input:"input"};const r={segmentedControlItemIcon:"segmented-control-item-icon"};const s="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-ui-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-1px}.label--scale-s{padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:0.125rem}.label--scale-m{padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:0.375rem}.label--scale-l{padding-inline:1rem;padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-background)}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}:host([checked]) .label--outline{background-color:transparent}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline,:host([checked]) .label--outline-fill{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .segmented-control-item-icon{color:highlightText}}.segmented-control-item-icon{position:relative;margin:0px;display:inline-flex;line-height:inherit}:host([icon-start]) .label--scale-s .segmented-control-item-icon{margin-inline-end:0.5rem}:host([icon-end]) .label--scale-s .segmented-control-item-icon{margin-inline-start:0.5rem}:host([icon-start]) .label--scale-m .segmented-control-item-icon{margin-inline-end:0.75rem}:host([icon-end]) .label--scale-m .segmented-control-item-icon{margin-inline-start:0.75rem}:host([icon-start]) .label--scale-l .segmented-control-item-icon{margin-inline-end:1rem}:host([icon-end]) .label--scale-l .segmented-control-item-icon{margin-inline-start:1rem}";const m=class{constructor(t){e(this,t);this.calciteInternalSegmentedControlItemChange=i(this,"calciteInternalSegmentedControlItemChange",6);this.checked=false;this.iconFlipRtl=false;this.iconStart=undefined;this.iconEnd=undefined;this.value=undefined}handleCheckedChange(){this.calciteInternalSegmentedControlItemChange.emit()}render(){const{checked:e,value:i}=this;const n=l(this.el,"scale","m");const s=l(this.el,"appearance","solid");const m=l(this.el,"layout","horizontal");const d=this.iconStart?t("calcite-icon",{class:r.segmentedControlItemIcon,flipRtl:this.iconFlipRtl,icon:this.iconStart,key:"icon-start",scale:"s"}):null;const h=this.iconEnd?t("calcite-icon",{class:r.segmentedControlItemIcon,flipRtl:this.iconFlipRtl,icon:this.iconEnd,key:"icon-end",scale:"s"}):null;return t(a,{"aria-checked":o(e),"aria-label":i,role:"radio"},t("label",{class:{"label--scale-s":n==="s","label--scale-m":n==="m","label--scale-l":n==="l","label--horizontal":m==="horizontal","label--outline":s==="outline","label--outline-fill":s==="outline-fill"}},this.iconStart?d:null,t("slot",null,i),t("slot",{name:c.input}),this.iconEnd?h:null))}get el(){return n(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};m.style=s;export{m as calcite_segmented_control_item};
//# sourceMappingURL=p-94a0b047.entry.js.map