import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/UserMenu.css.ts", content: `.ui5-pm-rp{width:20rem}.ui5-pm-rp::part(header),.ui5-pm-rp::part(content),.ui5-pm-rp::part(footer){padding-inline:.5rem}.ui5-pm-rp::part(header){padding-top:1rem;box-shadow:none}.ui5-pm-rp::part(content){padding-top:0;padding-bottom:.5rem}.ui5-pm-rp::part(footer){padding-block:.5rem}.ui5-pm-selected-account{display:flex;align-items:center;flex-direction:column;gap:.5rem;margin-bottom:1rem}.ui5-pm-manage-account-btn{margin-top:.5rem}.ui5-pm-other-accounts{margin-bottom:1rem}.ui5-pm-other-accounts::part(content){padding:0}.ui5-pm-other-accounts-content{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:1rem;padding-block:1rem}.ui5-user-menu-account-header{display:flex;flex:1;justify-content:space-between;align-items:center}.ui5-pm-footer{display:flex;flex:1;justify-content:flex-end;align-items:center}
` };
export default styleData;
//# sourceMappingURL=UserMenu.css.js.map