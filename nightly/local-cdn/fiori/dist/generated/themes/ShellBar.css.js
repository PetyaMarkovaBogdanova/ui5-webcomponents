import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents-fiori", fileName: "themes/ShellBar.css.ts", content: `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}:host{--_ui5-v2-4-0-rc-1_input_placeholder_color: var(--sapShell_InteractiveTextColor);--_ui5-v2-4-0-rc-1_input_border_radius: var(--_ui5-v2-4-0-rc-1_shellbar_input_border_radius);--_ui5-v2-4-0-rc-1_input_focus_border_radius: var(--_ui5-v2-4-0-rc-1_shellbar_input_focus_border_radius);--_ui5-v2-4-0-rc-1_input_background_color: var(--_ui5-v2-4-0-rc-1_shellbar_input_background_color);--_ui5-v2-4-0-rc-1_input_focus_outline_color: var(--_ui5-v2-4-0-rc-1_shellbar_input_focus_outline_color);--_ui5-v2-4-0-rc-1_input_margin_top_bottom: 0}.ui5-shellbar-root{position:relative;display:flex;justify-content:space-between;align-items:center;background:var(--sapShellColor);height:var(--_ui5-v2-4-0-rc-1_shellbar_root_height);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;box-sizing:border-box;box-shadow:inset 0 -.0625rem 0 0 var(--sapShell_BorderColor)}.ui5-shellbar-menu-button,.ui5-shellbar-button,.ui5-shellbar-image-button,::slotted([ui5-toggle-button]),::slotted([ui5-button]){height:2.25rem;padding:0;margin-inline-start:.5rem;border:.0625rem solid var(--sapButton_Lite_BorderColor);background:var(--sapButton_Lite_Background);outline-color:var(--_ui5-v2-4-0-rc-1_shellbar_logo_outline_color);color:var(--sapShell_TextColor);box-sizing:border-box;cursor:pointer;border-radius:var(--_ui5-v2-4-0-rc-1_shellbar_button_border_radius);position:relative;font-weight:700;white-space:initial;overflow:initial;text-overflow:initial;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}::slotted([ui5-button][slot="startButton"]){margin-inline-start:0}::slotted([ui5-toggle-button]:hover),::slotted([ui5-button]:hover),.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover,.ui5-shellbar-button:hover,.ui5-shellbar-image-button:hover,::slotted([ui5-button][slot="midContent"]:hover){background:var(--sapShell_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);color:var(--sapShell_TextColor)}::slotted([ui5-toggle-button][slot="assistant"][pressed]),::slotted([ui5-toggle-button][slot="assistant"][pressed]:hover:not([active])){color:var(--sapShell_Assistant_ForegroundColor)}::slotted([ui5-toggle-button][active]),::slotted([ui5-button][active]),.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active,.ui5-shellbar-button[active],.ui5-shellbar-image-button:active{background:var(--sapShell_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--_ui5-v2-4-0-rc-1_shellbar_button_active_color)}:host([desktop]) .ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus-visible{outline:var(--_ui5-v2-4-0-rc-1_shellbar_logo_outline);outline-offset:var(--_ui5-v2-4-0-rc-1_shellbar_outline_offset)}slot[name=profile]{min-width:0}::slotted([ui5-avatar][slot="profile"]){min-width:0;width:2rem;height:2rem;min-height:2rem;padding:.25rem;pointer-events:none}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive::-moz-focus-inner{border:none}.ui5-shellbar-menu-button-arrow,.ui5-shellbar-menu-button-title,.ui5-shellbar-title{display:inline-block;font-family:"72override",var(--sapFontFamily);margin:0;font-size:var(--_ui5-v2-4-0-rc-1_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_TextColor)}:host(:not([primary-title])) .ui5-shellbar-menu-button{min-width:2.25rem;justify-content:center}.ui5-shellbar-secondary-title{display:inline-block;font-size:var(--sapFontSmallSize);color:var(--sapShell_TextColor);font-weight:400;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:0;text-align:start}.ui5-shellbar-headings{display:flex;flex-direction:column;justify-content:center;height:100%;overflow:hidden}.ui5-shellbar-menu-button--interactive .ui5-shellbar-menu-button-arrow{margin-inline-start:.375rem}.ui5-shellbar-overflow-container{display:flex;justify-content:center;align-items:center;height:100%;overflow:hidden}.ui5-shellbar-overflow-container-middle{align-self:flex-start;height:var(--_ui5-v2-4-0-rc-1_shellbar_overflow_container_middle_height);width:0;flex-shrink:0}.ui5-shellbar-mid-content{height:var(--_ui5-v2-4-0-rc-1_shellbar_overflow_container_middle_height);width:33.4%}.ui5-shellbar-overflow-container-left:has(+.ui5-shellbar-mid-content){width:33.3%}.ui5-shellbar-mid-content+.ui5-shellbar-overflow-container-right{width:33.3%}:host([breakpoint-size="XXL"][show-search-field]) .ui5-shellbar-with-searchfield .ui5-shellbar-overflow-container-middle{width:35rem}:host([breakpoint-size="XXL"][show-search-field]) .ui5-shellbar-overflow-container-right-child,:host([breakpoint-size="XXL"][show-search-field]) .ui5-shellbar-overflow-container-additional-content,:host([breakpoint-size="XL"][show-search-field]) .ui5-shellbar-overflow-container-right-child,:host([breakpoint-size="XL"][show-search-field]) .ui5-shellbar-overflow-container-additional-content{max-width:50%}:host([breakpoint-size="L"][show-search-field]) .ui5-shellbar-overflow-container-additional-content,:host([breakpoint-size="M"][show-search-field]) .ui5-shellbar-overflow-container-additional-content{flex-shrink:1}:host([breakpoint-size="XXL"][show-search-field]) .ui5-shellbar-overflow-container-right-child,:host([breakpoint-size="XL"][show-search-field]) .ui5-shellbar-overflow-container-right-child,:host([breakpoint-size="L"][show-search-field]) .ui5-shellbar-overflow-container-right-child{position:relative}:host([breakpoint-size="S"][show-search-field]) .ui5-shellbar-overflow-container-right{position:static}:host([breakpoint-size="S"]) .ui5-shellbar-overflow-container-left{flex-shrink:0}:host([breakpoint-size="S"]) .ui5-shellbar-menu-button{margin-inline-start:0}:host([breakpoint-size="S"]) .ui5-shellbar-root{padding:0 1rem}:host([breakpoint-size="S"]) .ui5-shellbar-search-full-width-wrapper{padding:0 1rem}:host([breakpoint-size="M"]) .ui5-shellbar-root{padding:0 2rem}:host([breakpoint-size="M"]) .ui5-shellbar-search-full-width-wrapper{padding:0 2rem}:host([breakpoint-size="L"]) .ui5-shellbar-root{padding:0 2rem}:host([breakpoint-size="XL"]) .ui5-shellbar-root{padding:0 3rem}:host([breakpoint-size="XXL"]) .ui5-shellbar-root{padding:0 3rem}.ui5-shellbar-logo{cursor:pointer;max-height:2rem;padding:.25rem}.ui5-shellbar-logo-area{display:flex;align-items:center;padding:.25rem;box-sizing:border-box;cursor:pointer;max-width:100%;overflow:hidden}.ui5-shellbar-logo-area .ui5-shellbar-logo{padding:0}:host([variant="Lean"]) .ui5-shellbar-logo-area{cursor:default;pointer-events:none}.ui5-shellbar-logo:focus,.ui5-shellbar-logo-area:focus{overflow:hidden;outline:var(--_ui5-v2-4-0-rc-1_shellbar_logo_outline);border-radius:var(--_ui5-v2-4-0-rc-1_shellbar_logo_border_radius)}.ui5-shellbar-logo-area:hover{box-shadow:var(--_ui5-v2-4-0-rc-1_shellbar_button_box_shadow);border-radius:var(--_ui5-v2-4-0-rc-1_shellbar_logo_border_radius)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover{box-shadow:var(--_ui5-v2-4-0-rc-1_shellbar_button_box_shadow)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active{box-shadow:var(--_ui5-v2-4-0-rc-1_shellbar_button_box_shadow_active)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active .ui5-shellbar-menu-button-arrow,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active .ui5-shellbar-menu-button-title{color:var(--sapShell_Active_TextColor)}.ui5-shellbar-menu-button .ui5-shellbar-logo:hover{box-shadow:none}.ui5-shellbar-button{--_ui5-v2-4-0-rc-1_button_focused_border: var(--_ui5-v2-4-0-rc-1_shellbar_button_focused_border);width:2.5rem;box-sizing:border-box}.ui5-shellbar-search-button{--_ui5-v2-4-0-rc-1_button_focused_border_radius: var(--_ui5-v2-4-0-rc-1_shellbar_search_button_border_radius);--_ui5-v2-4-0-rc-1_shellbar_button_border_radius: var(--_ui5-v2-4-0-rc-1_shellbar_search_button_border_radius);height:var(--_ui5-v2-4-0-rc-1_shellbar_search_button_size);width:var(--_ui5-v2-4-0-rc-1_shellbar_search_button_size);min-width:var(--_ui5-v2-4-0-rc-1_shellbar_search_button_size)}.ui5-shellbar-image-buttonImage{border-radius:50%;width:1.75rem;height:1.75rem;display:flex;background-size:cover}.ui5-shellbar-image-button{display:flex;justify-content:center;align-items:center;min-width:2.25rem;height:2.25rem;display:inline-flex;padding:0}.ui5-shellbar-overflow-container-left{padding:0 .125rem;justify-content:flex-start;margin-inline-end:.5rem;max-width:75%;flex-shrink:0;flex-grow:0}.ui5-shellbar-overflow-container-left>:nth-child(n){margin-inline-end:.5rem}.ui5-shellbar-menu-button{white-space:nowrap;overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem;cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background:var(--sapButton_Lite_Background);border:var(--_ui5-v2-4-0-rc-1_shellbar_button_border);color:var(--sapShell_TextColor)}:host(:not([with-logo])) .ui5-shellbar-menu-button{margin-inline-start:0}.ui5-shellbar-overflow-container-right{padding:0 .125rem;display:flex;position:relative;box-sizing:border-box;white-space:nowrap;flex:1 1 auto;width:100%;justify-content:flex-end;overflow:hidden}.ui5-shellbar-overflow-container-right .ui5-shellbar-overflow-container-right-child{display:flex;justify-content:flex-end;height:inherit;align-items:center;overflow:hidden;flex:1 1 auto;max-width:max-content}.ui5-shellbar-overflow-container-additional-content{align-items:center;display:flex;justify-content:flex-end;flex:1 0 auto;overflow:hidden;min-width:0}.ui5-shellbar-spacer{flex-grow:1;height:1px}::slotted(.ui5-shellbar-separator),.ui5-shellbar-separator{flex-grow:0;height:1rem;width:1px;background-color:gray}.ui5-shellbar-separator:not(:first-child){margin-inline-start:.5rem}.ui5-shellbar-overflow-container-right-child .ui5-shellbar-button[data-count]:has(+.ui5-shellbar-overflow-button):before{inset-inline-end:var(--_ui5-v2-4-0-rc-1-shellbar-notification-btn-count-offset)}.ui5-shellbar-overflow-button{display:none}:host([breakpoint-size="S"]) .ui5-shellbar-overflow-container-right{padding-inline-start:0}.ui5-shellbar-overflow-button-shown{display:inline-block}.ui5-shellbar-hidden-button,.ui5-shellbar-invisible-button{visibility:hidden;order:-1;min-width:0;width:0}::slotted([hidden]){visibility:hidden;order:-1;position:absolute}::slotted([slot^="additionalContext"]){flex-shrink:0}::slotted([slot^="additionalContext"]:not(:first-child):not(ui5-menu)){margin-inline-start:1rem}:host([breakpoint-size="L"]) .ui5-shellbar-with-searchfield .ui5-shellbar-overflow-container-right{padding-inline-start:1rem}:host([breakpoint-size="XL"]) .ui5-shellbar-with-searchfield .ui5-shellbar-overflow-container-right{padding-inline-start:1rem}:host(:not([notifications-count])) .ui5-shellbar-bell-button{position:relative}:host([notifications-count]:not([notifications-count=""])) .ui5-shellbar-bell-button:before,.ui5-shellbar-button[data-count]:before{position:absolute;width:auto;height:1rem;min-width:1rem;background:var(--sapContent_BadgeBackground);border:var(--_ui5-v2-4-0-rc-1_shellbar_button_badge_border);color:var(--sapContent_BadgeTextColor);top:-.25rem;right:-.25rem;padding:0 .3125rem;border-radius:.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);z-index:2;box-sizing:border-box}:host([notifications-count]:not([notifications-count=""])) .ui5-shellbar-bell-button:before{content:attr(data-ui5-notifications-count);inset-inline-end:var(--_ui5-v2-4-0-rc-1-shellbar-notification-btn-count-offset)}.ui5-shellbar-button[data-count]:before{content:attr(data-count)}.ui5-shellbar-menu-button{margin-inline-start:.5rem}.ui5-shellbar-search-field{align-items:center;flex-grow:1;min-width:40%;margin-inline-start:.5rem}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-search-full-field{height:2.25rem;width:100%}.ui5-shellbar-search-full-width-wrapper{position:absolute;top:0;left:0;background:var(--sapShellColor);height:100%;width:100%;z-index:100;display:flex;align-items:center;box-sizing:border-box}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-button{width:auto}::slotted([ui5-input]){background:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_background);border:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_border);box-shadow:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_box_shadow);color:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_color);height:2.25rem;width:100%;max-width:25rem}::slotted([ui5-input]:hover){background:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_background_hover);box-shadow:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_box_shadow_hover)}::slotted([ui5-input][focused]){outline:var(--_ui5-v2-4-0-rc-1_shellbar_search_field_outline_focused)}::slotted([slot="logo"]){max-height:2rem;pointer-events:none}.ui5-shellbar-co-pilot-placeholder{width:2.75rem;height:2.75rem}.ui5-shellbar-coPilot-pressed,.ui5-shellbar-coPilot-pressed:hover{color:var(--sapShell_Assistant_ForegroundColor)}::slotted([ui5-button][slot="startButton"]){margin-inline:0 .5rem;justify-content:center;align-items:center}::slotted([ui5-button][profile-btn]){width:auto}
` };
export default styleData;
//# sourceMappingURL=ShellBar.css.js.map