import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { TemplateFunction } from "@ui5/webcomponents-base/dist/renderer/executeTemplate.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";

import type ToolbarItemOverflowBehavior from "./types/ToolbarItemOverflowBehavior.js";

type IEventOptions = {
	preventClosing: boolean;
}

type ToolbarItemEventDetail = {
	targetRef: HTMLElement;
}

@event("close-overflow", {
	bubbles: true,
})

/**
 * @class
 *
 * Represents an abstract class for items, used in the `ui5-toolbar`.
 * @constructor
 * @extends UI5Element
 * @abstract
 * @public
 * @since 1.17.0
 */
class ToolbarItem extends UI5Element {
	// strictEvents: needed for parent class
	eventDetails!: {
		click: ToolbarItemEventDetail,
		"close-overflow": void;
	}
	/**
	 * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
	 * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
	 * @public
	 * @default "Default"
	 */
	@property()
	overflowPriority: `${ToolbarItemOverflowBehavior}` = "Default";

	/**
	 * Defines if the toolbar overflow popup should close upon intereaction with the item.
	 * It will close by default.
	 * @default false
	 * @public
	 */
	@property({ type: Boolean })
	preventOverflowClosing = false;

	/**
	* Defines if the width of the item should be ignored in calculating the whole width of the toolbar
	* @protected
	*/
	get ignoreSpace(): boolean {
		return false;
	}

	/**
	 * Returns if the item contains text. Used to position the text properly inside the popover.
	 * Aligned left if the item has text, default aligned otherwise.
	 * @protected
	 */
	get containsText(): boolean {
		return false;
	}

	/**
	 * Returns if the item is flexible. An item that is returning true for this property will make
	 * the toolbar expand to fill the 100% width of its container.
	 * @protected
	 */
	get hasFlexibleWidth(): boolean {
		return false;
	}

	/**
	 * Returns if the item is interactive.
	 * This value is used to determinate if the toolbar should have its accessibility role and attributes set.
	 * At least two interactive items are needed for the toolbar to have the role="toolbar" attribute set.
	 * @protected
	 */
	get isInteractive(): boolean {
		return true;
	}

	/**
	 * Returns if the item is separator.
	 * @protected
	 */
	get isSeparator() {
		return false;
	}

	/**
	 * Returns the template for the toolbar item.
	 * @protected
	 */
	static get toolbarTemplate(): TemplateFunction {
		throw new Error("Template must be defined");
	}

	/**
	 * Returns the template for the toolbar item popover.
	 * @protected
	 */
	static get toolbarPopoverTemplate(): TemplateFunction {
		throw new Error("Popover template must be defined");
	}

	get stableDomRef() {
		return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
	}
}

export type {
	IEventOptions,
	ToolbarItemEventDetail,
};
export default ToolbarItem;
