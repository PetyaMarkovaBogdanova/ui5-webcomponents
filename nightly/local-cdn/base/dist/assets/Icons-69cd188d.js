(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const L={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},M=L.themes.default,dt=L.themes.all,C=L.languages.default,l=L.locales.default,fe=L.locales.all,ht=typeof document>"u",pt=()=>{if(ht)return C;const e=navigator.languages,t=()=>navigator.language;return e&&e[0]||t()||C};var Ie={},Oe=Ie.hasOwnProperty,gt=Ie.toString,$e=Oe.toString,mt=$e.call(Object),le=function(e){var t,n;return!e||gt.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=Oe.call(t,"constructor")&&t.constructor,typeof n=="function"&&$e.call(n)===mt):!0)},Ut=Object.create(null),Me=function(e,t,n,s){var o,r,a,i,d,m,h=arguments[2]||{},q=3,ft=arguments.length,ue=arguments[0]||!1,lt=arguments[1]?void 0:Ut;for(typeof h!="object"&&typeof h!="function"&&(h={});q<ft;q++)if((d=arguments[q])!=null)for(i in d)o=h[i],a=d[i],!(i==="__proto__"||h===a)&&(ue&&a&&(le(a)||(r=Array.isArray(a)))?(r?(r=!1,m=o&&Array.isArray(o)?o:[]):m=o&&le(o)?o:{},h[i]=Me(ue,arguments[1],m,a)):a!==lt&&(h[i]=a));return h};const ke=function(e,t){return Me(!0,!1,...arguments)};class A{constructor(){this._eventRegistry=new Map}attachEvent(t,n){const s=this._eventRegistry,o=s.get(t);if(!Array.isArray(o)){s.set(t,[n]);return}o.includes(n)||o.push(n)}detachEvent(t,n){const s=this._eventRegistry,o=s.get(t);if(!o)return;const r=o.indexOf(n);r!==-1&&o.splice(r,1),o.length===0&&s.delete(t)}fireEvent(t,n){const o=this._eventRegistry.get(t);return o?o.map(r=>r.call(this,n)):[]}fireEventAsync(t,n){return Promise.all(this.fireEvent(t,n))}isHandlerAttached(t,n){const o=this._eventRegistry.get(t);return o?o.includes(n):!1}hasListeners(t){return!!this._eventRegistry.get(t)}}const Fe=new Map,fs=(e,t)=>{Fe.set(e,t)},_=e=>Fe.get(e),Be=typeof document>"u",yt={search(){return Be?"":window.location.search}},de=()=>Be?"":window.location.href,wt=()=>yt.search(),St=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},_t=e=>{const t=St("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},Et=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},xe=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,de()).toString();else{const n=new URL(e),s=n.origin;s&&_t(s)?t=n.toString():t=Et(n.toString(),de())}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var se;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(se||(se={}));const At=se,ze=new A,je="configurationReset",j=e=>{ze.attachEvent(je,e)},Ct=()=>{ze.fireEvent(je,void 0)};let he=!1,c={animationMode:At.Full,theme:M,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1,defaultFontLoading:!0,enableDefaultTooltips:!0};const ls=()=>(u(),c.animationMode),Tt=()=>(u(),c.theme),bt=()=>(u(),c.themeRoot),Lt=()=>(u(),c.language),vt=()=>(u(),c.fetchDefaultLanguage),ds=()=>(u(),c.noConflict),Pt=()=>(u(),c.defaultFontLoading),hs=()=>(u(),c.enableDefaultTooltips),ps=()=>(u(),c.calendarType),gs=()=>(u(),c.formatSettings),k=new Map;k.set("true",!0);k.set("false",!1);const Rt=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(c=ke(c,t))}},Dt=()=>{const e=new URLSearchParams(wt());e.forEach((t,n)=>{const s=n.split("sap-").length;s===0||s===n.split("sap-ui-").length||pe(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&pe(n,t,"sap-ui")})},It=e=>{const t=e.split("@")[1];return xe(t)},Ot=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,pe=(e,t,n)=>{const s=t.toLowerCase(),o=e.split(`${n}-`)[1];k.has(t)&&(t=k.get(s)),o==="theme"?(c.theme=Ot(o,t),t&&t.includes("@")&&(c.themeRoot=It(t))):c[o]=t},$t=()=>{const e=_("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();c=ke(c,t)},u=()=>{typeof document>"u"||he||(Mt(),he=!0)},Mt=e=>{e&&Ct(),Rt(),Dt(),$t()},Ve=new A,Ne="languageChange",Ze=e=>{Ve.attachEvent(Ne,e)},kt=e=>Ve.fireEventAsync(Ne,e),ge=10;class Ft{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const s=new Map;for(n=this.shift();n;){const o=s.get(n)||0;if(o>ge)throw new Error(`Web component processed too many times this task, max allowed is: ${ge}`);t(n),s.set(n,o+1),n=this.shift()}}}const Bt=(e,t=document.body,n)=>{let s=document.querySelector(e);return s||(s=n?n():document.createElement(e),t.insertBefore(s,t.firstChild))},xt=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},zt=()=>typeof document>"u"?null:Bt('meta[name="ui5-shared-resources"]',document.head,xt),V=(e,t)=>{const n=e.split(".");let s=zt();if(!s)return t;for(let o=0;o<n.length;o++){const r=n[o],a=o===n.length-1;Object.prototype.hasOwnProperty.call(s,r)||(s[r]=a?t:{}),s=s[r]}return s},jt={version:"2.3.0-rc.0",major:2,minor:3,patch:0,suffix:"-rc.0",isNext:!1,buildTime:1727342815};let Vt,Nt={include:[/^ui5-/],exclude:[]};const Zt=()=>Vt,Ht=()=>Nt;let R,Wt="";const K=new Map,F=V("Runtimes",[]),Gt=()=>{if(R===void 0){R=F.length;const e=jt;F.push({...e,get scopingSuffix(){return Zt()},get registeredTags(){return He()},get scopingRules(){return Ht()},alias:Wt,description:`Runtime ${R} - ver ${e.version}`})}},N=()=>R,qt=(e,t)=>{const n=`${e},${t}`;if(K.has(n))return K.get(n);const s=F[e],o=F[t];if(!s||!o)throw new Error("Invalid runtime index supplied");if(s.isNext||o.isNext)return s.buildTime-o.buildTime;const r=s.major-o.major;if(r)return r;const a=s.minor-o.minor;if(a)return a;const i=s.patch-o.patch;if(i)return i;const m=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(s.suffix,o.suffix);return K.set(n,m),m};V("Tags",new Map);const Kt=new Set,He=()=>[...Kt.values()],Jt=new Set,Xt=e=>Jt.has(e),We=new Set,Yt=new A,T=new Ft;let U,D,J,v;const Qt=async e=>{T.add(e),await tn()},en=e=>{Yt.fireEvent("beforeComponentRender",e),We.add(e),e._render()},tn=async()=>{v||(v=new Promise(e=>{window.requestAnimationFrame(()=>{T.process(en),v=null,e(),J||(J=setTimeout(()=>{J=void 0,T.isEmpty()&&rn()},200))})})),await v},nn=()=>U||(U=new Promise(e=>{D=e,window.requestAnimationFrame(()=>{T.isEmpty()&&(U=void 0,e())})}),U),sn=()=>{const e=He().map(t=>customElements.whenDefined(t));return Promise.all(e)},on=async()=>{await sn(),await nn()},rn=()=>{T.isEmpty()&&D&&(D(),D=void 0,U=void 0)},Ge=async e=>{We.forEach(t=>{const n=t.constructor,s=n.getMetadata().getTag(),o=Xt(n),r=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!e||e.tag===s||e.rtlAware&&o||e.languageAware&&r||e.themeAware&&a)&&Qt(t)}),await on()},an=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),cn=typeof document>"u",Z=(e,t)=>t?`${e}|${t}`:e,un=e=>e===void 0?!0:qt(N(),parseInt(e))===1,H=(e,t,n="",s)=>{const o=typeof e=="string"?e:e.content,r=N(),a=new CSSStyleSheet;a.replaceSync(o),a._ui5StyleId=Z(t,n),s&&(a._ui5RuntimeIndex=r,a._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]},fn=(e,t,n="",s)=>{const o=typeof e=="string"?e:e.content,r=N(),a=document.adoptedStyleSheets.find(i=>i._ui5StyleId===Z(t,n));if(a)if(!s)a.replaceSync(o||"");else{const i=a._ui5RuntimeIndex;(a._ui5Theme!==s||un(i))&&(a.replaceSync(o||""),a._ui5RuntimeIndex=String(r),a._ui5Theme=s)}},W=(e,t="")=>cn?!0:!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===Z(e,t)),ln=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==Z(e,t))},qe=(e,t,n="",s)=>{W(t,n)?fn(e,t,n,s):H(e,t,n,s)},dn=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}},hn={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`},pn={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"};let I;j(()=>{I=void 0});const gn=()=>(I===void 0&&(I=Pt()),I),mn=()=>{const e=_("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&Un(),yn()},Un=()=>{const e=document.querySelector("head>style[data-ui5-font-face]");!gn()||e||W("data-ui5-font-face")||H(hn,"data-ui5-font-face")},yn=()=>{W("data-ui5-font-face-override")||H(pn,"data-ui5-font-face-override")},wn={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}"},Sn=()=>{W("data-ui5-system-css-vars")||H(wn,"data-ui5-system-css-vars")},Ke=new A,Je="themeRegistered",_n=e=>{Ke.attachEvent(Je,e)},En=e=>Ke.fireEvent(Je,e),me=new Map,Xe=new Map,An=new Map,Ye=new Set,B=new Set,ms=(e,t,n)=>{Xe.set(`${e}/${t}`,n),Ye.add(e),B.add(t),En(t)},Qe=async(e,t,n)=>{const s=`${e}_${t}_${n||""}`,o=me.get(s);if(o!==void 0)return o;if(!B.has(t)){const d=[...B.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${M}. Registered themes are: ${d}`),X(e,M)}const[r,a]=await Promise.all([X(e,t),n?X(e,n,!0):void 0]),i=dn(r,a);return i&&me.set(s,i),i},X=async(e,t,n=!1)=>{const o=(n?An:Xe).get(`${e}/${t}`);if(!o){n||console.error(`Theme [${t}] not registered for package [${e}]`);return}let r;try{r=await o(t)}catch(i){console.error(e,i.message);return}return r._||r},et=()=>Ye,Cn=e=>B.has(e),y=new Set,Tn=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},bn=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let n=t[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{y.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),y.add("decode"));return}try{return JSON.parse(n)}catch{y.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),y.add("parse"))}}},Ln=e=>{let t,n;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],n=e.Extends[0]}catch{y.has("object")||(console.warn("Malformed theme metadata Object",e),y.add("object"));return}return{themeName:t,baseThemeName:n}},oe=()=>{const e=Tn();if(!e||e==="none")return;const t=bn(e);if(t)return Ln(t)},vn=new A,Pn="themeLoaded",Rn=e=>vn.fireEvent(Pn,e),Dn=(e,t)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",t&&Object.entries(t).forEach(s=>n.setAttribute(...s)),n.href=e,document.head.appendChild(n),new Promise(s=>{n.addEventListener("load",s),n.addEventListener("error",s)})};let w;j(()=>{w=void 0});const tt=()=>(w===void 0&&(w=bt()),w),Us=e=>{if(w!==e){if(w=e,!xe(e)){console.warn(`The ${e} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);return}return nt(E())}},In=e=>`${tt()}Base/baseLib/${e}/css_variables.css`,nt=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await Dn(In(e),{"sap-ui-webcomponents-theme":e})},b="@ui5/webcomponents-theming",On=()=>et().has(b),$n=async e=>{if(!On())return;const t=await Qe(b,e);t&&qe(t,"data-ui5-theme-properties",b,e)},Mn=()=>{ln("data-ui5-theme-properties",b)},kn=async(e,t)=>{const s=[...et()].map(async o=>{if(o===b)return;const r=await Qe(o,e,t);r&&qe(r,`data-ui5-component-properties-${N()}`,o)});return Promise.all(s)},Fn=async e=>{var s;const t=oe();if(t)return t;const n=_("OpenUI5Support");if(n&&n.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(s=n.getConfigurationSettingsObject())==null?void 0:s.theme,baseThemeName:""}}else if(tt())return await nt(e),oe()},re=async e=>{const t=await Fn(e);!t||e!==t.themeName?await $n(e):Mn();const n=Cn(e)?e:t&&t.baseThemeName;await kn(n||M,t&&t.themeName===e?e:void 0),Rn(e)};let g;j(()=>{g=void 0});const E=()=>(g===void 0&&(g=Tt()),g),ys=async e=>{g!==e&&(g=e,ot()&&(await re(g),await Ge({themeAware:!0})))},Bn=()=>{var t,n;const e=E();return xn(e)?!e.startsWith("sap_horizon"):!((n=(t=oe())==null?void 0:t.baseThemeName)!=null&&n.startsWith("sap_horizon"))},xn=e=>dt.includes(e);let G=!1,P;const st=new A,ot=()=>G,ws=e=>{if(!G){st.attachEvent("boot",e);return}e()},Ss=async()=>{if(P!==void 0)return P;const e=async t=>{if(Gt(),typeof document>"u"){t();return}_n(zn);const n=_("OpenUI5Support"),s=n?n.isOpenUI5Detected():!1,o=_("F6Navigation");n&&await n.init(),o&&!s&&o.init(),await an(),await re(E()),n&&n.attachListeners(),mn(),Sn(),t(),G=!0,await st.fireEventAsync("boot")};return P=new Promise(e),P},zn=e=>{G&&e===E()&&re(E())};let S,O;j(()=>{S=void 0,O=void 0});const jn=()=>(S===void 0&&(S=Lt()),S),_s=async e=>{S!==e&&(S=e,ot()&&(await kt(e),await Ge({languageAware:!0})))},Vn=()=>(O===void 0&&(O=vt()),O),Nn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class rt{constructor(t){const n=Nn.exec(t.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${t} does not adhere to BCP-47.`);this.sLocaleId=t,this.sLanguage=n[1]||C,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,s=>s.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(t){return this.getPrivateUseSubtags().indexOf(t)>=0}toString(){const t=[this.sLanguage];return this.sScript&&t.push(this.sScript),this.sRegion&&t.push(this.sRegion),this.sVariant&&t.push(this.sVariant),this.sExtension&&t.push(this.sExtension),this.sPrivateUse&&t.push(this.sPrivateUse),t.join("-")}}const Y=new Map,at=e=>(Y.has(e)||Y.set(e,new rt(e)),Y.get(e)),Ue=e=>{try{if(e&&typeof e=="string")return at(e)}catch{}return new rt(l)},$=e=>{if(e)return Ue(e);const t=jn();return t?at(t):Ue(pt())},Zn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,ye=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,Hn={he:"iw",yi:"ji",nb:"no",sr:"sh"},Wn=e=>{let t;if(!e)return l;if(typeof e=="string"&&(t=Zn.exec(e.replace(/_/g,"-")))){let n=t[1].toLowerCase(),s=t[3]?t[3].toUpperCase():void 0;const o=t[2]?t[2].toLowerCase():void 0,r=t[4]?t[4].slice(1):void 0,a=t[6];return n=Hn[n]||n,a&&(t=ye.exec(a))||r&&(t=ye.exec(r))?`en_US_${t[1].toLowerCase()}`:(n==="zh"&&!s&&(o==="hans"?s="CN":o==="hant"&&(s="TW")),n+(s?"_"+s+(r?"_"+r.replace("-","_"):""):""))}return l},Gn=e=>{if(!e)return l;if(e==="zh_HK")return"zh_TW";const t=e.lastIndexOf("_");return t>=0?e.slice(0,t):e!==l?l:""},we=new Set,Se=new Set,ae=new Map,Q=new Map,ie=new Map,Es=(e,t,n)=>{const s=`${e}/${t}`;ie.set(s,n)},_e=(e,t)=>{ae.set(e,t)},As=e=>ae.get(e),it=(e,t)=>{const n=`${e}/${t}`;return ie.has(n)},qn=(e,t)=>{const n=`${e}/${t}`,s=ie.get(n);return s&&!Q.get(n)&&Q.set(n,s(t)),Q.get(n)},Kn=e=>{we.has(e)||(console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),we.add(e))},Ee=(e,t)=>t!==C&&!it(e,t),Jn=async e=>{const t=$().getLanguage(),n=$().getRegion(),s=$().getVariant();let o=t+(n?`-${n}`:"")+(s?`-${s}`:"");if(Ee(e,o))for(o=Wn(o);Ee(e,o);)o=Gn(o);const r=Vn();if(o===C&&!r){_e(e,null);return}if(!it(e,o)){Kn(e);return}try{const a=await qn(e,o);_e(e,a)}catch(a){const i=a;Se.has(i.message)||(Se.add(i.message),console.error(i.message))}};Ze(e=>{const t=[...ae.keys()];return Promise.all(t.map(Jn))});const Xn=new Map,x=new Map,ee=new Map,Ae=new Set;let Ce=!1;const Yn={iw:"he",ji:"yi",in:"id"},Te=e=>{Ce||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),Ce=!0)},Qn=(e,t,n)=>{e=e&&Yn[e]||e,e==="no"&&(e="nb"),e==="zh"&&!t&&(n==="Hans"?t="CN":n==="Hant"&&(t="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr",t="Latn");let s=`${e}_${t}`;return fe.includes(s)||(s=e,fe.includes(s))?x.has(s)?s:(Te(s),l):l},be=(e,t)=>{Xn.set(e,t)},es=e=>{if(!ee.get(e)){const t=x.get(e);if(!t)throw new Error(`CLDR data for locale ${e} is not loaded!`);ee.set(e,t(e))}return ee.get(e)},ts=async(e,t,n)=>{const s=Qn(e,t,n),o=_("OpenUI5Support");if(o){const r=o.getLocaleDataObject();if(r){be(s,r);return}}try{const r=await es(s);be(s,r)}catch(r){const a=r;Ae.has(a.message)||(Ae.add(a.message),console.error(a.message))}},ns=(e,t)=>{x.set(e,t)};ns("en",async()=>(await fetch("https://sdk.openui5.org/1.120.17/resources/sap/ui/core/cldr/en.json")).json());Ze(()=>{const e=$();return ts(e.getLanguage(),e.getRegion(),e.getScript())});var z;(function(e){e["SAP-icons"]="SAP-icons-v4",e.horizon="SAP-icons-v5",e["SAP-icons-TNT"]="tnt",e.BusinessSuiteInAppSymbols="business-suite"})(z||(z={}));const ct=e=>z[e]?z[e]:e;var p;(function(e){e.SAPIconsV4="SAP-icons-v4",e.SAPIconsV5="SAP-icons-v5",e.SAPIconsTNTV2="tnt-v2",e.SAPIconsTNTV3="tnt-v3",e.SAPBSIconsV1="business-suite-v1",e.SAPBSIconsV2="business-suite-v2"})(p||(p={}));const f=new Map;f.set("SAP-icons",{legacy:p.SAPIconsV4,sap_horizon:p.SAPIconsV5});f.set("tnt",{legacy:p.SAPIconsTNTV2,sap_horizon:p.SAPIconsTNTV3});f.set("business-suite",{legacy:p.SAPBSIconsV1,sap_horizon:p.SAPBSIconsV2});const ss=(e,t)=>{if(f.has(e)){f.set(e,{...t,...f.get(e)});return}f.set(e,t)},Le=e=>{const t=Bn()?"legacy":"sap_horizon";return f.has(e)?f.get(e)[t]:e},os=new Map,rs=e=>os.get(e),ut=e=>{const t=rs(E());return!e&&t?ct(t):Le(e||"SAP-icons")},as="legacy",ve=new Map,ce=V("SVGIcons.registry",new Map),te=V("SVGIcons.promises",new Map),Pe="ICON_NOT_FOUND",is=async e=>{if(!te.has(e)){if(!ve.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=ve.get(e);te.set(e,t(e))}return te.get(e)},Re=e=>{Object.keys(e.data).forEach(t=>{const n=e.data[t];cs(t,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:e.collection,packageName:e.packageName})})},cs=(e,t)=>{const n=`${t.collection}/${e}`;ce.set(n,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})},us=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return[e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=ct(t)),{name:e,collection:t}},ne=async e=>{const{name:t,collection:n}=us(e);let s=Pe;try{s=await is(ut(n))}catch(r){console.error(r.message)}if(s===Pe)return s;const o=De(n,t);return o||(Array.isArray(s)?s.forEach(r=>{Re(r),ss(n,{[r.themeFamily||as]:r.collection})}):Re(s),De(n,t))},De=(e,t)=>{const n=`${ut(e)}/${t}`;return ce.get(n)},Cs=async()=>(await ne("edit"),await ne("tnt/arrow"),await ne("business-suite/3d"),Array.from(ce.keys()));export{A as E,Cs as _,ws as a,Ss as b,fs as c,j as d,ls as e,Jn as f,As as g,W as h,ps as i,hs as j,ds as k,gs as l,_ as m,Ge as n,jn as o,_s as p,E as q,ms as r,ys as s,tt as t,Us as u,gn as v,N as w,Es as x,on as y};