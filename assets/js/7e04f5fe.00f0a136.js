"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4163],{46862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(31085),i=t(71184);const s={title:"Scoping"},r="Micro-Frontends and Custom Elements Scoping",a={id:"docs/advanced/scoping",title:"Scoping",description:"What does scoping mean?",source:"@site/docs/docs/2-advanced/06-scoping.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/scoping",permalink:"/ui5-webcomponents/docs/advanced/scoping",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Scoping"},sidebar:"documentationSidebar",previous:{title:"Using Features",permalink:"/ui5-webcomponents/docs/advanced/using-features"},next:{title:"OpenUI5 Integration",permalink:"/ui5-webcomponents/docs/advanced/OpenUI5-integration"}},d={},c=[{value:"What does <code>scoping</code> mean?",id:"what-does-scoping-mean",level:2},{value:"When do I need to use the <code>scoping</code> feature?",id:"when-do-i-need-to-use-the-scoping-feature",level:2},{value:"How can I fine-tune the scoping feature?",id:"how-can-i-fine-tune-the-scoping-feature",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"micro-frontends-and-custom-elements-scoping",children:"Micro-Frontends and Custom Elements Scoping"}),"\n",(0,o.jsxs)(n.h2,{id:"what-does-scoping-mean",children:["What does ",(0,o.jsx)(n.code,{children:"scoping"})," mean?"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"scoping"})," feature lets you add an arbitrary suffix to the names of all UI5 Web Components' custom elements:"]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";\nsetCustomElementsScopingSuffix("demo");\n'})}),"\n",(0,o.jsx)(n.p,{children:"Then all names can only be used with the supplied suffix:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<ui5-card-demo>\n\t<ui5-title-demo>This card is scoped</ui5-title-demo>\n\t<ui5-button-demo>Click me</ui5-button-demo>\n</ui5-card-demo>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Trying to use them with the standard names will not work (the custom elements won't be upgraded), so for example the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"<ui5-button>Click me</ui5-button>\n"})}),"\n",(0,o.jsx)(n.p,{children:"will not have any effect."}),"\n",(0,o.jsxs)(n.h2,{id:"when-do-i-need-to-use-the-scoping-feature",children:["When do I need to use the ",(0,o.jsx)(n.code,{children:"scoping"})," feature?"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"scoping"})," feature is completely optional. It is not needed for application development, but it is strongly recommended when building ",(0,o.jsx)(n.strong,{children:"libraries"})," and ",(0,o.jsx)(n.strong,{children:"micro-frontends"}),".\nIt ensures that the custom elements that your code uses have not already been reserved by another library or an older version of UI5 Web Components."]}),"\n",(0,o.jsx)(n.p,{children:"If, for example, your code may be loaded on demand by unknown applications as a third-party service, there is always the risk that the app\nor another third-party library, loaded by the app, may use an older version of UI5 Web Components which means that all custom elements will be\nupgraded with this version, while your code may rely on newer features."}),"\n",(0,o.jsx)(n.p,{children:"Imagine the following integration scenario of an app, using several third-party libraries, loaded on demand (and not bundled with the app):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<body>\n\n\t\x3c!-- Application code, using UI5 Web Components version 1.0.1 --\x3e\n\t<div id="application-container">\n\t\t<ui5-title>This is the new app with many third-party extensions!</ui5-title>\n\t\t<ui5-card>\n\t\t\t<ui5-button>Hello</ui5-button>\n\t\t\t<ui5-input></ui5-input>\n\t\t</ui5-card>\n\t</div>\n\n\t\x3c!-- Code inserted by "common help" library, using UI5 Web Components version 1.2.0 --\x3e\n\t<div id="common-help-container">\n\t\t<ui5-button-chlp new-button-prop="1">Help Menu</ui5-button-chlp>\n\t\t<ui5-input-chlp value="Type your question"></ui5-input-chlp>\n\t</div>\n\n\t\x3c!-- Code inserted by "global footer" library, using UI5 Web Components version 1.3.0 --\x3e\n\t<footer id="global-footer-container">\n\t\t<global-footer-main>\n\t\t\t<ui5-button-glob-foot new-button-prop="2" even-newer-button-prop="3">Profile</ui5-button-glob-foot>\n\t\t\t<ui5-link-glob-foot>Contacts</ui5-link-glob-foot>\n\t\t</global-footer-main>\n\t</footer>\n\n</body>\n'})}),"\n",(0,o.jsx)(n.p,{children:"In the example above:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The app itself is using an old version (",(0,o.jsx)(n.code,{children:"1.0.1"}),") of UI5 Web Components (which has already upgraded the ",(0,o.jsx)(n.code,{children:"ui5-card"}),", ",(0,o.jsx)(n.code,{children:"ui5-button"})," and ",(0,o.jsx)(n.code,{children:"ui5-input"})," tags)."]}),"\n",(0,o.jsxs)(n.li,{children:['The imaginary "common help" library, based on a newer version (',(0,o.jsx)(n.code,{children:"1.2.0"}),"), uses the scoping suffix ",(0,o.jsx)(n.code,{children:"chlp"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:['The imaginary "global footer" library, based on an even newer version (',(0,o.jsx)(n.code,{children:"1.3.0"}),"), uses the scoping suffix ",(0,o.jsx)(n.code,{children:"glob-foot"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This allows the libraries to use new ",(0,o.jsx)(n.code,{children:"ui5-button"})," properties such as ",(0,o.jsx)(n.code,{children:"newButtonProp"})," and ",(0,o.jsx)(n.code,{children:"evenNewerButtonProp"})," that are not found in older versions."]}),"\n",(0,o.jsx)(n.h2,{id:"how-can-i-fine-tune-the-scoping-feature",children:"How can I fine-tune the scoping feature?"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import { setCustomElementsScopingSuffix, setCustomElementsScopingRules } from "@ui5/webcomponents-base/dist/CustomElementsScope.js";\nsetCustomElementsScopingSuffix("demo");\nsetCustomElementsScopingRules({include: [/^ui5-/], exclude: [/^ui5-my-/, /-test-/]});\n'})}),"\n",(0,o.jsxs)(n.p,{children:["By default, all UI5 Web Components starting with ",(0,o.jsx)(n.code,{children:"ui5-"})," are scoped when you call ",(0,o.jsx)(n.code,{children:"setCustomElementsScopingSuffix"}),".\nHowever, you have full control over which tags are scoped and which not. In the example above, tags starting with ",(0,o.jsx)(n.code,{children:"ui5-my-"})," and tags\nhaving the word ",(0,o.jsx)(n.code,{children:"-test-"})," in their name are not scoped."]}),"\n",(0,o.jsx)(n.p,{children:"Setting scoping rules is handy if, for example, your library uses both standard and custom UI5 Web Components and you don't want\nto scope the custom ones (as no disambiguation will be necessary for them)."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(14041);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);