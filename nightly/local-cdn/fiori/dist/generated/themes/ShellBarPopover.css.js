import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/ShellBarPopover.css.ts", content: `.ui5-shellbar-menu-popover::part(content),.ui5-shellbar-overflow-popover::part(content){padding:0}.ui5-shellbar-overflow-popover [ui5-li]::part(icon){color:var(--sapList_TextColor)}.ui5-shellbar-overflow-popover [ui5-li]::part(title){font-size:var(--sapFontSize)}.ui5-shellbar-overflow-popover [ui5-li]:after{position:relative;width:fit-content;height:1rem;min-width:1rem;background:var(--sapContent_BadgeBackground);border:var(--_ui5-v2-4-0-rc-3_shellbar_button_badge_border);color:var(--sapContent_BadgeTextColor);bottom:calc(100% + .0625rem);left:1.25rem;padding:0 .3125rem;border-radius:.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);z-index:2;box-sizing:border-box;pointer-events:none}.ui5-shellbar-overflow-popover [ui5-li][data-count]:after{content:attr(data-count)}
` };
export default styleData;
//# sourceMappingURL=ShellBarPopover.css.js.map