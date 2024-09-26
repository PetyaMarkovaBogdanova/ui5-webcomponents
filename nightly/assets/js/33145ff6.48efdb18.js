"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8367],{77284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(31085),o=n(71184);const s={},i="Properties",c={id:"docs/development/properties",title:"Properties",description:"In this article, we will discuss properties in the context of UI5 Web Components.",source:"@site/docs/docs/4-development/03-properties.md",sourceDirName:"docs/4-development",slug:"/docs/development/properties",permalink:"/ui5-webcomponents/nightly/docs/development/properties",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Define Web Component",permalink:"/ui5-webcomponents/nightly/docs/development/component"},next:{title:"Slots",permalink:"/ui5-webcomponents/nightly/docs/development/slots"}},l={},d=[{value:"Properties and Attributes",id:"properties-and-attributes",level:2},{value:"<code>@property</code> decorator",id:"property-decorator",level:2},{value:"type",id:"type",level:3},{value:"noAttribute",id:"noattribute",level:3},{value:"converter",id:"converter",level:3},{value:"Default Value",id:"default-value",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.p,{children:"In this article, we will discuss properties in the context of UI5 Web Components."}),"\n",(0,r.jsx)(t.h2,{id:"properties-and-attributes",children:"Properties and Attributes"}),"\n",(0,r.jsx)(t.p,{children:"Properties allow you to configure the state of your component."}),"\n",(0,r.jsxs)(t.p,{children:["By default, for each property, there is an equivalent attribute. Attributes have the same names as properties but in ",(0,r.jsx)(t.code,{children:"kebab-case"})," rather than ",(0,r.jsx)(t.code,{children:"camelCase"}),". Properties of type ",(0,r.jsx)(t.code,{children:"Object"})," or ",(0,r.jsx)(t.code,{children:"Array"})," and properties with ",(0,r.jsx)(t.code,{children:"noAttribute"})," set to ",(0,r.jsx)(t.code,{children:"true"})," do not have an attribute equivalent."]}),"\n",(0,r.jsxs)(t.h2,{id:"property-decorator",children:[(0,r.jsx)(t.code,{children:"@property"})," decorator"]}),"\n",(0,r.jsx)(t.p,{children:"To define your own property, you need to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use the ",(0,r.jsx)(t.code,{children:"property"})," decorator."]}),"\n",(0,r.jsx)(t.li,{children:"Define a class member."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"property"})," decorator is a property decorator that takes one optional argument as an object literal containing configuration options for the property."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If no argument is provided to the decorator, the property will be treated as having a ",(0,r.jsx)(t.code,{children:"String"})," type."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport property from "@ui5/webcomponents-base/dist/decorators/property.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @property({ type: Boolean })\n    myProp = false;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"You can see the available options below."}),"\n",(0,r.jsx)(t.h3,{id:"type",children:"type"}),"\n",(0,r.jsxs)(t.p,{children:["This option is required and accepts a type constructor (e.g., ",(0,r.jsx)(t.code,{children:"Boolean"}),", ",(0,r.jsx)(t.code,{children:"String"}),") that will be used for attribute conversion. When converting from a property to an attribute, the framework can check the runtime type and convert it to a string, but when coming from an attribute, there is no way to know whether it is a boolean or a number, unless a type is provided."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport property from "@ui5/webcomponents-base/dist/decorators/property.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @property({ type: Number })\n    myProp = 0;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"Available types:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Class to Use"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"This is the default type, does not need to be explicitly set"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Boolean"})}),(0,r.jsxs)(t.td,{children:["Boolean value, the presence of the attribute will set the property to ",(0,r.jsx)(t.code,{children:"true"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Number"})}),(0,r.jsxs)(t.td,{children:["Number value, the attribute will be converted using ",(0,r.jsx)(t.code,{children:"parseFloat"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["JS Object, automatically applies ",(0,r.jsx)(t.code,{children:"noAttribute: true"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"array"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Array"})}),(0,r.jsxs)(t.td,{children:["JS Array, automatically applies ",(0,r.jsx)(t.code,{children:"noAttribute: true"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"enumeration"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Enums are treated as strings, type does not accept enum types"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"noattribute",children:"noAttribute"}),"\n",(0,r.jsx)(t.p,{children:"This option accepts a boolean value and defines whether the property should not have an equivalent attribute (f.e. for properties that do not used for CSS selectors)."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport property from "@ui5/webcomponents-base/dist/decorators/property.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @property({ type: Number, noAttribute: true })\n    myProp = 0;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"converter",children:"converter"}),"\n",(0,r.jsxs)(t.p,{children:["This option accepts an object and allows you to define a custom property-to-attribute (and vice-versa) converter with two methods - ",(0,r.jsx)(t.code,{children:"fromAttribute"})," and ",(0,r.jsx)(t.code,{children:"toAttribute"})," that will receive the ",(0,r.jsx)(t.code,{children:"type"})," and the ",(0,r.jsx)(t.code,{children:"value"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport property from "@ui5/webcomponents-base/dist/decorators/property.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @property({\n        converter: {\n            toAttribute(propertyValue: string | HTMLElement) {\n                if (propertyValue instanceof HTMLElement) {\n                    return null;\n                }\n                return propertyValue;\n            },\n            fromAttribute(value: string | null) {\n                return value;\n            }\n        }\n    })\n    myProp?: HTMLElement | string;\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"default-value",children:"Default Value"}),"\n",(0,r.jsx)(t.p,{children:"Use JavaScript property initializers to define default values."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport property from "@ui5/webcomponents-base/dist/decorators/property.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @property()\n    name = "user1";\n\n    @property({ type: Boolean })\n    collapsed = false;\n\n    @property({ type: Number })\n    maxValue = 5;\n\n    @property({ type: Object })\n    accProperties = {};\n\n    @property({ type: Array })\n    stars = [];\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," due to how HTML attributes work, boolean properties can only have ",(0,r.jsx)(t.code,{children:"false"})," as a default value."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(14041);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);