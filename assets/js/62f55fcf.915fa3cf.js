"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2574],{88877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var o=n(31085),s=n(71184),c=n(53492);const i={title:"Enums"},r=void 0,a={id:"components/compat/enums/README",title:"Enums",description:"",source:"@site/docs/components/compat/enums/README.mdx",sourceDirName:"components/compat/enums",slug:"/components/compat/enums/",permalink:"/ui5-webcomponents/components/compat/enums/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Enums"},sidebar:"componentsSidebar",previous:{title:"TableRow",permalink:"/ui5-webcomponents/components/compat/TableRow"},next:{title:"TableColumnPopinDisplay",permalink:"/ui5-webcomponents/components/compat/enums/TableColumnPopinDisplay"}},l={},m=[];function u(e){return(0,o.jsx)(c.A,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},53492:(e,t,n)=>{n.d(t,{A:()=>b});n(14041);var o=n(54357),s=n(5096),c=n(42436),i=n(35436),r=n(49082),a=n(54441);const l={cardContainer:"cardContainer_Shn5",cardTitle:"cardTitle_h48N",cardDescription:"cardDescription_CytT"};var m=n(31085);function u(e){let{href:t,children:n}=e;return(0,m.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",l.cardContainer),children:n})}function d(e){let{href:t,icon:n,title:s,description:c}=e;return(0,m.jsxs)(u,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),c&&(0,m.jsx)("p",{className:(0,o.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t);return n?(0,m.jsx)(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,r.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(d,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,m.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(x,{...e});const c=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,o.A)("row",n),children:c.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(h,{item:e})},t)))})}},71184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(14041);const s={},c=o.createContext(s);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);