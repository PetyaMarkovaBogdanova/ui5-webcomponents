import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/SideNavigation.css.ts", content: `:host(:not([hidden])){display:inline-block;height:100%;min-width:var(--_ui5-v2-5-0-rc-1_side_navigation_width);width:var(--_ui5-v2-5-0-rc-1_side_navigation_width);max-width:100%;transition:width .3s,min-width .3s;box-shadow:var(--_ui5-v2-5-0-rc-1_side_navigation_box_shadow);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);background:var(--sapList_Background)}:host([collapsed]){min-width:var(--_ui5-v2-5-0-rc-1_side_navigation_collapsed_width);width:var(--_ui5-v2-5-0-rc-1_side_navigation_collapsed_width)}.ui5-sn-root{height:100%;display:flex;flex-direction:column;box-sizing:border-box;border-radius:inherit;border-inline-end:var(--_ui5-v2-5-0-rc-1_side_navigation_border_right)}.ui5-sn-spacer{margin:var(--_ui5-v2-5-0-rc-1_side_navigation_navigation_separator_margin);height:var(--_ui5-v2-5-0-rc-1_side_navigation_navigation_separator_height);min-height:var(--_ui5-v2-5-0-rc-1_side_navigation_navigation_separator_height);background-color:var(--_ui5-v2-5-0-rc-1_side_navigation_navigation_separator_background_color);border-radius:var(--_ui5-v2-5-0-rc-1_side_navigation_navigation_separator_radius)}.ui5-sn-collapsed .ui5-sn-spacer{margin:var(--_ui5-v2-5-0-rc-1_side_navigation_navigation_separator_margin_collapsed)}.ui5-sn-flexible{display:flex;flex-direction:column;flex:1;min-height:0;position:relative;box-sizing:border-box}.ui5-sn-fixed{position:relative}.ui5-sn-list{margin:0;padding:var(--_ui5-v2-5-0-rc-1_side_navigation_padding);list-style:none;box-sizing:border-box;overflow:hidden auto}.ui5-sn-collapsed .ui5-sn-list{overflow:visible;display:flex;flex-direction:column}:host([in-popover]) .ui5-sn-list{padding:var(--_ui5-v2-5-0-rc-1_side_navigation_parent_popup_padding)}.ui5-sn-item-overflow{margin-top:auto}
` };
export default styleData;
//# sourceMappingURL=SideNavigation.css.js.map