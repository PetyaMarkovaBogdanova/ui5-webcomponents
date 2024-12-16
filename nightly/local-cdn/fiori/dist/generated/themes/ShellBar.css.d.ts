declare const _default: ".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%;max-width:100%;background:var(--sapShellColor);box-sizing:border-box}:host{--_ui5-v2-6-0-rc-1_input_placeholder_color: var(--sapShell_InteractiveTextColor);--_ui5-v2-6-0-rc-1_input_border_radius: var(--_ui5-v2-6-0-rc-1_shellbar_input_border_radius);--_ui5-v2-6-0-rc-1_input_focus_border_radius: var(--_ui5-v2-6-0-rc-1_shellbar_input_focus_border_radius);--_ui5-v2-6-0-rc-1_input_background_color: var(--_ui5-v2-6-0-rc-1_shellbar_input_background_color);--_ui5-v2-6-0-rc-1_input_focus_outline_color: var(--_ui5-v2-6-0-rc-1_shellbar_input_focus_outline_color);--_ui5-v2-6-0-rc-1_input_margin_top_bottom: 0}.ui5-shellbar-root{position:relative;display:flex;justify-content:space-between;align-items:center;height:var(--_ui5-v2-6-0-rc-1_shellbar_root_height);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;box-sizing:border-box;box-shadow:inset 0 -.0625rem 0 0 var(--sapShell_BorderColor)}.ui5-shellbar-menu-button,.ui5-shellbar-button,.ui5-shellbar-image-button,::slotted([ui5-toggle-button]),::slotted([ui5-button]){height:2.25rem;padding:0;margin-inline-start:var(--_ui5-v2-6-0-rc-1-shellbar-overflow-button-margin);border:.0625rem solid var(--sapButton_Lite_BorderColor);background:var(--sapButton_Lite_Background);outline-color:var(--_ui5-v2-6-0-rc-1_shellbar_logo_outline_color);color:var(--sapShell_TextColor);box-sizing:border-box;cursor:pointer;border-radius:var(--_ui5-v2-6-0-rc-1_shellbar_button_border_radius);position:relative;font-weight:700;white-space:initial;overflow:initial;text-overflow:initial;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}::slotted([ui5-button][slot=\"startButton\"]){margin-inline-start:0}::slotted([ui5-toggle-button]:hover),::slotted([ui5-button]:hover),.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover,.ui5-shellbar-button:hover,.ui5-shellbar-image-button:hover,::slotted([ui5-button][slot=\"midContent\"]:hover){background:var(--sapShell_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);color:var(--sapShell_TextColor)}::slotted([ui5-toggle-button][slot=\"assistant\"][pressed]),::slotted([ui5-toggle-button][slot=\"assistant\"][pressed]:hover:not([active])){color:var(--sapShell_Assistant_ForegroundColor)}::slotted([ui5-toggle-button][active]),::slotted([ui5-button][active]),.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active,.ui5-shellbar-button[active],.ui5-shellbar-image-button:active{background:var(--sapShell_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--_ui5-v2-6-0-rc-1_shellbar_button_active_color)}:host([desktop]) .ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus-visible{outline:var(--_ui5-v2-6-0-rc-1_shellbar_logo_outline);outline-offset:var(--_ui5-v2-6-0-rc-1_shellbar_outline_offset)}slot[name=profile]{min-width:0}::slotted([ui5-avatar][slot=\"profile\"]){display:block;width:2rem;height:2rem;min-width:0;min-height:2rem;pointer-events:none}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive::-moz-focus-inner{border:none}.ui5-shellbar-menu-button-arrow,.ui5-shellbar-menu-button-title,.ui5-shellbar-title{display:inline-block;font-family:var(--sapFontSemiboldFamily);margin:0;font-size:var(--_ui5-v2-6-0-rc-1_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_SubBrand_TextColor)}:host(:not([primary-title])) .ui5-shellbar-menu-button{min-width:2.25rem;justify-content:center}.ui5-shellbar-secondary-title{display:inline-block;font-size:var(--sapFontSmallSize);color:var(--sapShell_TextColor);font-weight:400;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:0;text-align:start}.ui5-shellbar-headings{display:flex;flex-direction:column;justify-content:center;height:100%;overflow:hidden;margin-left:.25rem}.ui5-shellbar-menu-button--interactive .ui5-shellbar-menu-button-arrow{margin-inline-start:.375rem}.ui5-shellbar-overflow-container{display:flex;justify-content:center;align-items:center;height:100%;overflow:hidden}.ui5-shellbar-overflow-container-middle{align-self:flex-start;height:var(--_ui5-v2-6-0-rc-1_shellbar_overflow_container_middle_height);width:0;flex-shrink:0}.ui5-shellbar-mid-content{height:var(--_ui5-v2-6-0-rc-1_shellbar_overflow_container_middle_height)}:host([breakpoint-size=\"S\"]) .ui5-shellbar-menu-button{margin-inline-start:0}:host([breakpoint-size=\"S\"]){padding:0 1rem}:host([breakpoint-size=\"S\"]) .ui5-shellbar-search-full-width-wrapper{padding:0 1rem}:host([breakpoint-size=\"M\"]){padding:0 2rem}:host([breakpoint-size=\"M\"]) .ui5-shellbar-search-full-width-wrapper{padding:0 2rem}:host([breakpoint-size=\"L\"]){padding:0 2rem}:host([breakpoint-size=\"XL\"]){padding:0 3rem}:host([breakpoint-size=\"XXL\"]){padding:0 3rem}.ui5-shellbar-logo{cursor:pointer;max-height:2rem;padding:.25rem}.ui5-shellbar-logo-area{display:flex;align-items:center;padding:.25rem .5rem .25rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem}.ui5-shellbar-logo-area .ui5-shellbar-logo{padding:0}.ui5-shellbar-logo:focus,.ui5-shellbar-logo-area:focus{overflow:hidden;outline:var(--_ui5-v2-6-0-rc-1_shellbar_logo_outline);border-radius:var(--_ui5-v2-6-0-rc-1_shellbar_logo_border_radius)}.ui5-shellbar-logo-area:hover{box-shadow:var(--_ui5-v2-6-0-rc-1_shellbar_button_box_shadow);border-radius:var(--_ui5-v2-6-0-rc-1_shellbar_logo_border_radius)}.ui5-shellbar-logo-area:active:focus{background:var(--sapShell_Active_Background);border:1px solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover{box-shadow:var(--_ui5-v2-6-0-rc-1_shellbar_button_box_shadow)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active{box-shadow:var(--_ui5-v2-6-0-rc-1_shellbar_button_box_shadow_active)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active .ui5-shellbar-menu-button-arrow,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active .ui5-shellbar-menu-button-title{color:var(--sapShell_Active_TextColor)}.ui5-shellbar-menu-button .ui5-shellbar-logo:hover{box-shadow:none}.ui5-shellbar-button{--_ui5-v2-6-0-rc-1_button_focused_border: var(--_ui5-v2-6-0-rc-1_shellbar_button_focused_border);width:2.5rem;box-sizing:border-box}.ui5-shellbar-search-button{--_ui5-v2-6-0-rc-1_button_focused_border_radius: var(--_ui5-v2-6-0-rc-1_shellbar_search_button_border_radius);--_ui5-v2-6-0-rc-1_shellbar_button_border_radius: var(--_ui5-v2-6-0-rc-1_shellbar_search_button_border_radius);height:var(--_ui5-v2-6-0-rc-1_shellbar_search_button_size);width:var(--_ui5-v2-6-0-rc-1_shellbar_search_button_size);min-width:var(--_ui5-v2-6-0-rc-1_shellbar_search_button_size)}.ui5-shellbar-image-button{display:flex;justify-content:center;align-items:center;min-width:auto;height:2.5rem;--_ui5-v2-6-0-rc-1_button_focused_border_radius: var(--_ui5-v2-6-0-rc-1_shellbar_image_button_border_radius);border-radius:var(--_ui5-v2-6-0-rc-1_shellbar_image_button_border_radius)}.ui5-shellbar-overflow-container-left{padding:0;justify-content:flex-start;max-width:75%;flex-shrink:0}.ui5-shellbar-overflow-container-left>:nth-child(n){margin-inline-end:.5rem}.ui5-shellbar-menu-button{white-space:nowrap;overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem;cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background:var(--sapButton_Lite_Background);border:var(--_ui5-v2-6-0-rc-1_shellbar_button_border);color:var(--sapShell_TextColor)}:host(:not([with-logo])) .ui5-shellbar-menu-button{margin-inline-start:0}.ui5-shellbar-overflow-container-right{flex-grow:1;justify-content:flex-end}.ui5-shellbar-overflow-container-right .ui5-shellbar-overflow-container-right-child{display:flex;justify-content:flex-end;height:inherit;align-items:center}.ui5-shellbar-overflow-container-additional-content{align-items:center;display:flex;overflow:hidden;flex-grow:1}.ui5-shellbar-spacer{flex-grow:1;height:1px;flex-basis:1rem}::slotted(.ui5-shellbar-separator),.ui5-shellbar-separator{flex-grow:0;flex-shrink:0;height:1rem;width:1px;background-color:var(--sapToolbar_SeparatorColor)}.ui5-shellbar-separator-start{margin-inline-end:.5rem}.ui5-shellbar-separator-end{margin-inline-start:.5rem;margin-inline-end:.5rem}.ui5-shellbar-overflow-container-right-child .ui5-shellbar-button[data-count]:has(+.ui5-shellbar-overflow-button):before{inset-inline-end:var(--_ui5-v2-6-0-rc-1-shellbar-notification-btn-count-offset)}:host([breakpoint-size=\"S\"]) .ui5-shellbar-overflow-container-right{padding-inline-start:0}::slotted([hidden]){visibility:hidden;order:-1;position:absolute}::slotted([slot^=\"startContent\"]),::slotted([slot^=\"endContent\"]){flex-shrink:0;margin-inline-start:var(--_ui5-v2-6-0-rc-1-shellbar-content-margin-start)}::slotted([slot^=\"startContent\"][slot$=\"-1\"]),::slotted([slot^=\"endContent\"][slot$=\"-1\"]){margin-inline-start:0}:host(:not([notifications-count])) .ui5-shellbar-bell-button{position:relative}:host([notifications-count]:not([notifications-count=\"\"])) .ui5-shellbar-bell-button:before,.ui5-shellbar-button[data-count]:before{position:absolute;width:auto;height:1rem;min-width:1rem;background:var(--sapContent_BadgeBackground);border:var(--_ui5-v2-6-0-rc-1_shellbar_button_badge_border);color:var(--sapContent_BadgeTextColor);top:-.25rem;right:-.25rem;padding:0 .3125rem;border-radius:.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);font-family:\"72override\",var(--sapFontFamily);z-index:2;box-sizing:border-box}:host([notifications-count]:not([notifications-count=\"\"])) .ui5-shellbar-bell-button:before{content:attr(data-ui5-notifications-count);inset-inline-end:var(--_ui5-v2-6-0-rc-1-shellbar-notification-btn-count-offset)}.ui5-shellbar-button[data-count]:before{content:attr(data-count)}.ui5-shellbar-button[data-count=\" \"]:before{height:.75rem;min-width:.75rem}[data-ui5-compact-size] .ui5-shellbar-button[data-count=\" \"]:before,.ui5-content-density-compact .ui5-shellbar-button[data-count=\" \"]:before,.sapUiSizeCompact .ui5-shellbar-button[data-count=\" \"]:before{height:.625rem;min-width:.625rem}.ui5-shellbar-menu-button{margin-inline-start:.5rem}.ui5-shellbar-search-field{align-items:center;flex-grow:1;margin-inline-start:.5rem}.ui5-shellbar-overflow-container-right-child>:first-child,.ui5-shellbar-search-field:first-child+.ui5-shellbar-button:not(.ui5-shellbar-search-button){margin-inline-start:0}.ui5-shellbar-with-full-searchfield .ui5-shellbar-overflow-container-additional-content{max-width:0px}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-search-full-field{height:2.25rem;width:100%}.ui5-shellbar-search-full-width-wrapper{position:absolute;top:0;left:0;background:var(--sapShellColor);height:100%;width:100%;z-index:100;display:flex;align-items:center;box-sizing:border-box}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-button{width:auto}::slotted([ui5-input]){background:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_background);border:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_border);box-shadow:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_box_shadow);color:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_color);height:2.25rem;width:100%;min-width:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_width)}:host([breakpoint-size=\"M\"]) ::slotted([ui5-input]),:host([breakpoint-size=\"S\"]) ::slotted([ui5-input]){min-width:0}::slotted([ui5-input]:hover){background:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_background_hover);box-shadow:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_box_shadow_hover)}::slotted([ui5-input][focused]){outline:var(--_ui5-v2-6-0-rc-1_shellbar_search_field_outline_focused)}::slotted([slot=\"logo\"]){max-height:2rem;pointer-events:none;padding:0 .25rem}.ui5-shellbar-co-pilot-placeholder{width:2.75rem;height:2.75rem}.ui5-shellbar-coPilot-pressed,.ui5-shellbar-coPilot-pressed:hover{color:var(--sapShell_Assistant_ForegroundColor)}::slotted([ui5-button][slot=\"startButton\"]){margin-inline:0 .5rem;justify-content:center;align-items:center}::slotted([ui5-button][profile-btn]){width:auto}::slotted(.ui5-shellbar-hidden-button),::slotted(.ui5-shellbar-force-hidden-button),.ui5-shellbar-hidden-button,.ui5-shellbar-invisible-button{visibility:hidden;order:-1;opacity:0;min-width:0;width:0;margin:0;padding:0;border:0;margin-inline-start:0}\n";
export default _default;
