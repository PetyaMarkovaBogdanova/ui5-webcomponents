"use strict";import{getCurrentRuntimeIndex as u,compareRuntimes as a}from"./Runtimes.js";const g=typeof document>"u",i=(e,t)=>t?`${e}|${t}`:e,l=e=>e===void 0?!0:a(u(),parseInt(e))===1,c=(e,t,r="",s)=>{const d=u(),n=new CSSStyleSheet;n.replaceSync(e),n._ui5StyleId=i(t,r),s&&(n._ui5RuntimeIndex=d,n._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,n]},y=(e,t,r="",s)=>{const d=u(),n=document.adoptedStyleSheets.find(o=>o._ui5StyleId===i(t,r));if(n)if(!s)n.replaceSync(e||"");else{const o=n._ui5RuntimeIndex;(n._ui5Theme!==s||l(o))&&(n.replaceSync(e||""),n._ui5RuntimeIndex=String(d),n._ui5Theme=s)}},S=(e,t="")=>g?!0:!!document.adoptedStyleSheets.find(r=>r._ui5StyleId===i(e,t)),f=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(r=>r._ui5StyleId!==i(e,t))},R=(e,t,r="",s)=>{S(t,r)?y(e,t,r,s):c(e,t,r,s)},m=(e,t)=>e===void 0?t:t===void 0?e:`${e} ${t}`;export{c as createStyle,S as hasStyle,y as updateStyle,f as removeStyle,R as createOrUpdateStyle,m as mergeStyles};
//# sourceMappingURL=ManagedStyles.js.map