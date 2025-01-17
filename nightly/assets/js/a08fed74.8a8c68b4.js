"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9588],{21777:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=i(31085),d=i(71184);const t={slug:"../UserMenuItem",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-user-menu-item",ui5_since:"2.5.0"},r=void 0,l={id:"components/fiori/UserMenu/UserMenuItem",title:"UserMenuItem",description:"The following entity is available under an experimental flag and its API and behavior are subject to change.",source:"@site/docs/components/fiori/UserMenu/UserMenuItem.mdx",sourceDirName:"components/fiori/UserMenu",slug:"/components/fiori/UserMenuItem",permalink:"/ui5-webcomponents/nightly/components/fiori/UserMenuItem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../UserMenuItem",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-user-menu-item",ui5_since:"2.5.0"},sidebar:"componentsSidebar",previous:{title:"UserMenuAccount",permalink:"/ui5-webcomponents/nightly/components/fiori/UserMenuAccount"},next:{title:"FilterItem",permalink:"/ui5-webcomponents/nightly/components/fiori/FilterItem"}},c={},h=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"text",id:"text",level:3},{value:"additionalText",id:"additionaltext",level:3},{value:"icon",id:"icon",level:3},{value:"disabled",id:"disabled",level:3},{value:"loading",id:"loading",level:3},{value:"loadingDelay",id:"loadingdelay",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"tooltip",id:"tooltip",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"type",id:"type",level:3},{value:"navigated",id:"navigated",level:3},{value:"highlight",id:"highlight",level:3},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"endContent",id:"endcontent",level:3},{value:"deleteButton",id:"deletebutton",level:3},{value:"Events",id:"events",level:2},{value:"before-open",id:"before-open",level:3},{value:"open",id:"open",level:3},{value:"before-close",id:"before-close",level:3},{value:"close",id:"close",level:3},{value:"detail-click",id:"detail-click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"The following entity is available under an experimental flag and its API and behavior are subject to change."})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ui5-user-menu-item"})," is the item to use inside a ",(0,n.jsx)(s.code,{children:"ui5-user-menu"}),".\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items."]}),"\n",(0,n.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ui5-user-menu-item"})," represents a node in a ",(0,n.jsx)(s.code,{children:"ui5-user-menu"}),". The user menu itself is rendered as a list,\nand each ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is represented by a menu item in that menu. Therefore, you should only use\n",(0,n.jsx)(s.code,{children:"ui5-user-menu-item"})," directly in your apps. The ",(0,n.jsx)(s.code,{children:"ui5-menu"})," menu item is internal for the menu, and not intended for public use."]}),"\n",(0,n.jsx)(s.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'import "@ui5/webcomponents-fiori/dist/UserMenuItem.js";'})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"text",children:"text"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the text of the tree item."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string | undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"additionaltext",children:"additionalText"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the ",(0,n.jsx)(s.code,{children:"additionalText"}),", displayed in the end of the menu item.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," The additional text will not be displayed if there are items added in ",(0,n.jsx)(s.code,{children:"items"})," slot or there are components added to ",(0,n.jsx)(s.code,{children:"endContent"})," slot.",(0,n.jsx)("br",{}),"The priority of what will be displayed at the end of the menu item is as follows: sub-menu arrow (if there are items added in ",(0,n.jsx)(s.code,{children:"items"})," slot) -> components added in ",(0,n.jsx)(s.code,{children:"endContent"})," -> text set to ",(0,n.jsx)(s.code,{children:"additionalText"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string | undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"undefined"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.8.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"icon",children:"icon"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Example:"}),(0,n.jsx)("br",{}),"See all the available icons in the ",(0,n.jsx)(s.a,{href:"https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html",children:"Icon Explorer"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string | undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"disabled",children:"disabled"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines whether ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is in disabled state.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," A disabled ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," is noninteractive."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"loading",children:"loading"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," If set to ",(0,n.jsx)(s.code,{children:"true"})," a ",(0,n.jsx)(s.code,{children:"ui5-busy-indicator"})," component will be displayed into the related one to the current ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," sub-menu popover."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.13.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"loadingdelay",children:"loadingDelay"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"1000"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.13.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the accessible ARIA name of the component."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string | undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"undefined"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.7.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"tooltip",children:"tooltip"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the text of the tooltip for the menu item."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string | undefined"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"undefined"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.23.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the additional accessibility attributes that will be applied to the component. The following fields are supported:",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.strong,{children:"ariaKeyShortcuts"}),": Indicated the availability of a keyboard shortcuts defined for the menu item.",(0,n.jsx)("br",{}),"- ",(0,n.jsx)(s.strong,{children:"role"}),': Defines the role of the menu item. If not set, menu item will have default role="menuitem".']})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"ListItemAccessibilityAttributes"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"{}"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"2.1.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"type",children:"type"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the visual indication and behavior of the list items. Available options are ",(0,n.jsx)(s.code,{children:"Active"})," (by default), ",(0,n.jsx)(s.code,{children:"Inactive"}),", ",(0,n.jsx)(s.code,{children:"Detail"})," and ",(0,n.jsx)(s.code,{children:"Navigation"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," When set to ",(0,n.jsx)(s.code,{children:"Active"})," or ",(0,n.jsx)(s.code,{children:"Navigation"}),", the item will provide visual response upon press and hover, while with type ",(0,n.jsx)(s.code,{children:"Inactive"})," and ",(0,n.jsx)(s.code,{children:"Detail"})," - will not."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"Inactive" | "Active" | "Detail" | "Navigation"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'"Active"'})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"navigated",children:"navigated"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["The navigated state of the list item. If set to ",(0,n.jsx)(s.code,{children:"true"}),", a navigation indicator is displayed at the end of the list item."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.10.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"highlight",children:"highlight"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the highlight state of the list items. Available options are: ",(0,n.jsx)(s.code,{children:'"None"'})," (by default), ",(0,n.jsx)(s.code,{children:'"Positive"'}),", ",(0,n.jsx)(s.code,{children:'"Critical"'}),", ",(0,n.jsx)(s.code,{children:'"Information"'})," and ",(0,n.jsx)(s.code,{children:'"Negative"'}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:'"None" | "Positive" | "Critical" | "Negative" | "Information"'})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:'"None"'})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.24"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Defines the selected state of the component."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Default"}),(0,n.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(s.h3,{id:"default",children:"default"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the items of this component.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," Use ",(0,n.jsx)(s.code,{children:"ui5-user-menu-item"})," for the intended design."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Array<UserMenuItem>"})})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"endcontent",children:"endContent"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Defines the components that should be displayed at the end of the menu item.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," It is highly recommended to slot only components of type ",(0,n.jsx)(s.code,{children:"ui5-button"}),",",(0,n.jsx)(s.code,{children:"ui5-link"})," or ",(0,n.jsx)(s.code,{children:"ui5-icon"})," in order to preserve the intended design. If there are components added to this slot, and there is text set in ",(0,n.jsx)(s.code,{children:"additionalText"}),", it will not be displayed. If there are items added to ",(0,n.jsx)(s.code,{children:"items"})," slot, nether ",(0,n.jsx)(s.code,{children:"additionalText"})," nor components added to this slot would be displayed.",(0,n.jsx)("br",{}),"The priority of what will be displayed at the end of the menu item is as follows: sub-menu arrow (if there are items added in ",(0,n.jsx)(s.code,{children:"items"})," slot) -> components added in ",(0,n.jsx)(s.code,{children:"endContent"})," -> text set to ",(0,n.jsx)(s.code,{children:"additionalText"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Array<HTMLElement>"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"2.0.0"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"deletebutton",children:"deleteButton"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:['Defines the delete button, displayed in "Delete" mode. ',(0,n.jsx)(s.strong,{children:"Note:"})," While the slot allows custom buttons, to match design guidelines, please use the ",(0,n.jsx)(s.code,{children:"ui5-button"})," component. ",(0,n.jsx)(s.strong,{children:"Note:"})," When the slot is not present, a built-in delete button will be displayed."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Array<IButton>"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.9.0"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(s.h3,{id:"before-open",children:"before-open"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening.",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Note:"})," Since 1.14.0 the event is also fired before a sub-menu opens."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CustomEvent<MenuBeforeOpenEventDetail>"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Parameters"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"item"}),": ",(0,n.jsx)(s.code,{children:"HTMLElement"}),(0,n.jsx)("br",{}),"The ",(0,n.jsx)(s.code,{children:"ui5-menu-item"})," that triggers opening of the sub-menu or undefined when fired upon root menu opening."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.10.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bubbles"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cancelable"}),(0,n.jsxs)(s.td,{children:["Yes - via ",(0,n.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"open",children:"open"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Fired after the menu is opened."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CustomEvent"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bubbles"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cancelable"}),(0,n.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"before-close",children:"before-close"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CustomEvent<MenuBeforeCloseEventDetail>"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Parameters"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"escPressed"}),": ",(0,n.jsx)(s.code,{children:"boolean"}),(0,n.jsx)("br",{}),"Indicates that ",(0,n.jsx)(s.code,{children:"ESC"})," key has triggered the event."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.10.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bubbles"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cancelable"}),(0,n.jsxs)(s.td,{children:["Yes - via ",(0,n.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"close",children:"close"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsx)(s.td,{children:"Fired after the menu is closed."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CustomEvent"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Since"}),(0,n.jsx)(s.td,{children:"1.10.0"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bubbles"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cancelable"}),(0,n.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"detail-click",children:"detail-click"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Description"}),(0,n.jsxs)(s.td,{children:["Fired when the user clicks on the detail button when type is ",(0,n.jsx)(s.code,{children:"Detail"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"CustomEvent"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Bubbles"}),(0,n.jsx)(s.td,{children:"Yes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cancelable"}),(0,n.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(s.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(s.p,{children:"No CSS parts available for this component."})]})}function x(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},71184:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var n=i(14041);const d={},t=n.createContext(d);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);