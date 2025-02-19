"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7755],{60898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>b,toc:()=>h});var i=n(31085),o=n(71184);const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\n<ui5-table id="table" row-action-count="1">\n\x3c!-- playground-fold --\x3e\n\t<ui5-table-header-row slot="headerRow">\n\t\t<ui5-table-header-cell>Product</ui5-table-header-cell>\n\t\t<ui5-table-header-cell>Supplier</ui5-table-header-cell>\n\t\t<ui5-table-header-cell horizontal-align="End">Price</ui5-table-header-cell>\n\t</ui5-table-header-row>\n\t<ui5-table-row row-key="1">\n\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br><a href="#">HT-1000</a></ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label><b>899.99</b> EUR</ui5-label></ui5-table-cell>\n\t\t<ui5-table-row-action-navigation slot="actions" interactive></ui5-table-row-action-navigation>\n\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t<ui5-table-row row-key="2" interactive>\n\t\t<ui5-table-cell><ui5-label><b>Astro Laptop 216</b><br><a href="#">HT-1251</a></ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label><b>679.99</b> EUR</ui5-label></ui5-table-cell>\n\t\t<ui5-table-row-action-navigation slot="actions"></ui5-table-row-action-navigation>\n\t</ui5-table-row>\n\x3c!-- playground-fold --\x3e\n\t<ui5-table-row row-key="3" navigated>\n\t\t<ui5-table-cell><ui5-label><b>Benda Laptop 1408</b><br><a href="#">HT-6102</a></ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label>Ultrasonic United</ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label><b>699.99</b> EUR</ui5-label></ui5-table-cell>\n\t\t<ui5-table-row-action-navigation slot="actions" invisible></ui5-table-row-action-navigation>\n\t</ui5-table-row>\n\t<ui5-table-row row-key="4">\n\t\t<ui5-table-cell><ui5-label><b>Broad Screen 22HD</b><br><a href="#">HT-1255</a></ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label>Speaker Experts</ui5-label></ui5-table-cell>\n\t\t<ui5-table-cell><ui5-label><b>399.99</b> EUR</ui5-label></ui5-table-cell>\n\t\t<ui5-table-row-action-navigation slot="actions" interactive></ui5-table-row-action-navigation>\n\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n</ui5-table>\n\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/TableRow.js";\nimport "@ui5/webcomponents/dist/TableCell.js";\nimport "@ui5/webcomponents/dist/TableRowActionNavigation.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nconst table = document.getElementById("table");\ntable.addEventListener("row-action-click", (e) => {\n\tconst row = e.detail.row;\n\tconsole.log(`Navigate action of row ${row.rowKey} is clicked`);\n});';function s(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components},{Editor:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["By default, the ",(0,i.jsx)(t.code,{children:"ui5-table-row-action-navigation"})," component displays a dedicated navigation icon to indicate that a row is navigable. The icon appears on the right side of the row and is the last item to move into the overflow menu. Therefore, if you want to show additional row actions along with the ",(0,i.jsx)(t.code,{children:"ui5-table-row-action-navigation"}),", the ",(0,i.jsx)(t.code,{children:"row-action-count"})," property of the ",(0,i.jsx)(t.code,{children:"ui5-table"})," must be set to at least ",(0,i.jsx)(t.code,{children:"2"}),". This ensures that the ",(0,i.jsx)(t.code,{children:"ui5-table-row-action-navigation"})," component never appears in the overflow menu."]}),"\n",(0,i.jsxs)(t.p,{children:["If the ",(0,i.jsx)(t.code,{children:"interactive"})," property is set to ",(0,i.jsx)(t.code,{children:"true"}),", the navigation icon appears as a button, and clicking it triggers the table\u2019s ",(0,i.jsx)(t.code,{children:"row-action-click"})," event."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"invisible"})," property allows you to hide specific navigation actions. This property is useful for ensuring a consistent layout by displaying the navigation column."]}),"\n",(0,i.jsx)(n,{html:l,js:a})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const r={slug:"../../TableRowActionNavigation",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-row-action-navigation",ui5_since:"2.7.0"},d=void 0,b={id:"components/main/Table/TableRowActionNavigation",title:"TableRowActionNavigation",description:"The ui5-table-row-action-navigation component defines a navigation action for table rows.",source:"@site/docs/components/main/Table/TableRowActionNavigation.mdx",sourceDirName:"components/main/Table",slug:"/components/TableRowActionNavigation",permalink:"/ui5-webcomponents/nightly/components/TableRowActionNavigation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableRowActionNavigation",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-row-action-navigation",ui5_since:"2.7.0"},sidebar:"componentsSidebar",previous:{title:"TableRowAction",permalink:"/ui5-webcomponents/nightly/components/TableRowAction"},next:{title:"TableSelection",permalink:"/ui5-webcomponents/nightly/components/TableSelection"}},u={},h=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"interactive",id:"interactive",level:3},{value:"invisible",id:"invisible",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"Basic Sample",id:"basic-sample",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"ui5-table-row-action-navigation"})," component defines a navigation action for table rows."]}),"\n",(0,i.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableRowActionNavigation.js";'})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"interactive",children:"interactive"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsx)(t.td,{children:"Defines the interactive state of the navigation action."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"invisible",children:"invisible"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Description"}),(0,i.jsxs)(t.td,{children:["Defines the visibility of the row action.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," Invisible row actions still take up space, allowing to hide the action while maintaining its position."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"boolean"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Default"}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(t.p,{children:"No slots available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,i.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,i.jsx)(c,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(14041);const o={},l=i.createContext(o);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);