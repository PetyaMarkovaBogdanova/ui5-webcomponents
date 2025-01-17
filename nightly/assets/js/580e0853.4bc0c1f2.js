"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[3549],{37061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=t(31085),o=t(71184);const l={},i="Slots",d={id:"docs/development/slots",title:"Slots",description:"In this article, we will discuss slots in the context of UI5 Web Components.",source:"@site/docs/docs/4-development/04-slots.md",sourceDirName:"docs/4-development",slug:"/docs/development/slots",permalink:"/ui5-webcomponents/nightly/docs/development/slots",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Properties",permalink:"/ui5-webcomponents/nightly/docs/development/properties"},next:{title:"Events",permalink:"/ui5-webcomponents/nightly/docs/development/events"}},r={},a=[{value:"Unnamed slots",id:"unnamed-slots",level:2},{value:"Named slots and the <code>@slot</code> decorator",id:"named-slots-and-the-slot-decorator",level:2},{value:"Type",id:"type",level:3},{value:"Default Slot",id:"default-slot",level:3},{value:"Individual Slots",id:"individual-slots",level:3},{value:"Invalidation upon child changes",id:"invalidation-upon-child-changes",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(n.p,{children:"In this article, we will discuss slots in the context of UI5 Web Components."}),"\n",(0,s.jsx)(n.p,{children:"Components often need to render children in specific locations in their shadow root, allowing applications to supply child content when using the component."}),"\n",(0,s.jsx)(n.p,{children:'Currently, there are two types of slots: "named" and "unnamed". The difference between these types is that named slots have accessors as class members, while unnamed slots do not.'}),"\n",(0,s.jsx)(n.h2,{id:"unnamed-slots",children:"Unnamed slots"}),"\n",(0,s.jsxs)(n.p,{children:["Use unnamed slots when your component doesn't need to be aware of or interact with the children passed to a specific slot.\nTo define an unnamed slot, simply add a ",(0,s.jsx)(n.code,{children:"<slot>"})," element within your ",(0,s.jsx)(n.code,{children:".hbs"})," template. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hbs",children:'{{!-- MyDemoComponent.hbs --}}\n<div>\n   <slot name="mySlot"></slot>\n</div>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["On the consuming side, elements can be passed to this slot using the ",(0,s.jsx)(n.code,{children:"slot"})," attribute:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- index.html --\x3e\n<my-demo-component>\n    <span slot="mySlot">Hello World</span>\n</my-demo-component>\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," It is recommended to describe your unnamed slots inside a JSDoc comment that describes your class using the ",(0,s.jsx)(n.code,{children:"@slot"})," tag, following the pattern ",(0,s.jsx)(n.code,{children:"@slot {type} name - description"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"named-slots-and-the-slot-decorator",children:["Named slots and the ",(0,s.jsx)(n.code,{children:"@slot"})," decorator"]}),"\n",(0,s.jsx)(n.p,{children:"Contrary to unnamed slots, named slots are used whenever the component must interact with its children in order to render itself properly."}),"\n",(0,s.jsx)(n.p,{children:"To define your own named slot, you need to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"slot"})," decorator."]}),"\n",(0,s.jsx)(n.li,{children:"Define a class member."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"slot"})," decorator is a property decorator that takes one optional argument as an object literal containing configuration options for the slot."]}),"\n",(0,s.jsxs)(n.p,{children:["Defining a slot with the ",(0,s.jsx)(n.code,{children:"slot"})," decorator means that this slot will be managed by the library. This means:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If any of this UI5 Web Component's children are custom elements, the framework will wait until they are all defined and upgraded before rendering the component."}),"\n",(0,s.jsxs)(n.li,{children:["The library will invalidate this UI5 Web Component whenever its children are added, removed, or rearranged (and additionally when invalidated, if ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," is set)."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport slot from "@ui5/webcomponents-base/dist/decorators/slot.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @slot()\n    mySlot!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can see the available options below."}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"type"})," option accepts a type constructor (e.g., ",(0,s.jsx)(n.code,{children:"HTMLElement"}),", ",(0,s.jsx)(n.code,{children:"Node"}),") and is used to define the type of children that can be slotted inside the slot."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport slot from "@ui5/webcomponents-base/dist/decorators/slot.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @slot({ type: HTMLElement })\n    mySlot!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Available types:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTMLElement"}),(0,s.jsx)(n.td,{children:"Accepts HTML Elements only"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Node"}),(0,s.jsx)(n.td,{children:"Accepts both Text nodes and HTML Elements"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": If the slot configuration object is not provided (e.g. ",(0,s.jsx)(n.code,{children:"@slot()"}),"), ",(0,s.jsx)(n.code,{children:"HTMLElement"})," will be used as the default type."]}),"\n",(0,s.jsx)(n.h3,{id:"default-slot",children:"Default Slot"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:'"default"'})," option accepts a boolean value and is used to define whether this slot is the default one."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The default slot is defined simply as an empty slot tag ",(0,s.jsx)(n.code,{children:"<slot></slot>"})," (without a ",(0,s.jsx)(n.code,{children:"name"})," attribute) in the component's template."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport slot from "@ui5/webcomponents-base/dist/decorators/slot.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @slot({ type: HTMLElement, "default": true })\n    mySlot!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"individual-slots",children:"Individual Slots"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"individualSlots"})," option accepts a boolean value and determines whether each child will have its own slot, allowing you to arrange or wrap the children arbitrarily. This means that you need to handle the rendering on your own."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport slot from "@ui5/webcomponents-base/dist/decorators/slot.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @slot({ type: HTMLElement, individualSlots: true })\n    mySlot!: Array<HTMLElement>;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To render individual slots, you have to iterate all children in that slot and use the ",(0,s.jsx)(n.code,{children:"_individualSlot"})," property that the framework sets automatically on each child:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hbs",children:'{{#each mySlot}}\n    <slot name="{{this._individualSlot}}"></slot>\n{{/each}}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When this option is set to ",(0,s.jsx)(n.code,{children:"true"}),", the ",(0,s.jsx)(n.code,{children:"_individualSlot"})," property is set to each direct child, where ",(0,s.jsx)(n.code,{children:"_individualSlot"})," returns a string following the pattern ",(0,s.jsx)(n.code,{children:"{nameOfTheSlot}-{index}"})," and the slot attribute is changed based on that pattern."]}),"\n",(0,s.jsx)(n.h3,{id:"invalidation-upon-child-changes",children:"Invalidation upon child changes"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," option accepts a boolean value or an object literal containing a configuration with more specific settings, determining whether the component should be invalidated on child change."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": ",(0,s.jsx)(n.code,{children:"invalidateOnChildChange"})," is not meant to be used with standard DOM elements and is not to be confused with MutationObserver-like functionality. It targets the use case of components that slot UI5Element instances and require invalidation whenever these items are invalidated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";\nimport customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";\nimport slot from "@ui5/webcomponents-base/dist/decorators/slot.js";\n\n@customElement("my-demo-component")\nclass MyDemoComponent extends UI5Element {\n    @slot({ type: HTMLElement, invalidateOnChildChange: true })\n    mySlot!: Array<HTMLElement>;\n\n    @slot({ type: HTMLElement, invalidateOnChildChange: { properties: true, slots: false }})\n    mySlot2!: Array<HTMLElement>;\n\n    @slot({ type: HTMLElement, invalidateOnChildChange: { properties: ["myProp"], slots: ["anotherSlot"] }})\n    mySlot3!: Array<HTMLElement>;\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(14041);const o={},l=s.createContext(o);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);