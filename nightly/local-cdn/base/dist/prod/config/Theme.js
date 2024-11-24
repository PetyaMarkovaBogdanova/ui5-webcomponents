"use strict";import{getTheme as o}from"../InitialConfiguration.js";import{reRenderAllUI5Elements as s}from"../Render.js";import m from"../theming/applyTheme.js";import a from"../theming/getThemeDesignerTheme.js";import{DEFAULT_THEME as h,SUPPORTED_THEMES as T}from"../generated/AssetParameters.js";import{boot as c,isBooted as u}from"../Boot.js";import{attachConfigurationReset as f}from"./ConfigurationReset.js";let t;f(()=>{t=void 0});const r=()=>(t===void 0&&(t=o()),t),g=async e=>{t!==e&&(t=e,u()&&(await m(t),await s({themeAware:!0})))},p=()=>h,d=e=>{const n=r();return n===e||n===`${e}_exp`},i=()=>{const e=r();return y(e)?!e.startsWith("sap_horizon"):!a()?.baseThemeName?.startsWith("sap_horizon")},l=async()=>(await c(),i()),y=e=>T.includes(e);export{r as getTheme,g as setTheme,d as isTheme,i as isLegacyThemeFamily,l as isLegacyThemeFamilyAsync,p as getDefaultTheme};
//# sourceMappingURL=Theme.js.map