import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";
import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";
registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("@ui5/webcomponents", "sap_horizon", async () => defaultTheme);
const styleData = { packageName: "@ui5/webcomponents", fileName: "themes/SegmentedButtonItem.css.ts", content: `:host{vertical-align:middle}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-4-0-rc-3_button_base_min_width);height:var(--_ui5-v2-4-0-rc-3_button_base_height);line-height:normal;font-family:var(--_ui5-v2-4-0-rc-3_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5-v2-4-0-rc-3_button_text_shadow);border-radius:var(--_ui5-v2-4-0-rc-3_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-segmented-button-item-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5-v2-4-0-rc-3_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:.0625rem solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-segmented-button-item-icon{color:inherit;flex-shrink:0;padding-inline-end:.375rem}:host([icon-only]) .ui5-segmented-button-item-icon{padding-inline-end:0}:host([icon-only]) .ui5-segmented-button-item-root{min-width:auto;padding:0}:host([icon-only]) .ui5-segmented-button-item-text{display:none}.ui5-segmented-button-item-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-segmented-button-item-text{margin-inline-start:var(--_ui5-v2-4-0-rc-3_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-segmented-button-item-text{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only])) .ui5-segmented-button-item-text{min-width:calc(var(--_ui5-v2-4-0-rc-3_button_base_min_width) - var(--_ui5-v2-4-0-rc-3_button_base_icon_margin) - 1rem)}:host([disabled]){pointer-events:none}:host([desktop]:not([active])) .ui5-segmented-button-item-root:focus-within:after,:host(:not([active])) .ui5-segmented-button-item-root:focus-visible:after,:host([desktop][active]) .ui5-segmented-button-item-root:focus-within:before,:host([active]) .ui5-segmented-button-item-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-4-0-rc-3_button_focused_border);border-radius:var(--_ui5-v2-4-0-rc-3_button_focused_border_radius)}:host([desktop][active]) .ui5-segmented-button-item-root:focus-within:before,:host([active]) .ui5-segmented-button-item-root:focus-visible:before{border-color:var(--_ui5-v2-4-0-rc-3_button_pressed_focused_border_color)}.ui5-segmented-button-item-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([active][desktop]) .ui5-segmented-button-item-root:focus-within:after,:host([active]) .ui5-segmented-button-item-root:focus-visible:after,:host([selected][desktop]) .ui5-segmented-button-item-root:focus-within:after,:host([selected]) .ui5-segmented-button-item-root:focus-visible:after{border-color:var(--_ui5-v2-4-0-rc-3_button_pressed_focused_border_color);outline:none}:host([desktop]:not(:last-child)) .ui5-segmented-button-item-root:focus-within:after,:host(:not(:last-child)) .ui5-segmented-button-item-root:focus-visible:after{border-start-end-radius:var(--_ui5-v2-4-0-rc-3_button_focused_inner_border_radius);border-end-end-radius:var(--_ui5-v2-4-0-rc-3_button_focused_inner_border_radius)}:host([desktop]:not(:first-child)) .ui5-segmented-button-item-root:focus-within:after,:host(:not(:first-child)) .ui5-segmented-button-item-root:focus-visible:after{border-start-start-radius:var(--_ui5-v2-4-0-rc-3_button_focused_inner_border_radius);border-end-start-radius:var(--_ui5-v2-4-0-rc-3_button_focused_inner_border_radius)}
` };
export default styleData;
//# sourceMappingURL=SegmentedButtonItem.css.js.map