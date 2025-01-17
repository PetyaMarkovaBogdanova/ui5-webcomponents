"use strict";import{DEFAULT_THEME as c}from"../generated/AssetParameters.js";import{mergeStyles as f}from"../ManagedStyles.js";import{fireThemeRegistered as y}from"../theming/ThemeRegistered.js";const l=new Map,h=new Map,u=new Map,T=new Set,i=new Set,p=(e,r,t)=>{h.set(`${e}/${r}`,t),T.add(e),i.add(r),y(r)},L=(e,r,t)=>{u.set(`${e}/${r}`,t)},m=async(e,r,t)=>{const g=`${e}_${r}_${t||""}`,s=l.get(g);if(s!==void 0)return s;if(!i.has(r)){const $=[...i.values()].join(", ");return console.warn(`You have requested a non-registered theme ${r} - falling back to ${c}. Registered themes are: ${$}`),a(e,c)}const[n,d]=await Promise.all([a(e,r),t?a(e,t,!0):void 0]),o=f(n,d);return o&&l.set(g,o),o},a=async(e,r,t=!1)=>{const s=(t?u:h).get(`${e}/${r}`);if(!s){t||console.error(`Theme [${r}] not registered for package [${e}]`);return}let n;try{n=await s(r)}catch(d){console.error(e,d.message);return}return n},w=()=>T,P=e=>i.has(e);export{p as registerThemePropertiesLoader,L as registerCustomThemePropertiesLoader,m as getThemeProperties,w as getRegisteredPackages,P as isThemeRegistered};
//# sourceMappingURL=Themes.js.map