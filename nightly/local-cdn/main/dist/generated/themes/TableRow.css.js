import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TableRow.css.ts", content: `:host{background:var(--sapList_Background)}:host([aria-selected=true]){background-color:var(--sapList_SelectionBackgroundColor);border-bottom:var(--sapList_BorderWidth) solid var(--sapList_SelectionBorderColor)}:host([_interactive]){cursor:pointer}@media (hover: hover){:host([_interactive]:hover){background:var(--sapList_Hover_Background)}:host([_interactive][aria-selected=true]:hover){background:var(--sapList_Hover_SelectionBackground)}}:host([_interactive]:active),:host([_interactive][_active]),:host([_interactive][aria-selected=true]:active),:host([_interactive][aria-selected=true][_active]){background:var(--sapList_Active_Background)}#popin-cell{align-content:initial;flex-direction:column;grid-column:1 / -1}#navigated-cell{position:relative;overflow:visible;grid-row:span 2;min-width:0;padding:0;position:sticky;right:0}:dir(rtl)#navigated-cell{left:0}:host([navigated]) #navigated{position:absolute;inset:0;background-color:var(--sapList_SelectionBorderColor)}:host([tabindex]:focus) #navigated{transform:translate(calc(var(--_ui5-v2-5-0-rc-1_table_navigated_cell_width) * -1));bottom:2px;top:3px}:host([tabindex]:focus) #navigated:dir(rtl){transform:translate(var(--_ui5-v2-5-0-rc-1_table_navigated_cell_width))}:host([navigated]) #popin-cell{grid-column:1 / -2}
` };
export default styleData;
//# sourceMappingURL=TableRow.css.js.map