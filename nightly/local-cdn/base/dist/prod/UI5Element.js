"use strict";import"@ui5/webcomponents-base/dist/ssr-dom.js";import F from"./thirdparty/merge.js";import{boot as N}from"./Boot.js";import k from"./UI5ElementMetadata.js";import S from"./EventProvider.js";import x from"./updateShadowRoot.js";import{shouldIgnoreCustomElement as V}from"./IgnoreCustomElements.js";import{renderDeferred as j,renderImmediately as H,cancelRender as $}from"./Render.js";import{registerTag as z,isTagRegistered as q,recordTagRegistrationFailure as K}from"./CustomElementsRegistry.js";import{observeDOMNode as B,unobserveDOMNode as W}from"./DOMObserver.js";import{skipOriginalEvent as X}from"./config/NoConflict.js";import Y from"./locale/getEffectiveDir.js";import{kebabToCamelCase as y,camelToKebabCase as J,kebabToPascalCase as P}from"./util/StringHelper.js";import w from"./util/isValidPropertyName.js";import{getSlotName as G,getSlottedNodesList as D}from"./util/SlotsHelper.js";import Q from"./util/arraysAreEqual.js";import{markAsRtlAware as Z}from"./locale/RTLAwareRegistry.js";import tt from"./renderer/executeTemplate.js";import{shouldScopeCustomElement as A}from"./CustomElementsScopeUtils.js";import{updateFormValue as et,setFormValue as R}from"./features/InputElementsFormSupport.js";import{getComponentFeature as nt,subscribeForFeatureLoad as st}from"./FeaturesRegistry.js";import{getI18nBundle as ot}from"./i18nBundle.js";import{fetchCldr as it}from"./asset-registries/LocaleData.js";import M from"./locale/getLocale.js";let at=0;const T=new Map,b=new Map,O={fromAttribute(d,f){return f===Boolean?d!==null:f===Number?d===null?void 0:parseFloat(d):d},toAttribute(d,f){return f===Boolean?d?"":null:f===Object||f===Array||d==null?null:String(d)}};function v(d){this._suppressInvalidation||(this.onInvalidation(d),this._changedState.push(d),j(this),this._invalidationEventProvider.fireEvent("invalidate",{...d,target:this}))}function rt(d,f){do{const t=Object.getOwnPropertyDescriptor(d,f);if(t)return t;d=Object.getPrototypeOf(d)}while(d&&d!==HTMLElement.prototype)}class I extends HTMLElement{constructor(){super();this._rendered=!1;const t=this.constructor;this._changedState=[],this._suppressInvalidation=!0,this._inDOM=!1,this._fullyConnected=!1,this._childChangeListeners=new Map,this._slotChangeListeners=new Map,this._invalidationEventProvider=new S,this._componentStateFinalizedEventProvider=new S;let e;this._domRefReadyPromise=new Promise(n=>{e=n}),this._domRefReadyPromise._deferredResolve=e,this._doNotSyncAttributes=new Set,this._slotsAssignedNodes=new WeakMap,this._state={...t.getMetadata().getInitialState()},this.initializedProperties=new Map,this.constructor.getMetadata().getPropertiesList().forEach(n=>{if(this.hasOwnProperty(n)){const o=this[n];this.initializedProperties.set(n,o)}}),this._internals=this.attachInternals(),this._initShadowRoot()}_initShadowRoot(){const t=this.constructor;if(t._needsShadowDOM()){const e={mode:"open"};this.attachShadow({...e,...t.getMetadata().getShadowRootOptions()}),t.getMetadata().slotsAreManaged()&&this.shadowRoot.addEventListener("slotchange",this._onShadowRootSlotChange.bind(this))}}_onShadowRootSlotChange(t){t.target?.getRootNode()===this.shadowRoot&&this._processChildren()}get _id(){return this.__id||(this.__id=`ui5wc_${++at}`),this.__id}render(){const t=this.constructor.template;return tt(t,this)}async connectedCallback(){const t=this.constructor;this.setAttribute(t.getMetadata().getPureTag(),""),t.getMetadata().supportsF6FastNavigation()&&this.setAttribute("data-sap-ui-fastnavgroup","true");const e=t.getMetadata().slotsAreManaged();this._inDOM=!0,e&&(this._startObservingDOMChildren(),await this._processChildren()),this._inDOM&&(t.asyncFinished||await t.definePromise,H(this),this._domRefReadyPromise._deferredResolve(),this._fullyConnected=!0,this.onEnterDOM())}disconnectedCallback(){const e=this.constructor.getMetadata().slotsAreManaged();this._inDOM=!1,e&&this._stopObservingDOMChildren(),this._fullyConnected&&(this.onExitDOM(),this._fullyConnected=!1),this._domRefReadyPromise._deferredResolve(),$(this)}onBeforeRendering(){}onAfterRendering(){}onEnterDOM(){}onExitDOM(){}_startObservingDOMChildren(){const e=this.constructor.getMetadata();if(!e.hasSlots())return;const n=e.canSlotText(),o={childList:!0,subtree:n,characterData:n};B(this,this._processChildren.bind(this),o)}_stopObservingDOMChildren(){W(this)}async _processChildren(){this.constructor.getMetadata().hasSlots()&&await this._updateSlots()}async _updateSlots(){const t=this.constructor,e=t.getMetadata().getSlots(),s=t.getMetadata().canSlotText(),n=Array.from(s?this.childNodes:this.children),o=new Map,i=new Map;for(const[l,u]of Object.entries(e)){const c=u.propertyName||l;i.set(c,l),o.set(c,[...this._state[c]]),this._clearSlot(l,u)}const r=new Map,a=new Map,h=n.map(async(l,u)=>{const c=G(l),m=e[c];if(m===void 0){if(c!=="default"){const p=Object.keys(e).join(", ");console.warn(`Unknown slotName: ${c}, ignoring`,l,`Valid values are: ${p}`)}return}if(m.individualSlots){const p=(r.get(c)||0)+1;r.set(c,p),l._individualSlot=`${c}-${p}`}if(l instanceof HTMLElement){const p=l.localName;if(p.includes("-")&&!V(p)){if(!customElements.get(p)){const L=customElements.whenDefined(p);let E=T.get(p);E||(E=new Promise(U=>setTimeout(U,1e3)),T.set(p,E)),await Promise.race([L,E])}customElements.upgrade(l)}}if(l=t.getMetadata().constructor.validateSlotValue(l,m),_(l)&&m.invalidateOnChildChange){const p=this._getChildChangeListener(c);l.attachInvalidate.call(l,p)}l instanceof HTMLSlotElement&&this._attachSlotChange(l,c,!!m.invalidateOnChildChange);const C=m.propertyName||c;a.has(C)?a.get(C).push({child:l,idx:u}):a.set(C,[{child:l,idx:u}])});await Promise.all(h),a.forEach((l,u)=>{this._state[u]=l.sort((c,m)=>c.idx-m.idx).map(c=>c.child),this._state[y(u)]=this._state[u]});let g=!1;for(const[l,u]of Object.entries(e)){const c=u.propertyName||l;Q(o.get(c),this._state[c])||(v.call(this,{type:"slot",name:i.get(c),reason:"children"}),g=!0,t.getMetadata().isFormAssociated()&&R(this))}g||v.call(this,{type:"slot",name:"default",reason:"textcontent"})}_clearSlot(t,e){const s=e.propertyName||t;this._state[s].forEach(o=>{if(_(o)){const i=this._getChildChangeListener(t);o.detachInvalidate.call(o,i)}o instanceof HTMLSlotElement&&this._detachSlotChange(o,t)}),this._state[s]=[],this._state[y(s)]=this._state[s]}attachInvalidate(t){this._invalidationEventProvider.attachEvent("invalidate",t)}detachInvalidate(t){this._invalidationEventProvider.detachEvent("invalidate",t)}_onChildChange(t,e){this.constructor.getMetadata().shouldInvalidateOnChildChange(t,e.type,e.name)&&v.call(this,{type:"slot",name:t,reason:"childchange",child:e.target})}attributeChangedCallback(t,e,s){let n;if(this._doNotSyncAttributes.has(t))return;const o=this.constructor.getMetadata().getProperties(),i=t.replace(/^ui5-/,""),r=y(i);if(o.hasOwnProperty(r)){const a=o[r];n=(a.converter??O).fromAttribute(s,a.type),this[r]=n}}formAssociatedCallback(){this.constructor.getMetadata().isFormAssociated()&&et(this)}static get formAssociated(){return this.getMetadata().isFormAssociated()}_updateAttribute(t,e){const s=this.constructor;if(!s.getMetadata().hasAttribute(t))return;const o=s.getMetadata().getProperties()[t],i=J(t),a=(o.converter||O).toAttribute(e,o.type);this._doNotSyncAttributes.add(i),a==null?this.removeAttribute(i):this.setAttribute(i,a),this._doNotSyncAttributes.delete(i)}_getChildChangeListener(t){return this._childChangeListeners.has(t)||this._childChangeListeners.set(t,this._onChildChange.bind(this,t)),this._childChangeListeners.get(t)}_getSlotChangeListener(t){return this._slotChangeListeners.has(t)||this._slotChangeListeners.set(t,this._onSlotChange.bind(this,t)),this._slotChangeListeners.get(t)}_attachSlotChange(t,e,s){const n=this._getSlotChangeListener(e);t.addEventListener("slotchange",o=>{if(n.call(t,o),s){const i=this._slotsAssignedNodes.get(t);i&&i.forEach(a=>{if(_(a)){const h=this._getChildChangeListener(e);a.detachInvalidate.call(a,h)}});const r=D([t]);this._slotsAssignedNodes.set(t,r),r.forEach(a=>{if(_(a)){const h=this._getChildChangeListener(e);a.attachInvalidate.call(a,h)}})}})}_detachSlotChange(t,e){t.removeEventListener("slotchange",this._getSlotChangeListener(e))}_onSlotChange(t){v.call(this,{type:"slot",name:t,reason:"slotchange"})}onInvalidation(t){}updateAttributes(){const e=this.constructor.getMetadata().getProperties();for(const[s,n]of Object.entries(e))this._updateAttribute(s,this[s])}_render(){const t=this.constructor,e=t.getMetadata().hasIndividualSlots();this.initializedProperties.size>0&&(Array.from(this.initializedProperties.entries()).forEach(([s,n])=>{delete this[s],this[s]=n}),this.initializedProperties.clear()),this._suppressInvalidation=!0;try{this.onBeforeRendering(),this._rendered||this.updateAttributes(),this._componentStateFinalizedEventProvider.fireEvent("componentStateFinalized")}finally{this._suppressInvalidation=!1}this._changedState=[],t._needsShadowDOM()&&x(this),this._rendered=!0,e&&this._assignIndividualSlotsToChildren(),this.onAfterRendering()}_assignIndividualSlotsToChildren(){Array.from(this.children).forEach(e=>{e._individualSlot&&e.setAttribute("slot",e._individualSlot)})}_waitForDomRef(){return this._domRefReadyPromise}getDomRef(){if(typeof this._getRealDomRef=="function")return this._getRealDomRef();if(!(!this.shadowRoot||this.shadowRoot.children.length===0))return this.shadowRoot.children[0]}getFocusDomRef(){const t=this.getDomRef();if(t)return t.querySelector("[data-sap-focus-ref]")||t}async getFocusDomRefAsync(){return await this._waitForDomRef(),this.getFocusDomRef()}async focus(t){await this._waitForDomRef();const e=this.getFocusDomRef();e===this?HTMLElement.prototype.focus.call(this,t):e&&typeof e.focus=="function"&&e.focus(t)}fireEvent(t,e,s=!1,n=!0){const o=this._fireEvent(t,e,s,n),i=P(t);return i!==t?o&&this._fireEvent(i,e,s,n):o}fireDecoratorEvent(t,e){const s=this.getEventData(t),n=s?s.cancelable:!1,o=s?s.bubbles:!1,i=this._fireEvent(t,e,n,o),r=P(t);return r!==t?i&&this._fireEvent(r,e,n,o):i}_fireEvent(t,e,s=!1,n=!0){const o=new CustomEvent(`ui5-${t}`,{detail:e,composed:!1,bubbles:n,cancelable:s}),i=this.dispatchEvent(o);if(X(t))return i;const r=new CustomEvent(t,{detail:e,composed:!1,bubbles:n,cancelable:s});return this.dispatchEvent(r)&&i}getEventData(t){return this.constructor.getMetadata().getEvents()[t]}getSlottedNodes(t){return D(this[t])}attachComponentStateFinalized(t){this._componentStateFinalizedEventProvider.attachEvent("componentStateFinalized",t)}detachComponentStateFinalized(t){this._componentStateFinalizedEventProvider.detachEvent("componentStateFinalized",t)}get effectiveDir(){return Z(this.constructor),Y(this)}get isUI5Element(){return!0}get classes(){return{}}get accessibilityInfo(){return{}}static get observedAttributes(){return this.getMetadata().getAttributesList()}static get tagsToScope(){const t=this.getMetadata().getPureTag(),e=this.getUniqueDependencies().map(s=>s.getMetadata().getPureTag()).filter(A);return A(t)&&e.push(t),e}static _needsShadowDOM(){return!!this.template||Object.prototype.hasOwnProperty.call(this.prototype,"render")}static _generateAccessors(){const t=this.prototype,e=this.getMetadata().slotsAreManaged(),s=this.getMetadata().getProperties();for(const[n,o]of Object.entries(s)){w(n)||console.warn(`"${n}" is not a valid property name. Use a name that does not collide with DOM APIs`);const i=rt(t,n);let r;i?.set&&(r=i.set);let a;i?.get&&(a=i.get),Object.defineProperty(t,n,{get(){return a?a.call(this):this._state[n]},set(h){const g=this.constructor,l=a?a.call(this):this._state[n];l!==h&&(r?r.call(this,h):this._state[n]=h,v.call(this,{type:"property",name:n,newValue:h,oldValue:l}),this._rendered&&this._updateAttribute(n,h),g.getMetadata().isFormAssociated()&&R(this))}})}if(e){const n=this.getMetadata().getSlots();for(const[o,i]of Object.entries(n)){w(o)||console.warn(`"${o}" is not a valid property name. Use a name that does not collide with DOM APIs`);const r=i.propertyName||o,a={get(){return this._state[r]!==void 0?this._state[r]:[]},set(){throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)")}};Object.defineProperty(t,r,a),r!==y(r)&&Object.defineProperty(t,y(r),a)}}}static{this.metadata={}}static{this.styles=""}static get dependencies(){return[]}static cacheUniqueDependencies(){const t=this.dependencies.filter((e,s,n)=>n.indexOf(e)===s);b.set(this,t)}static getUniqueDependencies(){return b.has(this)||this.cacheUniqueDependencies(),b.get(this)||[]}static async onDefine(){return Promise.resolve()}static fetchI18nBundles(){return Promise.all(Object.entries(this.getMetadata().getI18n()).map(t=>{const{bundleName:e}=t[1];return ot(e)}))}static fetchCLDR(){return this.getMetadata().needsCLDR()?it(M().getLanguage(),M().getRegion(),M().getScript()):Promise.resolve()}static define(){const t=async()=>{await N();const i=await Promise.all([this.fetchI18nBundles(),this.fetchCLDR(),this.onDefine()]),[r]=i;Object.entries(this.getMetadata().getI18n()).forEach((a,h)=>{const g=a[0],l=a[1].target;l[g]=r[h]}),this.asyncFinished=!0};this.definePromise=t();const e=this.getMetadata().getTag();this.getMetadata().getFeatures().forEach(i=>{nt(i)&&this.cacheUniqueDependencies(),st(i,this,this.cacheUniqueDependencies.bind(this))});const n=q(e),o=customElements.get(e);return o&&!n?K(e):o||(this._generateAccessors(),z(e),customElements.define(e,this)),this}static getMetadata(){if(this.hasOwnProperty("_metadata"))return this._metadata;const t=[this.metadata];let e=this;for(;e!==I;)e=Object.getPrototypeOf(e),t.unshift(e.metadata);const s=F({},...t);return this._metadata=new k(s),this._metadata}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}}const _=d=>"isUI5Element"in d;export default I;export{_ as instanceOfUI5Element};
//# sourceMappingURL=UI5Element.js.map
