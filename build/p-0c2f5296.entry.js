import{r as t,c as i,h as e,g as a,H as n,F as o}from"./p-7c78c4f2.js";import{c as s}from"./p-dee74110.js";import{h as r,n as c,w as l,b as d,y as h,g as m,t as u}from"./p-ca562010.js";import{a as b,s as f,c as p}from"./p-04967691.js";import{i as v,a as g,r as y,n as x,b as k}from"./p-b4ff9727.js";import{g as w}from"./p-30b0f762.js";import{c as T}from"./p-e6be3162.js";import{u as _}from"./p-7b97aed3.js";import"./p-5f83161a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const z={container:"container",preview:"preview",input:"input"};const D="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block}.container{display:inline-grid;inline-size:100%;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;pointer-events:none;margin-block:0px;margin-inline:0.25rem;display:flex;align-items:center}.preview,.input{grid-row:1}.input{grid-column:1/3;inline-size:100%;text-transform:uppercase}";const C=s();const I=class{constructor(e){t(this,e);this.calciteColorPickerHexInputChange=i(this,"calciteColorPickerHexInputChange",6);this.onCalciteInternalInputBlur=()=>{const t=this.inputNode;const i=t.value;const e=`#${i}`;const a=this.allowEmpty&&!i;if(a||v(e)&&g(e)){return}t.value=this.allowEmpty&&!this.internalColor?"":this.formatForInternalInput(y(this.internalColor.object()))};this.onInputChange=()=>{this.internalSetValue(this.inputNode.value,this.value)};this.previousNonNullValue=this.value;this.storeInputRef=t=>{this.inputNode=t};this.hexLabel="Hex";this.allowEmpty=false;this.scale="m";this.value=x(C.hex());this.numberingSystem=undefined;this.internalColor=C}connectedCallback(){const{allowEmpty:t,value:i}=this;if(i){const t=x(i);if(v(t)){this.internalSetValue(t,t,false)}return}if(t){this.internalSetValue(null,null,false)}}componentWillLoad(){b(this)}componentDidLoad(){f(this)}handleValueChange(t,i){this.internalSetValue(t,i,false)}onInputKeyDown(t){const{altKey:i,ctrlKey:e,metaKey:a,shiftKey:n}=t;const{internalColor:o,value:s}=this;const{key:r}=t;if(r==="Tab"||r==="Enter"){this.onInputChange();return}const c=r==="ArrowDown"||r==="ArrowUp";const l=this.value;if(c){if(!s){this.internalSetValue(this.previousNonNullValue,l);t.preventDefault();return}const i=r==="ArrowUp"?1:-1;const e=n?10:1;this.internalSetValue(x(this.nudgeRGBChannels(o,e*i).hex()),l);t.preventDefault();return}const d=i||e||a;const h=r.length===1;const m=k.test(r);if(h&&!d&&!m){t.preventDefault()}}onPaste(t){const i=t.clipboardData.getData("text");if(v(i)){t.preventDefault();this.inputNode.value=i.slice(1)}}render(){const{value:t}=this;const i=this.formatForInternalInput(t);return e("div",{class:z.container},e("calcite-input",{class:z.input,label:this.hexLabel,maxLength:6,numberingSystem:this.numberingSystem,onCalciteInputChange:this.onInputChange,onCalciteInternalInputBlur:this.onCalciteInternalInputBlur,onKeyDown:this.handleKeyDown,onPaste:this.onPaste,prefixText:"#",scale:this.scale,value:i,ref:this.storeInputRef}),i?e("calcite-color-picker-swatch",{active:true,class:z.preview,color:`#${i}`,scale:this.scale}):null)}async setFocus(){await p(this);r(this.inputNode)}internalSetValue(t,i,e=true){if(t){const i=x(t);if(v(i)){const{internalColor:t}=this;const a=!t||i!==x(t.hex());this.internalColor=s(i);this.previousNonNullValue=i;this.value=i;if(a&&e){this.calciteColorPickerHexInputChange.emit()}return}}else if(this.allowEmpty){this.internalColor=null;this.value=null;if(e){this.calciteColorPickerHexInputChange.emit()}return}this.value=i}formatForInternalInput(t){return t?t.replace("#",""):""}nudgeRGBChannels(t,i){return s.rgb(t.array().map((t=>t+i)))}handleKeyDown(t){if(t.key==="Enter"){t.preventDefault()}}get el(){return a(this)}static get watchers(){return{value:["handleValueChange"]}}};I.style=D;const H="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}section,.container{display:none;block-size:100%;inline-size:100%}:host([scale=s]){padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-block:13px}";const A=class{constructor(e){t(this,e);this.calciteInternalTabRegister=i(this,"calciteInternalTabRegister",6);this.guid=`calcite-tab-title-${w()}`;this.tab=undefined;this.selected=false;this.scale="m";this.labeledBy=undefined}render(){const t=this.el.id||this.guid;return e(n,{"aria-labelledby":this.labeledBy,id:t},e("div",{class:"container",role:"tabpanel",tabIndex:this.selected?0:-1},e("section",null,e("slot",null))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}componentWillRender(){var t;this.scale=(t=this.parentTabsEl)===null||t===void 0?void 0:t.scale}disconnectedCallback(){var t;(t=document.body)===null||t===void 0?void 0:t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(t){const i=t.composedPath().find((t=>t.tagName==="CALCITE-TABS"));if(i!==this.parentTabsEl){return}if(this.tab){this.selected=this.tab===t.detail.tab}else{this.getTabIndex().then((i=>{this.selected=i===t.detail.tab}))}t.stopPropagation()}async getTabIndex(){return Array.prototype.indexOf.call(c(this.el.parentElement.children).filter((t=>t.matches("calcite-tab"))),this.el)}async updateAriaInfo(t=[],i=[]){this.labeledBy=i[t.indexOf(this.el.id)]||null}get el(){return a(this)}};A.style=H;const S="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale=s]){min-block-size:1.5rem}:host([scale=m]){min-block-size:2rem}:host([scale=l]){min-block-size:2.75rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([position=bottom]) .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host([position=bottom]) .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered][position=bottom]) .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}";const L=class{constructor(e){t(this,e);this.calciteTabChange=i(this,"calciteTabChange",6);this.calciteInternalTabChange=i(this,"calciteInternalTabChange",6);this.animationActiveDuration=.3;this.resizeObserver=T("resize",(()=>{if(!this.activeIndicatorEl){return}this.activeIndicatorEl.style.transitionDuration="0s";this.updateActiveWidth();this.updateOffsetPosition()}));this.handleTabFocus=(t,i,e)=>{l(this.enabledTabTitles,i,e);t.stopPropagation();t.preventDefault()};this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s";this.updateOffsetPosition()};this.storageId=undefined;this.syncId=undefined;this.selectedTitle=null;this.scale="m";this.layout="inline";this.position="bottom";this.bordered=false;this.indicatorOffset=undefined;this.indicatorWidth=undefined;this.selectedTabId=undefined}async selectedTabIdChanged(){if(localStorage&&this.storageId&&this.selectedTabId!==undefined&&this.selectedTabId!==null){localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId))}this.calciteInternalTabChange.emit({tab:this.selectedTabId});this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateOffsetPosition();this.updateActiveWidth();this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}connectedCallback(){var t;this.parentTabsEl=this.el.closest("calcite-tabs");(t=this.resizeObserver)===null||t===void 0?void 0:t.observe(this.el)}disconnectedCallback(){var t;(t=this.resizeObserver)===null||t===void 0?void 0:t.disconnect()}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const i=JSON.parse(localStorage.getItem(t));this.selectedTabId=i}}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t===null||t===void 0?void 0:t.layout;this.position=t===null||t===void 0?void 0:t.position;this.scale=t===null||t===void 0?void 0:t.scale;this.bordered=t===null||t===void 0?void 0:t.bordered;if(this.selectedTitle){this.updateOffsetPosition()}}componentDidRender(){if(this.tabTitles.length&&this.tabTitles.every((t=>!t.selected))&&!this.selectedTabId){this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteInternalTabChange.emit({tab:t})}))}}render(){const t=d(this.el);const i=`${this.indicatorWidth}px`;const a=`${this.indicatorOffset}px`;const o=t!=="rtl"?{width:i,left:a}:{width:i,right:a};return e(n,{role:"tablist"},e("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:t=>this.tabNavEl=t},e("div",{class:"tab-nav-active-indicator-container",ref:t=>this.activeIndicatorContainerEl=t},e("div",{class:"tab-nav-active-indicator",style:o,ref:t=>this.activeIndicatorEl=t})),e("slot",null)))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target);t.stopPropagation();t.preventDefault()}activateTabHandler(t){this.calciteTabChange.emit();t.stopPropagation();t.preventDefault()}updateTabTitles(t){if(t.target.selected){this.selectedTabId=t.detail}}globalInternalTabChangeHandler(t){if(this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab){this.selectedTabId=t.detail.tab}t.stopPropagation()}iconStartChangeHandler(){this.updateActiveWidth()}updateOffsetPosition(){var t,i,e,a,n;const o=d(this.el);const s=(t=this.activeIndicatorContainerEl)===null||t===void 0?void 0:t.offsetWidth;const r=(i=this.selectedTitle)===null||i===void 0?void 0:i.offsetLeft;const c=(e=this.selectedTitle)===null||e===void 0?void 0:e.offsetWidth;const l=s-(r+c);this.indicatorOffset=o!=="rtl"?r-((a=this.tabNavEl)===null||a===void 0?void 0:a.scrollLeft):l+((n=this.tabNavEl)===null||n===void 0?void 0:n.scrollLeft)}updateActiveWidth(){var t;this.indicatorWidth=(t=this.selectedTitle)===null||t===void 0?void 0:t.offsetWidth}getIndexOfTabTitle(t,i=this.tabTitles){return i.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((i=>this.tabTitles[i.indexOf(t)]))}get tabTitles(){return h(this.el,"calcite-tab-title")}get enabledTabTitles(){return h(this.el,"calcite-tab-title:not([disabled])")}get el(){return a(this)}static get watchers(){return{selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"]}}};L.style=S;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const R={container:"container",containerHasText:"container--has-text",iconEnd:"icon-end",iconStart:"icon-start",iconPresent:"icon-present",titleIcon:"calcite-tab-title--icon"};const j="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px;margin-inline-end:1.25rem}:host([layout=center]){margin-block:0px;margin-inline:1.25rem;text-align:center;flex-basis:12rem;margin:auto}:host([position=bottom]) .container{border-block-end-width:0px;border-block-start-width:2px;border-block-start-color:transparent;border-block-start-style:solid}:host .container{outline-color:transparent}:host(:focus) .container{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{border-color:var(--calcite-ui-border-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-ui-text-1)}:host([disabled]) .container{pointer-events:none;opacity:0.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){margin-inline-end:1rem}:host([scale=s]) .container{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .container{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){margin-inline-end:1.5rem}:host([scale=l]) .container{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.container{box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-appearance:none;appearance:none;justify-content:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-block-end-width:2px;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-block-end-color:transparent;border-block-end-style:solid}.calcite-tab-title--icon{position:relative;margin:0px;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.container--has-text{padding:0.25rem}.container--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:0.5rem}:host([bordered]){margin-inline-end:0}:host([bordered][selected]){box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][selected][position=bottom]){box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) .container,:host([bordered]:focus) .container,:host([bordered]:active) .container{position:relative}:host([bordered]:hover) .container{background-color:var(--calcite-button-transparent-hover)}:host([bordered]) .container{border-block-end-style:unset;border-inline-start:1px solid transparent;border-inline-end:1px solid transparent}:host([bordered][position=bottom]) .container{border-block-start-style:unset}:host([selected][bordered]) .container{border-inline-start-color:var(--calcite-ui-border-1);border-inline-end-color:var(--calcite-ui-border-1)}:host([bordered]) .container{padding-inline:0.75rem}:host([bordered][scale=s]) .container{padding-inline:0.5rem}:host([bordered][scale=l]) .container{padding-inline:1rem}:host([bordered][scale=l]) .icon-present{padding-block:11px}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered]) .container{border-block-end-style:solid}:host([bordered][position=bottom]) .container{border-block-start-style:solid}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][position=bottom][selected]) .container{border-block-start-style:none}}";const E=class{constructor(e){t(this,e);this.calciteTabsActivate=i(this,"calciteTabsActivate",6);this.calciteInternalTabsActivate=i(this,"calciteInternalTabsActivate",6);this.calciteInternalTabsFocusNext=i(this,"calciteInternalTabsFocusNext",6);this.calciteInternalTabsFocusPrevious=i(this,"calciteInternalTabsFocusPrevious",6);this.calciteInternalTabsFocusFirst=i(this,"calciteInternalTabsFocusFirst",6);this.calciteInternalTabsFocusLast=i(this,"calciteInternalTabsFocusLast",6);this.calciteInternalTabTitleRegister=i(this,"calciteInternalTabTitleRegister",6);this.calciteInternalTabIconChanged=i(this,"calciteInternalTabIconChanged",6);this.mutationObserver=T("mutation",(()=>this.updateHasText()));this.resizeObserver=T("resize",(()=>{this.calciteInternalTabIconChanged.emit()}));this.guid=`calcite-tab-title-${w()}`;this.selected=false;this.disabled=false;this.iconEnd=undefined;this.iconFlipRtl=undefined;this.iconStart=undefined;this.layout=undefined;this.position=undefined;this.scale=undefined;this.bordered=false;this.tab=undefined;this.controls=undefined;this.hasText=false}selectedHandler(){if(this.selected){this.emitActiveTab(false)}}connectedCallback(){this.setupTextContentObserver();this.parentTabNavEl=this.el.closest("calcite-tab-nav");this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t,i,e;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();(i=document.body)===null||i===void 0?void 0:i.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}));(e=this.resizeObserver)===null||e===void 0?void 0:e.disconnect()}componentWillLoad(){{this.updateHasText()}if(this.tab&&this.selected){this.emitActiveTab(false)}}componentWillRender(){if(this.parentTabsEl){this.layout=this.parentTabsEl.layout;this.position=this.parentTabsEl.position;this.scale=this.parentTabsEl.scale;this.bordered=this.parentTabsEl.bordered}if(!this.parentTabsEl&&this.parentTabNavEl){this.position=m(this.parentTabNavEl,"position",this.position);this.scale=m(this.parentTabNavEl,"scale",this.scale)}}render(){const t=this.el.id||this.guid;const i=e("calcite-icon",{class:{[R.titleIcon]:true,[R.iconStart]:true},flipRtl:this.iconFlipRtl==="start"||this.iconFlipRtl==="both",icon:this.iconStart,scale:this.scale==="l"?"m":"s"});const a=e("calcite-icon",{class:{[R.titleIcon]:true,[R.iconEnd]:true},flipRtl:this.iconFlipRtl==="end"||this.iconFlipRtl==="both",icon:this.iconEnd,scale:this.scale==="l"?"m":"s"});return e(n,{"aria-controls":this.controls,"aria-selected":u(this.selected),id:t,role:"tab",tabIndex:this.selected?0:-1},e("div",{class:{container:true,[R.iconPresent]:this.iconStart||this.iconEnd?true:null,[R.containerHasText]:this.hasText},ref:t=>{var i;return(i=this.resizeObserver)===null||i===void 0?void 0:i.observe(t)}},this.iconStart?i:null,e("slot",null),this.iconEnd?a:null))}async componentDidLoad(){this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier())}componentDidRender(){_(this,(()=>this.selected))}internalTabChangeHandler(t){const i=t.composedPath().find((t=>t.tagName==="CALCITE-TABS"));if(i!==this.parentTabsEl){return}if(this.tab){this.selected=this.tab===t.detail.tab}else{this.getTabIndex().then((i=>{this.selected=i===t.detail.tab}))}t.stopPropagation()}onClick(){this.emitActiveTab()}keyDownHandler(t){switch(t.key){case" ":case"Enter":this.emitActiveTab();t.preventDefault();break;case"ArrowRight":t.preventDefault();if(d(this.el)==="ltr"){this.calciteInternalTabsFocusNext.emit()}else{this.calciteInternalTabsFocusPrevious.emit()}break;case"ArrowLeft":t.preventDefault();if(d(this.el)==="ltr"){this.calciteInternalTabsFocusPrevious.emit()}else{this.calciteInternalTabsFocusNext.emit()}break;case"Home":t.preventDefault();this.calciteInternalTabsFocusFirst.emit();break;case"End":t.preventDefault();this.calciteInternalTabsFocusLast.emit();break}}async getTabIndex(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],i=[]){this.controls=t[i.indexOf(this.el.id)]||null}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true})}emitActiveTab(t=true){if(this.disabled){return}const i={tab:this.tab};this.calciteInternalTabsActivate.emit(i);if(t){this.calciteTabsActivate.emit()}}get el(){return a(this)}static get watchers(){return{selected:["selectedHandler"]}}};E.style=j;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const P={titleGroup:"title-group"};const F="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}";const $=class{constructor(i){t(this,i);this.layout="inline";this.position="top";this.scale="m";this.bordered=false;this.titles=[];this.tabs=[]}render(){return e(o,null,e("slot",{name:P.titleGroup}),e("section",null,e("slot",null)))}calciteInternalTabTitleRegister(t){this.titles=[...this.titles,t.target];this.registryHandler();t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter((i=>i!==t.detail));this.registryHandler();t.stopPropagation()}calciteInternalTabRegister(t){this.tabs=[...this.tabs,t.target];this.registryHandler();t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter((i=>i!==t.detail));this.registryHandler();t.stopPropagation()}async registryHandler(){let t;let i;if(this.tabs.some((t=>t.tab))||this.titles.some((t=>t.tab))){t=this.tabs.sort(((t,i)=>t.tab.localeCompare(i.tab))).map((t=>t.id));i=this.titles.sort(((t,i)=>t.tab.localeCompare(i.tab))).map((t=>t.id))}else{const e=await Promise.all(this.tabs.map((t=>t.getTabIndex())));const a=await Promise.all(this.titles.map((t=>t.getTabIndex())));t=e.reduce(((t,i,e)=>{t[i]=this.tabs[e].id;return t}),[]);i=a.reduce(((t,i,e)=>{t[i]=this.titles[e].id;return t}),[])}this.tabs.forEach((e=>e.updateAriaInfo(t,i)));this.titles.forEach((e=>e.updateAriaInfo(t,i)))}get el(){return a(this)}};$.style=F;export{I as calcite_color_picker_hex_input,A as calcite_tab,L as calcite_tab_nav,E as calcite_tab_title,$ as calcite_tabs};
//# sourceMappingURL=p-0c2f5296.entry.js.map