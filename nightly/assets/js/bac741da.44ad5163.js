"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[9018],{70503:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>b,contentTitle:()=>a,default:()=>j,frontMatter:()=>o,metadata:()=>h,toc:()=>u});var n=l(31085),i=l(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table id="table">\n\t\t\t<ui5-table-selection-single id="selection" slot="features" selected="Row2"></ui5-table-selection-single>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-header-row slot="headerRow">\n\t\t\t\t<ui5-table-header-cell id="produtCol" width="1fr"><span>Product</span></ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="supplierCol" width="1fr">Supplier</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="dimensionsCol" width="1fr">Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="weightCol" width="1fr">Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell id="priceCol" width="1fr" horizontal-align="End">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\t\t\t<ui5-table-row row-key="Row1">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-labe><b>956</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="Row2">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t\t<ui5-table-row row-key="Row3">\n\t\t\t\t<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>\n\t\t\t\t<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',d='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableRow.js";\nimport "@ui5/webcomponents/dist/TableCell.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/TableSelectionSingle.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nconst selectionFeature = document.getElementById("selection");\nselectionFeature.addEventListener("change", (e) => {\n\tconsole.log("Selected key", selectionFeature.selected);\n\tconsole.log("Selected row", selectionFeature.getRowByKey(selectionFeature.selected));\n})';function r(e){const t={code:"code",p:"p",...(0,i.R)(),...e.components},{Editor:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Enable single-selection in your table by adding the ",(0,n.jsx)(t.code,{children:"<ui5-table-selection-single>"})," feature."]}),"\n",(0,n.jsxs)(t.p,{children:["The selection features of the table is key-based, therefore each row requires a ",(0,n.jsx)(t.code,{children:"row-key"})," attribute to be uniquely identified."]}),"\n",(0,n.jsx)(l,{html:s,js:d})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}const o={slug:"../../TableSelectionSingle",sidebar_class_name:"expComponentBadge",ui5_tag_name:"ui5-table-selection-single",ui5_since:"2.8.0"},a=void 0,h={id:"components/main/Table/TableSelectionSingle",title:"TableSelectionSingle",description:"The ui5-table-selection-single component is used inside the ui5-table to add single selection capabilities to the ui5-table.",source:"@site/docs/components/main/Table/TableSelectionSingle.mdx",sourceDirName:"components/main/Table",slug:"/components/TableSelectionSingle",permalink:"/ui5-webcomponents/nightly/components/TableSelectionSingle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableSelectionSingle",sidebar_class_name:"expComponentBadge",ui5_tag_name:"ui5-table-selection-single",ui5_since:"2.8.0"},sidebar:"componentsSidebar",previous:{title:"TableSelectionMulti",permalink:"/ui5-webcomponents/nightly/components/TableSelectionMulti"},next:{title:"TableVirtualizer",permalink:"/ui5-webcomponents/nightly/components/TableVirtualizer"}},b={},u=[{value:"Usage",id:"usage",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"selected",id:"selected",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3},{value:"Methods",id:"methods",level:2},{value:"getSelectedRow",id:"getselectedrow",level:3},{value:"getRowKey",id:"getrowkey",level:3},{value:"getRowByKey",id:"getrowbykey",level:3},{value:"isSelected",id:"isselected",level:3},{value:"setSelected",id:"setselected",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"Basic Sample",id:"basic-sample",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-selection-single"})," component is used inside the ",(0,n.jsx)(t.code,{children:"ui5-table"})," to add single selection capabilities to the ",(0,n.jsx)(t.code,{children:"ui5-table"}),".\nSince selection is key-based, each ",(0,n.jsx)(t.code,{children:"ui5-table-row"})," must define a unique ",(0,n.jsx)(t.code,{children:"row-key"})," property."]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ui5-table-selection-single"})," component is a feature designed exclusively for use within the ",(0,n.jsx)(t.code,{children:"ui5-table"})," component.\nIt must be placed inside the ",(0,n.jsx)(t.code,{children:"features"})," slot of ",(0,n.jsx)(t.code,{children:"ui5-table"}),".\nThis component is not intended for standalone use."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<ui5-table>\n\t<ui5-table-selection-single slot="features" selected="Row1"></ui5-table-selection-single>\n</ui5-table>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableSelectionSingle.js";'})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"selected",children:"selected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsxs)(t.td,{children:["Defines the ",(0,n.jsx)(t.code,{children:"row-key"})," value of the selected row."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string | undefined"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Default"}),(0,n.jsx)(t.td,{children:"undefined"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsx)(t.p,{children:"No slots available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"change",children:"change"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Fired when the selection is changed by user interaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CustomEvent"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bubbles"}),(0,n.jsx)(t.td,{children:"No"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cancelable"}),(0,n.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"getselectedrow",children:"getSelectedRow"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Returns the selected row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Return type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TableRow | undefined"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"getrowkey",children:"getRowKey"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Returns the unique key associated with the table row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Return type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"row"}),": ",(0,n.jsx)(t.code,{children:"TableRow"}),(0,n.jsx)("br",{}),"The row instance"]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"getrowbykey",children:"getRowByKey"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Returns the table row instance for the given row key."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Return type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TableRow | undefined"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"rowKey"}),": ",(0,n.jsx)(t.code,{children:"string"}),(0,n.jsx)("br",{}),"The row key"]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"isselected",children:"isSelected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Determines whether the specified table row is currently selected."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Return type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"boolean"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"row"}),": ",(0,n.jsx)(t.code,{children:"TableRowBase"}),(0,n.jsx)("br",{}),"The row instance"]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"setselected",children:"setSelected"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Sets the selected state of the specified table row."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Return type"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"void"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"row"}),": ",(0,n.jsx)(t.code,{children:"TableRowBase"}),(0,n.jsx)("br",{}),"The row instance",(0,n.jsx)("br",{}),(0,n.jsx)(t.strong,{children:"selected"}),": ",(0,n.jsx)(t.code,{children:"boolean"}),(0,n.jsx)("br",{}),"Whether the row is selected"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,n.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,n.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,n.jsx)(c,{})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},71184:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var n=l(14041);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);