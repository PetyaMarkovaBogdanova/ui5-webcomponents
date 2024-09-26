import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/TableCellBase.css.ts", content: `:host{display:flex;flex-wrap:wrap;align-content:var(--_ui5-v2-3-0-rc-0_table_cell_valign);min-width:var(--_ui5-v2-3-0-rc-0_table_cell_min_width);max-width:100%;overflow:clip;overflow-clip-margin:content-box;padding:var(--_ui5-v2-3-0-rc-0_table_cell_padding);box-sizing:border-box}:host(:focus){outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth))}:host(#selection-cell){width:auto;min-width:auto;background-color:inherit}:host([fixed]){position:sticky;z-index:1}
` };
export default styleData;
//# sourceMappingURL=TableCellBase.css.js.map