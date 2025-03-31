"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1688],{6096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>j,default:()=>g,frontMatter:()=>x,metadata:()=>m,toc:()=>b});var s=n(31085),i=n(71184);const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<meta charset="UTF-8">\n\t<title>User Menu sample</title>\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<script data-ui5-config type="application/json">\n\t\t{\n\t\t\t"rtl": false\n\t\t}\n\n\t<\/script>\n\n\t<style>\n\t\tbody {\n\t\t\theight: 600px;\n\t\t}\n\t</style>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n\x3c!-- playground-fold-end --\x3e\n<ui5-shellbar id="shellbar" primary-title="Corporate Portal">\n\t<ui5-avatar slot="profile">\n\t\t<img src="../assets/images/avatars/man_avatar_3.png"/>\n\t</ui5-avatar>\n\t<img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n</ui5-shellbar>\n<ui5-user-menu id="userMenu" opener="btnOpenUserMenu">\n\t<ui5-user-menu-account slot="accounts"\n\t\t\t\t\t\t   avatar-src="../assets/images/avatars/man_avatar_3.png"\n\t\t\t\t\t\t   title-text="Alaina Chevalier"\n\t\t\t\t\t\t   subtitle-text="aliana.chevalier@sap.com"\n\t\t\t\t\t\t   description="Delivery Manager"\n\t\t\t\t\t\t   selected>\n\t</ui5-user-menu-account>\n\t<ui5-user-menu-item icon="action-settings" text="Setting" data-id="setting"></ui5-user-menu-item>\n\t<ui5-user-menu-item icon="official-service" text="Legal Information">\n\t\t<ui5-user-menu-item text="Terms of Use" data-id="terms-of-use"></ui5-user-menu-item>\n\t\t<ui5-user-menu-item text="Private Policy" data-id="privacy-policy"></ui5-user-menu-item>\n\t</ui5-user-menu-item>\n\t<ui5-user-menu-item icon="message-information" text="About" data-id="about"></ui5-user-menu-item>\n</ui5-user-menu>\n\n\x3c!-- playground-fold --\x3e\n<script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents-fiori/dist/UserMenu.js";\nimport "@ui5/webcomponents-fiori/dist/UserMenuAccount.js";\nimport "@ui5/webcomponents-fiori/dist/UserMenuItem.js";\n\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/globe.js";\nimport "@ui5/webcomponents-icons/dist/collaborate.js";\nimport "@ui5/webcomponents-icons/dist/official-service.js";\nimport "@ui5/webcomponents-icons/dist/private.js";\nimport "@ui5/webcomponents-icons/dist/accelerated.js";\n\nconst shellbar = document.getElementById("shellbar");\nconst menu = document.getElementById("userMenu");\n\nshellbar.addEventListener("ui5-profile-click", (event) => {\n\tmenu.opener = event.detail.targetRef;\n\tmenu.open = true;\n});\n\nmenu.addEventListener("item-click", function (event) {\n\tconst item = event.detail.item.getAttribute("data-id");\n\n\tswitch (item) {\n\t\tcase "setting":\n\t\t\tconsole.log("Open Setting Dialog");\n\t\t\tbreak;\n\t\tcase "privacy-policy":\n\t\t\tconsole.log("Privacy Policy");\n\t\t\tbreak;\n\t\tcase "terms-of-use":\n\t\t\tconsole.log("Terms of Use");\n\t\t\tbreak;\n\t\tcase "account-action1":\n\t\t\tconsole.log("Product-specific account action 1");\n\t\t\tbreak;\n\t\tcase "account-action2":\n\t\t\tconsole.log("Product-specific account action 2");\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tconsole.log("Default");\n\t}\n});\n\nmenu.addEventListener("avatar-click", function () {\n\tconsole.log("Avatar clicked");\n});\n\nmenu.addEventListener("sign-out-click", function (event) {\n\tconsole.log("Sign Out clicked");\n\n\tconst result = prompt("Sign Out", "Are you sure you want to sign out?");\n\tif (result) {\n\t\tmenu.open = false;\n\t}\n\tevent.preventDefault();\n});';function d(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:c,js:r})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\t<meta charset="UTF-8">\n\t<title>User Menu sample</title>\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t<script data-ui5-config type="application/json">\n\t\t{\n\t\t\t"rtl": false\n\t\t}\n\n\t<\/script>\n\n\t<style>\n\t\tbody {\n\t\t\theight: 600px;\n\t\t}\n\t</style>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n\x3c!-- playground-fold-end --\x3e\n\n<ui5-shellbar id="shellbar" primary-title="Corporate Portal">\n\t<ui5-avatar slot="profile">\n\t\t<img src="../assets/images/avatars/man_avatar_3.png"/>\n\t</ui5-avatar>\n\t<img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n</ui5-shellbar>\n<ui5-user-menu id="userMenu" show-manage-account show-other-accounts show-edit-accounts show-edit-button>\n\t<ui5-user-menu-account slot="accounts"\n\t\t\t\t\t\t   avatar-src="../assets/images/avatars/man_avatar_3.png"\n\t\t\t\t\t\t   title-text="Alain Chevalier 1"\n\t\t\t\t\t\t   subtitle-text="alian.chevalier@sap.com"\n\t\t\t\t\t\t   description="Delivery Manager, SAP SE"\n\t\t\t\t\t\t   selected>\n\t</ui5-user-menu-account>\n\t<ui5-user-menu-account slot="accounts"\n\t\t\t\t\t\t   avatar-initials="SD"\n\t\t\t\t\t\t   title-text="John Walker"\n\t\t\t\t\t\t   subtitle-text="john.walker@sap.com"\n\t\t\t\t\t\t   description="Project Manager">\n\t</ui5-user-menu-account>\n\t<ui5-user-menu-account slot="accounts"\n\t\t\t\t\t\t   avatar-initials="DS"\n\t\t\t\t\t\t   title-text="David Wilson"\n\t\t\t\t\t\t   subtitle-text="davud,wilson@sap.com"\n\t\t\t\t\t\t   description="Project Manager">\n\t</ui5-user-menu-account>\n\t<ui5-user-menu-item icon="action-settings" text="Setting" data-id="setting"></ui5-user-menu-item>\n\t<ui5-user-menu-item icon="official-service" text="Legal Information">\n\t\t<ui5-user-menu-item text="Terms of Use" data-id="terms-of-use"></ui5-user-menu-item>\n\t\t<ui5-user-menu-item text="Private Policy" data-id="privacy-policy"></ui5-user-menu-item>\n\t</ui5-user-menu-item>\n\t<ui5-user-menu-item icon="message-information" text="About" data-id="about"></ui5-user-menu-item>\n</ui5-user-menu>\n\n\x3c!-- playground-fold --\x3e\n<script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents-fiori/dist/UserMenu.js";\nimport "@ui5/webcomponents-fiori/dist/UserMenuAccount.js";\nimport "@ui5/webcomponents-fiori/dist/UserMenuItem.js";\n\nimport "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/globe.js";\nimport "@ui5/webcomponents-icons/dist/collaborate.js";\nimport "@ui5/webcomponents-icons/dist/official-service.js";\nimport "@ui5/webcomponents-icons/dist/private.js";\nimport "@ui5/webcomponents-icons/dist/accelerated.js";\n\nconst shellbar = document.getElementById("shellbar");\nconst menu = document.getElementById("userMenu");\n\n\n\nshellbar.addEventListener("ui5-profile-click", (event) => {\n\tmenu.opener = event.detail.targetRef;\n\tmenu.open = true;\n});\n\nmenu.addEventListener("item-click", function (event) {\n\tconst item = event.detail.item.getAttribute("data-id");\n\n\tswitch (item) {\n\t\tcase "setting":\n\t\t\tconsole.log("Open Setting Dialog");\n\t\t\tbreak;\n\t\tcase "privacy-policy":\n\t\t\tconsole.log("Privacy Policy");\n\t\t\tbreak;\n\t\tcase "terms-of-use":\n\t\t\tconsole.log("Terms of Use");\n\t\t\tbreak;\n\t\tcase "account-action1":\n\t\t\tconsole.log("Product-specific account action 1");\n\t\t\tbreak;\n\t\tcase "account-action2":\n\t\t\tconsole.log("Product-specific account action 2");\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tconsole.log("Default");\n\t}\n});\n\nmenu.addEventListener("avatar-click", function () {\n\tconsole.log("Avatar clicked");\n});\n\nmenu.addEventListener("manage-account-click", function () {\n\tconsole.log("Manage account clicked");\n});\n\nmenu.addEventListener("edit-accounts-click", function () {\n\tconsole.log("Edit accounts clicked");\n});\n\nmenu.addEventListener("change-account", function (event) {\n\tconsole.log("Change account account", event.detail);\n\tevent.detail.selectedAccount.loading = true;\n\tsetTimeout(function(){\n\t\tevent.detail.selectedAccount.loading = false;\n\t}, 1000);\n});\n\nmenu.addEventListener("sign-out-click", function (event) {\n\tconsole.log("Sign Out clicked");\n\n\tconst result = prompt("Sign Out", "Are you sure you want to sign out?");\n\tif (result) {\n\t\tmenu.open = false;\n\t}\n\tevent.preventDefault();\n});';function h(e){const{Editor:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:l,js:a})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}const x={slug:"../UserMenu",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-user-menu",ui5_since:"2.5.0"},j=void 0,m={id:"components/fiori/UserMenu/UserMenu",title:"UserMenu",description:"The following entity is available under an experimental flag and its API and behavior are subject to change.",source:"@site/docs/components/fiori/UserMenu/UserMenu.mdx",sourceDirName:"components/fiori/UserMenu",slug:"/components/fiori/UserMenu",permalink:"/ui5-webcomponents/nightly/components/fiori/UserMenu",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../UserMenu",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-user-menu",ui5_since:"2.5.0"},sidebar:"componentsSidebar",previous:{title:"UploadCollectionItem",permalink:"/ui5-webcomponents/nightly/components/fiori/UploadCollectionItem"},next:{title:"UserMenuAccount",permalink:"/ui5-webcomponents/nightly/components/fiori/UserMenuAccount"}},p={},b=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"open",id:"open",level:3},{value:"opener",id:"opener",level:3},{value:"showManageAccount",id:"showmanageaccount",level:3},{value:"showOtherAccounts",id:"showotheraccounts",level:3},{value:"showEditAccounts",id:"showeditaccounts",level:3},{value:"showEditButton",id:"showeditbutton",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"accounts",id:"accounts",level:3},{value:"Events",id:"events",level:2},{value:"avatar-click",id:"avatar-click",level:3},{value:"manage-account-click",id:"manage-account-click",level:3},{value:"edit-accounts-click",id:"edit-accounts-click",level:3},{value:"change-account",id:"change-account",level:3},{value:"item-click",id:"item-click",level:3},{value:"open",id:"open-1",level:3},{value:"close",id:"close",level:3},{value:"sign-out-click",id:"sign-out-click",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2}];function v(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The following entity is available under an experimental flag and its API and behavior are subject to change."})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ui5-user-menu"})," is an SAP Fiori specific web component that is used in ",(0,s.jsx)(t.code,{children:"ui5-shellbar"}),"\nand allows the user to easily see information and settings for the current user and all other logged in accounts."]}),"\n",(0,s.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/UserMenu.js";'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents-fiori/dist/UserMenuItem.js";'})," (for ",(0,s.jsx)(t.code,{children:"ui5-user-menu-item"}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"open",children:"open"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines if the User Menu is opened."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"opener",children:"opener"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the ID or DOM Reference of the element at which the user menu is shown. When using this attribute in a declarative way, you must only use the ",(0,s.jsx)(t.code,{children:"id"})," (as a string) of the element at which you want to show the popover. You can only set the ",(0,s.jsx)(t.code,{children:"opener"})," attribute to a DOM Reference when using JavaScript."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"HTMLElement | string | undefined"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"showmanageaccount",children:"showManageAccount"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines if the User Menu shows the Manage Account option."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"showotheraccounts",children:"showOtherAccounts"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines if the User Menu shows the Other Accounts option."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"showeditaccounts",children:"showEditAccounts"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines if the User Menu shows the Edit Accounts option."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"showeditbutton",children:"showEditButton"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines if the User menu shows edit button."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"2.7.0"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines the menu items."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<UserMenuItem>"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"accounts",children:"accounts"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the user accounts.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," If one item is used, it will be shown as the selected one. If more than one item is used, the first one will be shown as selected unless there is an item with ",(0,s.jsx)(t.code,{children:"selected"})," property set to ",(0,s.jsx)(t.code,{children:"true"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<UserMenuAccount>"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(t.h3,{id:"avatar-click",children:"avatar-click"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when the account avatar is selected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"manage-account-click",children:"manage-account-click"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:'Fired when the "Manage Account" button is selected.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"edit-accounts-click",children:"edit-accounts-click"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:'Fired when the "Edit Accounts" button is selected.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"change-account",children:"change-account"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when the account is switched to a different one."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent<UserMenuOtherAccountClickEventDetail>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parameters"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"prevSelectedAccount"}),": ",(0,s.jsx)(t.code,{children:"UserMenuAccount"}),(0,s.jsx)("br",{}),"The previously selected account.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"selectedAccount"}),": ",(0,s.jsx)(t.code,{children:"UserMenuAccount"}),(0,s.jsx)("br",{}),"The selected account."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsxs)(t.td,{children:["Yes - via ",(0,s.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"item-click",children:"item-click"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when a menu item is selected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent<UserMenuItemClickEventDetail>"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parameters"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"item"}),": ",(0,s.jsx)(t.code,{children:"UserMenuItem"}),(0,s.jsx)("br",{}),"The selected ",(0,s.jsx)(t.code,{children:"user menu item"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsxs)(t.td,{children:["Yes - via ",(0,s.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"open-1",children:"open"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when a user menu is open."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"2.6.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"close",children:"close"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Fired when a user menu is close."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"2.6.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"sign-out-click",children:"sign-out-click"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:'Fired when the "Sign Out" button is selected.'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CustomEvent"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Since"}),(0,s.jsx)(t.td,{children:"2.6.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Bubbles"}),(0,s.jsx)(t.td,{children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cancelable"}),(0,s.jsxs)(t.td,{children:["Yes - via ",(0,s.jsx)("code",{children:"preventDefault()"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,s.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,s.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,s.jsx)(u,{})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(14041);const i={},c=s.createContext(i);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);