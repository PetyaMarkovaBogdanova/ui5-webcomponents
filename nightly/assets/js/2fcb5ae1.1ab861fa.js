"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1944],{48887:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>j,frontMatter:()=>h,metadata:()=>x,toc:()=>w});var n=l(31085),i=l(71184);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table id="table">\n\t\t\t<ui5-table-growing id="growing" type="Button" slot="features"></ui5-table-growing>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol">Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="weightCol">Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="priceCol">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\t\t\t<ui5-table-row row-key="0">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="1">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="2">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e',a='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableGrowing.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\n\nconst MAX_GROW = 3;\n\nconst table = document.getElementById("table");\nconst growing = document.getElementById("growing");\n\nlet counter = 0;\n\ngrowing.addEventListener("load-more", () => {\n\tfor (let i = 0; i < 2; i++) {\n\t\tconst newRow = document.createElement("ui5-table-row");\n\t\tnewRow.setAttribute("key", table.rows.length + i);\n\t\tnewRow.innerHTML = `\n\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic ${18 + table.rows.length + i}</b><br>HT-100${2 + table.rows.length + i}</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t`;\n\t\ttable.appendChild(newRow);\n\t}\n\n\tcounter++;\n\tif (counter >= MAX_GROW) {\n\t\tgrowing.disabled = true;\n\t\treturn;\n\t}\n});\n';function r(e){const t={code:"code",p:"p",...(0,i.R)(),...e.components},{Editor:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["By setting the type to ",(0,n.jsx)(t.code,{children:"Button"}),", a dedicated growing button will be rendered.\nYou can customize the text via ",(0,n.jsx)(t.code,{children:"growingText"})," and ",(0,n.jsx)(t.code,{children:"growingSubText"}),"."]}),"\n",(0,n.jsx)(l,{html:o,js:a})]})}function s(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section" style="height: 100px; overflow: auto;">\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table id="table">\n\t\t\t<ui5-table-growing id="growing" type="Scroll" slot="features"></ui5-table-growing>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol">Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="weightCol">Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="priceCol">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\t\t\t<ui5-table-row row-key="0">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="1">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="2">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e',d='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableGrowing.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Input.js";\n\nconst MAX_GROW = 20;\n\nconst table = document.getElementById("table");\nconst growing = document.getElementById("growing");\n\nlet counter = 0;\n\ngrowing.addEventListener("load-more", () => {\n\tfor (let i = 0; i < 5; i++) {\n\t\tconst newRow = document.createElement("ui5-table-row");\n\t\tnewRow.setAttribute("key", table.rows.length + i);\n\t\tnewRow.innerHTML = `\n\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic ${18 + table.rows.length + i}</b><br>HT-100${2 + table.rows.length + i}</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t`;\n\t\ttable.appendChild(newRow);\n\t}\n\n\tcounter++;\n\tif (counter >= MAX_GROW) {\n\t\tgrowing.disabled = true;\n\t\treturn;\n\t}\n});\n';function b(e){const t={code:"code",p:"p",...(0,i.R)(),...e.components},{Editor:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["By setting the type to ",(0,n.jsx)(t.code,{children:"Scroll"}),", the table will fire the ",(0,n.jsx)(t.code,{children:"load-more"})," event, once you've reached the end of the table."]}),"\n",(0,n.jsx)(t.p,{children:"If the table is not scrollable, a growing button is rendered instead. The button will disappear once the table is\nscrollable."}),"\n",(0,n.jsx)(l,{html:c,js:d})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}const h={slug:"../../TableGrowing",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-growing",ui5_since:"2.0.0"},p=void 0,x={id:"components/main/Table/TableGrowing",title:"TableGrowing",description:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.",source:"@site/docs/components/main/Table/TableGrowing.mdx",sourceDirName:"components/main/Table",slug:"/components/TableGrowing",permalink:"/ui5-webcomponents/nightly/components/TableGrowing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableGrowing",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-growing",ui5_since:"2.0.0"},sidebar:"componentsSidebar",previous:{title:"TableCell",permalink:"/ui5-webcomponents/nightly/components/TableCell"},next:{title:"TableHeaderCell",permalink:"/ui5-webcomponents/nightly/components/TableHeaderCell"}},g={},w=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"growingText",id:"growingtext",level:3},{value:"growingSubText",id:"growingsubtext",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"load-more",id:"load-more",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"Growing with a Button",id:"growing-with-a-button",level:2},{value:"Growing with scrolling",id:"growing-with-scrolling",level:2}];function m(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change."})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-growing"})," component is used inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," to add a growing/data loading functionalities\nto the table."]}),"\n",(0,n.jsx)(t.p,{children:"The component offers two options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Button - a More button is displayed, clicking it will load more data."}),"\n",(0,n.jsx)(t.li,{children:"Scroll - additional data is loaded automatically when the user scrolls to the end of the table."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-growing"})," component is only used inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," component as a feature.\nIt has to be slotted inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," in the ",(0,n.jsx)(t.code,{children:"features"})," slot.\nThe component is not intended to be used as a standalone component."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<ui5-table>\n\t<ui5-table-growing type="Button" growing-text="More" slot="features"></ui5-table-growing>\n</ui5-table>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableGrowing.js";'})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"type",children:"type"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the mode of the ",(0,n.jsx)("code",{children:"ui5-table"})," growing.",(0,n.jsx)("br",{}),"Available options are:",(0,n.jsx)("br",{}),"Button - Shows a More button at the bottom of the table, pressing it will load more rows.",(0,n.jsx)("br",{}),"Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:'"Button" | "Scroll"'})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:'"Button"'})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"growingtext",children:"growingText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the text that will be displayed inside the growing button. Has no effect when type is set to ",(0,n.jsx)(t.code,{children:"Scroll"}),".",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"Note:"})," When not provided and the type is set to Button, a default text is displayed, corresponding to the current language."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string | undefined"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"growingsubtext",children:"growingSubText"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the text that will be displayed below the ",(0,n.jsx)(t.code,{children:"growingText"})," inside the growing button. Has no effect when type is set to Scroll."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string | undefined"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.p,{children:"No slots available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"load-more",children:"load-more"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Fired when the growing button is pressed or the user scrolls to the end of the table."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bubbles"}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cancelable"}),(0,n.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"growing-with-a-button",children:"Growing with a Button"}),"\n",(0,n.jsx)(s,{}),"\n",(0,n.jsx)(t.h2,{id:"growing-with-scrolling",children:"Growing with scrolling"}),"\n",(0,n.jsx)(u,{})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},71184:(e,t,l)=>{l.d(t,{R:()=>a,x:()=>r});var n=l(14041);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);