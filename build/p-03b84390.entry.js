import{r as t,c as i,h as e,H as a,g as s}from"./p-7c78c4f2.js";import{t as n,i as o,w as r,h as l}from"./p-ca562010.js";import{f as c,c as h,d,u as p,a as m,F as f,r as u}from"./p-2380a0d9.js";import{g as w}from"./p-30b0f762.js";import{u as v}from"./p-7b97aed3.js";import{i as g}from"./p-62d90ff5.js";import{c as y,a as b,s as x}from"./p-04967691.js";import{c as D}from"./p-e6be3162.js";import{c as k,d as E}from"./p-56d6f420.js";import"./p-5f83161a.js";import"./p-58421494.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const H={dropdownTrigger:"trigger"};const C="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:600;display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}";const P=class{constructor(e){t(this,e);this.calciteDropdownSelect=i(this,"calciteDropdownSelect",6);this.calciteDropdownBeforeClose=i(this,"calciteDropdownBeforeClose",6);this.calciteDropdownClose=i(this,"calciteDropdownClose",6);this.calciteDropdownBeforeOpen=i(this,"calciteDropdownBeforeOpen",6);this.calciteDropdownOpen=i(this,"calciteDropdownOpen",6);this.items=[];this.groups=[];this.mutationObserver=D("mutation",(()=>this.updateItems()));this.resizeObserver=D("resize",(t=>this.resizeObserverCallback(t)));this.openTransitionProp="opacity";this.guid=`calcite-dropdown-${w()}`;this.defaultAssignedElements=[];this.slotChangeHandler=t=>{this.defaultAssignedElements=t.target.assignedElements({flatten:true});this.updateItems()};this.setFilteredPlacements=()=>{const{el:t,flipPlacements:i}=this;this.filteredFlipPlacements=i?c(i,t):null};this.updateTriggers=t=>{this.triggers=t.target.assignedElements({flatten:true});this.reposition(true)};this.updateItems=()=>{this.items=this.groups.map((t=>Array.from(t===null||t===void 0?void 0:t.querySelectorAll("calcite-dropdown-item")))).reduce(((t,i)=>[...t,...i]),[]);this.updateSelectedItems();this.reposition(true)};this.updateGroups=t=>{const i=t.target.assignedElements({flatten:true}).filter((t=>t===null||t===void 0?void 0:t.matches("calcite-dropdown-group")));this.groups=i;this.updateItems()};this.resizeObserverCallback=t=>{t.forEach((t=>{const{target:i}=t;if(i===this.referenceEl){this.setDropdownWidth()}else if(i===this.scrollerEl){this.setMaxScrollerHeight()}}))};this.setDropdownWidth=()=>{const{referenceEl:t,scrollerEl:i}=this;const e=t===null||t===void 0?void 0:t.clientWidth;if(!e||!i){return}i.style.minWidth=`${e}px`};this.setMaxScrollerHeight=()=>{const{scrollerEl:t}=this;if(!t){return}this.reposition(true);const i=this.getMaxScrollerHeight();t.style.maxHeight=i>0?`${i}px`:"";this.reposition(true)};this.setScrollerAndTransitionEl=t=>{this.resizeObserver.observe(t);this.scrollerEl=t;this.transitionEl=t;k(this)};this.setReferenceEl=t=>{this.referenceEl=t;h(this,this.referenceEl,this.floatingEl);this.resizeObserver.observe(t)};this.setFloatingEl=t=>{this.floatingEl=t;h(this,this.referenceEl,this.floatingEl)};this.keyDownHandler=t=>{const i=t.target;if(i!==this.referenceEl){return}const{defaultPrevented:e,key:a}=t;if(e){return}if(this.open){if(a==="Escape"){this.closeCalciteDropdown();t.preventDefault();return}else if(t.shiftKey&&a==="Tab"){this.closeCalciteDropdown();t.preventDefault();return}}if(g(a)){this.openCalciteDropdown();t.preventDefault()}else if(a==="Escape"){this.closeCalciteDropdown();t.preventDefault()}};this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((t=>t.selected))||this.items[0])};this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem();this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)};this.openCalciteDropdown=()=>{this.open=!this.open;if(this.open){this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)}};this.open=false;this.closeOnSelectDisabled=false;this.disabled=false;this.flipPlacements=undefined;this.maxItems=0;this.overlayPositioning="absolute";this.placement=d;this.scale="m";this.selectedItems=[];this.type="click";this.width=undefined}openHandler(t){if(!this.disabled){if(t){this.reposition(true)}else{p(this.floatingEl)}return}if(!t){p(this.floatingEl)}this.open=false}handleDisabledChange(t){if(!t){this.open=false}}flipPlacementsHandler(){this.setFilteredPlacements();this.reposition(true)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(true)}placementHandler(){this.reposition(true)}async setFocus(){await y(this);this.el.focus()}connectedCallback(){var t;(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true,subtree:true});this.setFilteredPlacements();this.reposition(true);if(this.open){this.openHandler(this.open)}k(this)}componentWillLoad(){b(this)}componentDidLoad(){x(this);this.reposition(true)}componentDidRender(){v(this)}disconnectedCallback(){var t,i;(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect();m(this,this.referenceEl,this.floatingEl);(i=this.resizeObserver)===null||i===void 0?void 0:i.disconnect();E(this)}render(){const{open:t,guid:i}=this;return e(a,null,e("div",{class:"calcite-trigger-container",id:`${i}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},e("slot",{"aria-controls":`${i}-menu`,"aria-expanded":n(t),"aria-haspopup":"menu",name:H.dropdownTrigger,onSlotchange:this.updateTriggers})),e("div",{"aria-hidden":n(!t),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},e("div",{"aria-labelledby":`${i}-menubutton`,class:{["calcite-dropdown-content"]:true,[f.animation]:true,[f.animationActive]:t},id:`${i}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},e("slot",{onSlotchange:this.updateGroups}))))}async reposition(t=false){const{floatingEl:i,referenceEl:e,placement:a,overlayPositioning:s,filteredFlipPlacements:n}=this;return u(this,{floatingEl:i,referenceEl:e,overlayPositioning:s,placement:a,flipPlacements:n,type:"menu"},t)}closeCalciteDropdownOnClick(t){if(!o(t)||!this.open||t.composedPath().includes(this.el)){return}this.closeCalciteDropdown(false)}closeCalciteDropdownOnEvent(t){this.closeCalciteDropdown();t.stopPropagation()}closeCalciteDropdownOnOpenEvent(t){if(t.composedPath().includes(this.el)){return}this.open=false}mouseEnterHandler(){if(this.type==="hover"){this.openCalciteDropdown()}}mouseLeaveHandler(){if(this.type==="hover"){this.closeCalciteDropdown()}}calciteInternalDropdownItemKeyEvent(t){const{keyboardEvent:i}=t.detail;const e=i.target;switch(i.key){case"Tab":if(this.items.indexOf(e)===this.items.length-1&&!i.shiftKey){this.closeCalciteDropdown()}else if(this.items.indexOf(e)===0&&i.shiftKey){this.closeCalciteDropdown()}break;case"ArrowDown":r(this.items,e,"next");break;case"ArrowUp":r(this.items,e,"previous");break;case"Home":r(this.items,e,"first");break;case"End":r(this.items,e,"last");break}t.stopPropagation()}handleItemSelect(t){this.updateSelectedItems();t.stopPropagation();this.calciteDropdownSelect.emit();if(!this.closeOnSelectDisabled||t.detail.requestedDropdownGroup.selectionMode==="none"){this.closeCalciteDropdown()}t.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((t=>t.selected))}getMaxScrollerHeight(){const{maxItems:t,items:i}=this;let e=0;let a=0;let s;this.groups.forEach((i=>{if(t>0&&e<t){Array.from(i.children).forEach(((i,n)=>{if(n===0){if(isNaN(s)){s=i.offsetTop}a+=s}if(e<t){a+=i.offsetHeight;e+=1}}))}}));return i.length>t?a:0}closeCalciteDropdown(t=true){this.open=false;if(t){l(this.triggers[0])}}getFocusableElement(t){if(!t){return}const i=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;l(i)}static get delegatesFocus(){return true}get el(){return s(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"]}}};P.style=C;export{P as calcite_dropdown};
//# sourceMappingURL=p-03b84390.entry.js.map