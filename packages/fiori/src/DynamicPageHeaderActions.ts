import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import ToggleButton from "@ui5/webcomponents/dist/ToggleButton.js";

// Template
import DynamicPageHeaderActionsTemplate from "./generated/templates/DynamicPageHeaderActionsTemplate.lit.js";

// Styles
import DynamicPageHeaderActionsCss from "./generated/themes/DynamicPageHeaderActions.css.js";

// Texts
import {
	DYNAMIC_PAGE_ARIA_LABEL_EXPAND_HEADER,
	DYNAMIC_PAGE_ARIA_LABEL_SNAP_HEADER,
	DYNAMIC_PAGE_ARIA_LABEL_PIN_HEADER,
} from "./generated/i18n/i18n-defaults.js";
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>DynamicPageHeaderActions</code> component is part of the <code>DynamicPage</code>
 * family and is holding the action buttons behind the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.
 *
 * The "pin" action is used to attach the header to a certain state (expanded/collapsed).
 * The expand/collapse action is used to switch between the two states of <code>DynamicPageHeader</code>.
 *
 *
 * @constructor
 * @extends UI5Element
 * @private
 * @since 1.23.0
 */
@customElement({
	tag: "ui5-dynamic-page-header-actions",
	renderer: litRender,
	styles: DynamicPageHeaderActionsCss,
	template: DynamicPageHeaderActionsTemplate,
	dependencies: [Button, ToggleButton],
})

/**
 * Event that is being fired by clicking on the expand button.
 *
 * @protected
 */
@event("expand-button-click")

/**
 * Event that is being fired by clicking on the pin button.
 *
 * @protected
 */
@event("pin-button-click")

class DynamicPageHeaderActions extends UI5Element {
	/**
	 * Defines whether the header is pinned.
	 *
	 * @protected
	 * @default false
	 */
	@property({ type: Boolean })
	pinned!: boolean;

	/**
	 * Defines whether the header is snapped.
	 *
	 * @protected
	 * @default false
	 */
	@property({ type: Boolean })
	snapped!: boolean;

	/**
	 * Contains attributes to be added to HTML to gain accessibility.
	 *
	 * @protected
	 * @default {}
	 */
	@property({ type: Object })
	accessibilityAttributes!: { controls: string };

	static i18nBundle: I18nBundle;

	static async onDefine() {
		DynamicPageHeaderActions.i18nBundle = await getI18nBundle("@ui5/webcomponents-fiori");
	}

	get arrowButtonIcon() {
		return this.snapped ? "slim-arrow-down" : "slim-arrow-up";
	}

	get pinButtonIcon() {
		return this.pinned ? "pushpin-on" : "pushpin-off";
	}

	get expandButton(): Button | null {
		return this.shadowRoot!.querySelector<Button>(".ui5-dynamic-page-header-action-expand");
	}

	get pinButton(): ToggleButton | null {
		return this.shadowRoot!.querySelector<ToggleButton>(".ui5-dynamic-page-header-action-pin");
	}

	get pinLabel() {
		return DynamicPageHeaderActions.i18nBundle.getText(DYNAMIC_PAGE_ARIA_LABEL_PIN_HEADER);
	}

	get expandLabel() {
		return this.snapped
			? DynamicPageHeaderActions.i18nBundle.getText(DYNAMIC_PAGE_ARIA_LABEL_EXPAND_HEADER)
			: DynamicPageHeaderActions.i18nBundle.getText(DYNAMIC_PAGE_ARIA_LABEL_SNAP_HEADER);
	}

	focusExpandButton() {
		this.expandButton?.focus();
	}

	focusPinButton() {
		this.pinButton?.focus();
	}

	onExpandClick() {
		this.fireEvent("expand-button-click");
	}

	onPinClick() {
		this.fireEvent("pin-button-click");
	}
}

DynamicPageHeaderActions.define();

export default DynamicPageHeaderActions;