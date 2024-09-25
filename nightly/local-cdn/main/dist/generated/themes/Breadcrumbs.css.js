import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/Breadcrumbs.css.ts", content: `:host(:not([hidden])){display:block;width:100%}.ui5-breadcrumbs-root{white-space:nowrap;outline:none;margin:var(--_ui5-v2-3-0-rc-0_breadcrumbs_margin)}.ui5-breadcrumbs-root>ol{margin:0;padding:0;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:flex}.ui5-breadcrumbs-root>ol>li{display:inline}.ui5-breadcrumbs-current-location{min-width:1%;flex:1 1 auto;font-size:0;align-self:center}.ui5-breadcrumbs-current-location>span:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-3-0-rc-0_breadcrumbs_current_location_focus_border_radius)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper[hidden]{display:none}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]{width:var(--sapFontSize);height:var(--sapFontSize);padding-left:.675rem;vertical-align:text-top;color:var(--sapLinkColor)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]{color:var(--_ui5-v2-3-0-rc-0_link_focus_color)}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-icon]:before{content:"...";vertical-align:middle;position:absolute;left:0;bottom:0}.ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link][focused] [ui5-icon]:after,.ui5-breadcrumbs-dropdown-arrow-link-wrapper:hover [ui5-icon]:after{content:"";position:absolute;border-bottom:.0625rem solid;inset:0 0 1px}.ui5-breadcrumbs-popover-footer{display:flex;justify-content:flex-end;width:100%}.ui5-breadcrumbs-separator:after{content:"/";padding:0 .25rem;cursor:auto;color:var(--sapContent_LabelColor);display:inline-block;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}:host([separators="DoubleSlash"]) .ui5-breadcrumbs-separator:after{content:"//"}:host([separators="BackSlash"]) .ui5-breadcrumbs-separator:after{content:"\\\\"}:host([separators="DoubleBackSlash"]) .ui5-breadcrumbs-separator:after{content:"\\\\\\\\"}:host([separators="GreaterThan"]) .ui5-breadcrumbs-separator:after{content:">"}:host([separators="DoubleGreaterThan"]) .ui5-breadcrumbs-separator:after{content:">>"}
` };
export default styleData;
//# sourceMappingURL=Breadcrumbs.css.js.map