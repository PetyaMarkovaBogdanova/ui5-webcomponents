import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ChangeInfo } from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import type { ITabbable } from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import {
	isSpace,
	isShow,
} from "@ui5/webcomponents-base/dist/Keys.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import type { ResizeObserverCallback } from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import NavigationMode from "@ui5/webcomponents-base/dist/types/NavigationMode.js";
import BreadcrumbsDesign from "./types/BreadcrumbsDesign.js";
import BreadcrumbsSeparatorStyle from "./types/BreadcrumbsSeparatorStyle.js";
import BreadcrumbsItem from "./BreadcrumbsItem.js";
import {
	BREADCRUMB_ITEM_POS,
	BREADCRUMBS_ARIA_LABEL,
	BREADCRUMBS_OVERFLOW_ARIA_LABEL,
	BREADCRUMBS_CANCEL_BUTTON,
} from "./generated/i18n/i18n-defaults.js";
import Link from "./Link.js";
import type { LinkClickEventDetail } from "./Link.js";
import ResponsivePopover from "./ResponsivePopover.js";
import List from "./List.js";
import type { ListSelectionChangeEventDetail } from "./List.js";
import StandardListItem from "./StandardListItem.js";
import Icon from "./Icon.js";
import Button from "./Button.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";

// Templates
import BreadcrumbsTemplate from "./generated/templates/BreadcrumbsTemplate.lit.js";
import BreadcrumbsPopoverTemplate from "./generated/templates/BreadcrumbsPopoverTemplate.lit.js";

// Styles
import breadcrumbsCss from "./generated/themes/Breadcrumbs.css.js";
import breadcrumbsPopoverCss from "./generated/themes/BreadcrumbsPopover.css.js";

type BreadcrumbsItemClickEventDetail = {
	item: BreadcrumbsItem;
	altKey: boolean;
	ctrlKey: boolean;
	metaKey: boolean;
	shiftKey: boolean;
}

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
 * It helps the user to be aware of their location within the application and allows faster navigation.
 * <br><br>
 * The last three steps can be accessed as links directly, while the remaining links prior to them are available
 * in a drop-down menu.
 * <br><br>
 * You can choose the type of separator to be used from a number of predefined options.
 *
 * <h3>Keyboard Handling</h3>
 * The <code>ui5-breadcrumbs</code> provides advanced keyboard handling.
 * <br>
 * <ul>
 * <li>[F4, ALT+UP, ALT+DOWN, SPACE, ENTER] - If the dropdown arrow is focused - opens/closes the drop-down.</li>
 * <li>[SPACE, ENTER] - Activates the focused item and triggers the <code>item-click</code> event.</li>
 * <li>[ESC] - Closes the drop-down.</li>
 * <li>[LEFT] - If the drop-down is closed - navigates one item to the left.</li>
 * <li>[RIGHT] - If the drop-down is closed - navigates one item to the right.</li>
 * <li>[UP] - If the drop-down is open - moves focus to the next item.</li>
 * <li>[DOWN] - If the drop-down is open - moves focus to the previous item.</li>
 * <li>[HOME] - Navigates to the first item.</li>
 * <li>[END] - Navigates to the last item.</li>
 * </ul>
 * <br>
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.15
 */
@customElement({
	tag: "ui5-breadcrumbs",
	languageAware: true,
	renderer: litRender,
	template: BreadcrumbsTemplate,
	staticAreaTemplate: BreadcrumbsPopoverTemplate,
	styles: breadcrumbsCss,
	staticAreaStyles: breadcrumbsPopoverCss,
	dependencies: [
		BreadcrumbsItem,
		Link,
		ResponsivePopover,
		List,
		StandardListItem,
		Icon,
		Button,
	],
})
/**
 * Fires when a <code>BreadcrumbsItem</code> is clicked.
 * <b>Note:</b> You can prevent browser location change by calling <code>event.preventDefault()</code>.
 *
 * @allowPreventDefault
 * @param {HTMLElement} item The clicked item.
 * @param {Boolean} altKey Returns whether the "ALT" key was pressed when the event was triggered.
 * @param {Boolean} ctrlKey Returns whether the "CTRL" key was pressed when the event was triggered.
 * @param {Boolean} metaKey Returns whether the "META" key was pressed when the event was triggered.
 * @param {Boolean} shiftKey Returns whether the "SHIFT" key was pressed when the event was triggered.
 * @public
 */
@event<BreadcrumbsItemClickEventDetail>("item-click", {
	detail: {
		/**
		 * @public
		 */
		item: { type: HTMLElement },
		/**
		 * @public
		 */
		altKey: { type: Boolean },
		/**
		 * @public
		 */
		ctrlKey: { type: Boolean },
		/**
		 * @public
		 */
		metaKey: { type: Boolean },
		/**
		 * @public
		 */
		shiftKey: { type: Boolean },
	},
})
class Breadcrumbs extends UI5Element {
	/**
	 * Defines the visual indication and behavior of the breadcrumbs.
	 * <br><br>
	 * <b>Note:</b> The <code>Standard</code> breadcrumbs show the current page as the last item in the trail.
	 * The last item contains only plain text and is not a link.
	 *
	 * @default "Standard"
	 * @public
	*/
	@property({ type: BreadcrumbsDesign, defaultValue: BreadcrumbsDesign.Standard })
	design!: `${BreadcrumbsDesign}`;

	/**
	 * Determines the visual style of the separator between the breadcrumb items.
	 *
	 * @default "Slash"
	 * @public
	 */
	@property({ type: BreadcrumbsSeparatorStyle, defaultValue: BreadcrumbsSeparatorStyle.Slash })
	separatorStyle!: `${BreadcrumbsSeparatorStyle}`;

	/**
	 * Holds the number of items in the overflow.
	 *
	 * @default 0
	 * @private
	 */
	@property({ validator: Integer, noAttribute: true, defaultValue: 0 })
	_overflowSize!: number;

	/**
	 * Defines the component items.
	 *
	 * <br><br>
	 * <b>Note:</b> Use the <code>ui5-breadcrumbs-item</code> component to define the desired items.
	 * @public
	 */
	@slot({ type: HTMLElement, invalidateOnChildChange: true, "default": true })
	items!: Array<BreadcrumbsItem>;

	_itemNavigation: ItemNavigation
	_onResizeHandler: ResizeObserverCallback;

	// maps items to their widths
	_breadcrumbItemWidths = new WeakMap<BreadcrumbsItem, number>();
	// the width of the interactive element that opens the overflow
	_dropdownArrowLinkWidth = 0;
	responsivePopover?: ResponsivePopover;
	static i18nBundle: I18nBundle;

	constructor() {
		super();

		this._itemNavigation = new ItemNavigation(this, {
			navigationMode: NavigationMode.Horizontal,
			getItemsCallback: () => this._getFocusableItems(),
		});

		this._onResizeHandler = this._updateOverflow.bind(this);
	}

	onInvalidation(changeInfo: ChangeInfo) {
		if (changeInfo.reason === "childchange") {
			const itemIndex = this._getItems().indexOf(changeInfo.child as BreadcrumbsItem),
				isInOverflow = itemIndex < this._overflowSize;
			if (isInOverflow) {
				// the content of an overflowing item has changed
				// => need to render the item outside the overflow to obtain its new width
				// => lower-down the <code>_overfowSize</code> to exclude that item from the overflow
				this._overflowSize = itemIndex;
			}
		}
	}

	_getItems() {
		return this.getSlottedNodes<BreadcrumbsItem>("items");
	}

	onBeforeRendering() {
		this._preprocessItems();
	}

	async onAfterRendering() {
		await renderFinished();

		this._cacheWidths();
		this._updateOverflow();
	}

	onEnterDOM() {
		ResizeHandler.register(this, this._onResizeHandler);
	}

	onExitDOM() {
		ResizeHandler.deregister(this, this._onResizeHandler);
	}

	_initItemNavigation() {
		if (!this._itemNavigation) {
			this._itemNavigation = new ItemNavigation(this, {
				navigationMode: NavigationMode.Horizontal,
				getItemsCallback: () => this._getFocusableItems(),
			});
		}
	}

	/**
	 * Obtains the items for navigation via keyboard
	 * @private
	 */
	_getFocusableItems() {
		const items: Array<ITabbable> = this._links;

		if (!this._isOverflowEmpty) {
			items.unshift(this._dropdownArrowLink);
		}

		return items;
	}

	_onfocusin(e: FocusEvent) {
		const currentItem = e.target as Link;

		this._itemNavigation.setCurrentItem(currentItem);
	}

	_onkeydown(e: KeyboardEvent) {
		const isDropdownArrowFocused = this._isDropdownArrowFocused;

		if (isShow(e) && isDropdownArrowFocused && !this._isOverflowEmpty) {
			e.preventDefault();
			this._toggleRespPopover();
			return;
		}
		if (isSpace(e) && isDropdownArrowFocused && !this._isOverflowEmpty && !this._isPickerOpen) {
			e.preventDefault();
		}
	}

	_onkeyup(e: KeyboardEvent) {
		if (this._isDropdownArrowFocused && isSpace(e) && !this._isOverflowEmpty && !this._isPickerOpen) {
			this._openRespPopover();
		}
	}

	/**
	 * Caches the space required to render the content
	 * @private
	 */
	_cacheWidths() {
		const map = this._breadcrumbItemWidths,
			items = this._getItems();

		for (let i = this._overflowSize; i < items.length; i++) {
			const item = items[i],
				link = this.shadowRoot!.querySelector<HTMLElement>(`#${item._id}-link-wrapper`)!;
			map.set(item, this._getElementWidth(link));
		}

		if (!this._isOverflowEmpty) {
			const arrow = this.shadowRoot!.querySelector<HTMLElement>(".ui5-breadcrumbs-dropdown-arrow-link-wrapper")!;
			this._dropdownArrowLinkWidth = this._getElementWidth(arrow);
		}
	}

	_updateOverflow() {
		const items = this._getItems(),
			availableWidth = this.shadowRoot!.querySelector<HTMLElement>(".ui5-breadcrumbs-root")!.offsetWidth;
		let requiredWidth = this._getTotalContentWidth(),
			overflowSize = 0;

		if (requiredWidth > availableWidth) {
			// need to show the component that opens the overflow
			requiredWidth += this._dropdownArrowLinkWidth;
		}

		while ((requiredWidth >= availableWidth) && (overflowSize < this._maxAllowedOverflowSize)) {
			const itemToOverflow = items[overflowSize];
			let itemWidth = 0;

			if (this._isItemVisible(itemToOverflow)) {
				itemWidth = this._breadcrumbItemWidths.get(itemToOverflow) || 0;
			}

			// move the item to the overflow
			requiredWidth -= itemWidth;
			overflowSize++;
		}

		this._overflowSize = overflowSize;

		// if overflow was emptied while picker was open => close redundant popup
		if (this._isOverflowEmpty && this._isPickerOpen) {
			this.responsivePopover!.close();
		}

		// if the last focused link has done into the overflow =>
		// ensure the first visible link is focusable
		const focusableItems = this._getFocusableItems();
		if (!focusableItems.some(x => x.forcedTabIndex === "0")) {
			this._itemNavigation.setCurrentItem(focusableItems[0]);
		}
	}

	_getElementWidth(element: HTMLElement) {
		if (element) {
			return Math.ceil(element.getBoundingClientRect().width);
		}

		return 0;
	}

	_getTotalContentWidth() {
		const items = this._getItems(),
			widthsMap = this._breadcrumbItemWidths,
			totalLinksWidth = items.reduce((sum, link) => sum + widthsMap.get(link)!, 0);

		return totalLinksWidth;
	}

	_onLinkPress(e: CustomEvent<LinkClickEventDetail>) {
		const link = e.target as Link,
			items = this._getItems(),
			item = items.find(x => `${x._id}-link` === link.id)!,
			{
				altKey,
				ctrlKey,
				metaKey,
				shiftKey,
			} = e.detail;

		if (!this.fireEvent<BreadcrumbsItemClickEventDetail>("item-click", {
			item,
			altKey,
			ctrlKey,
			metaKey,
			shiftKey,
		}, true)) {
			e.preventDefault();
			return;
		}

		if (item._isCurrentPageItem) {
			window.location.reload();
		}
	}

	_onOverflowListItemSelect(e: CustomEvent<ListSelectionChangeEventDetail>) {
		const listItem = e.detail.selectedItems[0],
			items = this._getItems(),
			item = items.find(x => `${x._id}-li` === listItem.id)!;

		if (this.fireEvent("item-click", { item }, true)) {
			window.open(item.href, item.target || "_self", "noopener,noreferrer");
			this.responsivePopover!.close();
		}
	}

	async _respPopover() {
		const staticAreaItem = await this.getStaticAreaItemDomRef();
		return staticAreaItem!.querySelector<ResponsivePopover>("[ui5-responsive-popover]")!;
	}

	async _toggleRespPopover() {
		this.responsivePopover = await this._respPopover();

		if (this._isPickerOpen) {
			this._closeRespPopover();
		} else {
			this._openRespPopover();
		}
	}

	_closeRespPopover() {
		this.responsivePopover && this.responsivePopover.close();
	}

	async _openRespPopover() {
		this.responsivePopover = await this._respPopover();
		this.responsivePopover.showAt(this._dropdownArrowLink);
	}

	_isItemVisible(item: BreadcrumbsItem) {
		return !item.hidden && this._hasVisibleContent(item);
	}

	_hasVisibleContent(item: BreadcrumbsItem) {
		// the check is not complete but may be extended in the future if needed to cover
		// cases besides the standard (UX-recommended) ones
		return item.innerText || Array.from(item.children).some(child => !(child as HTMLElement).hidden);
	}

	_preprocessItems() {
		this.items.forEach(item => {
			item._getRealDomRef = () => this.getDomRef()!.querySelector(`[data-ui5-stable*=${item.stableDomRef}]`)!;
		});
	}

	_getItemPositionText(position: number, size: number) {
		return Breadcrumbs.i18nBundle.getText(BREADCRUMB_ITEM_POS, position, size);
	}

	_getItemAccessibleName(item: BreadcrumbsItem, position: number, size: number) {
		const positionText = this._getItemPositionText(position, size);
		const itemsText = item.textContent || "";

		// innerText is needed as it is no longer read out when label is set
		let text = "";
		if (item.accessibleName) {
			text = `${itemsText.trim()} ${item.accessibleName} ${positionText}`;
		} else {
			text = `${itemsText.trim()} ${positionText}`;
		}

		return text;
	}

	get _visibleItems() {
		return this._getItems()
			.slice(this._overflowSize)
			.filter(i => this._isItemVisible(i));
	}

	get _endsWithCurrentPageItem() {
		return this.design === BreadcrumbsDesign.Standard;
	}

	get _isDropdownArrowFocused() {
		return this._dropdownArrowLink.forcedTabIndex === "0";
	}

	/**
	 * Returns the maximum allowed count of items in the overflow
	 * with respect to the UX requirement to never overflow the last visible item
	 */
	get _maxAllowedOverflowSize() {
		const items = this._getItems().filter(item => this._isItemVisible(item));
		// all items except tha last visible one are allowed to overflow by UX requirement
		return items.length - 1;
	}

	/**
	 * Getter for the interactive element that opens the overflow
	 * @private
	 */
	get _dropdownArrowLink() {
		return this.shadowRoot!.querySelector<Link>(".ui5-breadcrumbs-dropdown-arrow-link-wrapper [ui5-link]")!;
	}

	/**
	 * Getter for the list of abstract breadcrumb items to be rendered as list-items inside the overflow
	 */
	get _overflowItemsData() {
		return this._getItems()
			.slice(0, this._overflowSize)
			.filter(item => this._isItemVisible(item))
			.reverse();
	}

	/**
	 * Getter for the list of abstract breadcrumb items to be rendered as links outside the overflow
	 */
	get _linksData() {
		const items = this._visibleItems;
		const itemsCount = items.length;

		return items
			.map((item, index) => {
				item._accessibleNameText = this._getItemAccessibleName(item, index + 1, itemsCount);
				item._isCurrentPageItem = index === (itemsCount - 1) && this._endsWithCurrentPageItem;
				return item;
			});
	}

	/**
	 * Getter for the list of links corresponding to the abstract breadcrumb items
	 */
	get _links() {
		return Array.from(this.shadowRoot!.querySelectorAll<Link>(".ui5-breadcrumbs-link-wrapper [ui5-link]"));
	}

	get _isOverflowEmpty() {
		return this._overflowItemsData.length === 0;
	}

	get _ariaHasPopup() {
		if (!this._isOverflowEmpty) {
			return "listbox";
		}
		return undefined;
	}

	get _isPickerOpen() {
		return !!this.responsivePopover && this.responsivePopover.opened;
	}

	get _accessibleNameText() {
		return Breadcrumbs.i18nBundle.getText(BREADCRUMBS_ARIA_LABEL);
	}

	get _dropdownArrowAccessibleNameText() {
		return Breadcrumbs.i18nBundle.getText(BREADCRUMBS_OVERFLOW_ARIA_LABEL);
	}

	get _cancelButtonText() {
		return Breadcrumbs.i18nBundle.getText(BREADCRUMBS_CANCEL_BUTTON);
	}

	static async onDefine() {
		Breadcrumbs.i18nBundle = await getI18nBundle("@ui5/webcomponents");
	}
}

Breadcrumbs.define();

export default Breadcrumbs;
export type {
	BreadcrumbsItemClickEventDetail,
};
