var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DynamicPage_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import query from "@ui5/webcomponents-base/dist/decorators/query.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import MediaRange from "@ui5/webcomponents-base/dist/MediaRange.js";
import announce from "@ui5/webcomponents-base/dist/util/InvisibleMessage.js";
import InvisibleMessageMode from "@ui5/webcomponents-base/dist/types/InvisibleMessageMode.js";
import { isPhone } from "@ui5/webcomponents-base/dist/Device.js";
import debounce from "@ui5/webcomponents-base/dist/util/debounce.js";
// Template
import DynamicPageTemplate from "./DynamicPageTemplate.js";
// Styles
import DynamicPageCss from "./generated/themes/DynamicPage.css.js";
import DynamicPageHeader from "./DynamicPageHeader.js";
import DynamicPageTitle from "./DynamicPageTitle.js";
// Texts
import { DYNAMIC_PAGE_ARIA_LABEL_EXPANDED_HEADER, DYNAMIC_PAGE_ARIA_LABEL_SNAPPED_HEADER, } from "./generated/i18n/i18n-defaults.js";
const SCROLL_DEBOUNCE_RATE = 5; // ms
const SCROLL_THRESHOLD = 10; // px
/**
 * @class
 *
 * ### Overview
 *
 * A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.
 *
 * The component consist of several components:
 *
 * - `DynamicPageTitle` - a component, holding the title of the page, the navigation actions and the content. The displayed content changes based on the current mode of the `DynamicPageHeader`.
 * - `DynamicPageHeader` - a generic container, which can contain a single layout component and any other HTML elements. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.
 * - `Content area` - a generic container, which can have a single UI5 layout.
 * - `Footer` - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content.
 *
 * ### Usage
 *
 * Use the `DynamicPage` if you need to have a title, that is always visible
 * and a header, that has configurable Expanding/Snapping functionality.
 * If you don't need the Expanding/Snapping functionality it is better to use the
 * `ui5-page` as a lighter component.
 *
 * The app can add to the `default` slot of the ui5-dynamic-page either content that is designed to fit its container (e.g. has 100% height),
 * or content with own height that may overflow its container. In the second case the `DynamicPage` will show a scrollbar that allows the user
 * scroll through the content.
 *
 * ## Notes:
 *
 * - Snapping of the `DynamicPageTitle` is not supported in the following case:
 *  - When the `DynamicPage` has a scroll bar, the component usually scrolls to the snapping point - the point, where the `DynamicPageHeader` is scrolled out completely. However, when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible using scrolling.
 *
 * ### Responsive Behavior
 *
 * Dynamic page web component implements the responsive paddings design.
 *
 * ### Keyboard Handling
 *
 *
 * ### Basic Navigation
 *
 * - [SPACE, ENTER, RETURN] - If focus is on a button inside DynamicPageTitle its action is being triggered, once activated.
 * If focus is on the snap header button (arrow button), or on the header itself, once activated, it triggers the associated action (such as snap/expand the header).
 * If focus is on pin button (the button with pin icon on the bottom of the header), once activated, it triggers the associated action (pinning of the header).
 *
 * ### Fast Navigation
 * - This component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or ` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up`.
 * In order to use this functionality, you need to import the following module:
 *
 * - `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents-fiori/dist/DynamicPage.js";`
 *
 * @constructor
 * @extends UI5Element
 * @since 2.0.0
 * @public
 * @csspart content - Used to style the content of the component
 * @csspart fit-content - Used to style the fit content container of the component.
 * @csspart footer - Used to style the footer of the component
 */
let DynamicPage = DynamicPage_1 = class DynamicPage extends UI5Element {
    constructor() {
        super();
        /**
         * Defines if the pin button is hidden.
         *
         * @default false
         * @public
         */
        this.hidePinButton = false;
        /**
         * Defines if the header is pinned.
         *
         * @default false
         * @public
         */
        this.headerPinned = false;
        /**
         * Defines if the footer is shown.
         *
         * @default false
         * @public
         */
        this.showFooter = false;
        this.skipSnapOnScroll = false;
        this.showHeaderInStickArea = false;
        this.isToggled = false;
        this._headerSnapped = false;
        this._updateMediaRange = this.updateMediaRange.bind(this);
    }
    onEnterDOM() {
        ResizeHandler.register(this, this._updateMediaRange);
    }
    onExitDOM() {
        ResizeHandler.deregister(this, this._updateMediaRange);
    }
    onBeforeRendering() {
        if (this.dynamicPageTitle) {
            this.dynamicPageTitle.snapped = this._headerSnapped;
            this.dynamicPageTitle.interactive = this.hasHeading;
            this.dynamicPageTitle.hasSnappedTitleOnMobile = !!this.hasSnappedTitleOnMobile;
            this.dynamicPageTitle.removeAttribute("hovered");
        }
    }
    get dynamicPageTitle() {
        return this.querySelector("[ui5-dynamic-page-title]");
    }
    get dynamicPageHeader() {
        return this.querySelector("[ui5-dynamic-page-header]");
    }
    get actionsInTitle() {
        return this._headerSnapped || this.showHeaderInStickArea || this.headerPinned;
    }
    get headerInTitle() {
        return !this._headerSnapped && (this.showHeaderInStickArea || this.headerPinned);
    }
    get headerInContent() {
        return !this.showHeaderInStickArea && !this.headerInTitle && !this.hasSnappedTitleOnMobile;
    }
    get _headerLabel() {
        return this._headerSnapped
            ? DynamicPage_1.i18nBundle.getText(DYNAMIC_PAGE_ARIA_LABEL_SNAPPED_HEADER)
            : DynamicPage_1.i18nBundle.getText(DYNAMIC_PAGE_ARIA_LABEL_EXPANDED_HEADER);
    }
    get _headerExpanded() {
        return !this._headerSnapped;
    }
    get _accAttributesForHeaderActions() {
        return {
            controls: `${this._id}-header`,
        };
    }
    get headerTabIndex() {
        return (this._headerSnapped || this.showHeaderInStickArea) ? -1 : 0;
    }
    get headerAriaHidden() {
        return (this._headerSnapped || this.showHeaderInStickArea);
    }
    get hasHeading() {
        return this.headerArea.length > 0;
    }
    get headerSnapped() {
        return this._headerSnapped;
    }
    get hasSnappedTitleOnMobile() {
        return isPhone() && this.headerSnapped && this.dynamicPageTitle?.snappedTitleOnMobile.length;
    }
    /**
     * Defines if the header is snapped.
     *
     * @default false
     * @public
     */
    set headerSnapped(snapped) {
        if (snapped !== this._headerSnapped) {
            this._toggleHeader();
        }
    }
    snapOnScroll() {
        debounce(() => this.snapTitleByScroll(), SCROLL_DEBOUNCE_RATE);
    }
    snapTitleByScroll() {
        if (!this.dynamicPageTitle || !this.dynamicPageHeader || this.headerPinned) {
            return;
        }
        if (this.isToggled) {
            this.isToggled = false;
            return;
        }
        if (this.skipSnapOnScroll) {
            this.skipSnapOnScroll = false;
            return;
        }
        const scrollTop = this.scrollContainer.scrollTop;
        const headerHeight = this.dynamicPageHeader.getBoundingClientRect().height;
        const lastHeaderSnapped = this._headerSnapped;
        const shouldSnap = !this._headerSnapped && scrollTop > headerHeight + SCROLL_THRESHOLD;
        const shouldExpand = this._headerSnapped && (scrollTop < headerHeight - SCROLL_THRESHOLD
            || (!scrollTop && !headerHeight));
        if (shouldSnap) {
            this.showHeaderInStickArea = false;
            this._headerSnapped = true;
            //* snappedTitleOnMobile
            // If the header is snapped and the scroll is at the top, scroll down a bit
            // to avoid ending in an endless loop of snapping and unsnapping
            requestAnimationFrame(() => {
                if (this.scrollContainer.scrollTop === 0) {
                    this.scrollContainer.scrollTop = SCROLL_THRESHOLD;
                }
            });
        }
        else if (shouldExpand) {
            this._headerSnapped = false;
        }
        // Fire event if snapped state changed
        if (lastHeaderSnapped !== this._headerSnapped) {
            this.fireDecoratorEvent("title-toggle");
        }
    }
    async onExpandClick() {
        this.isToggled = true;
        this._toggleHeader();
        this.fireDecoratorEvent("title-toggle");
        await renderFinished();
        this.headerActions?.focusExpandButton();
        if (this.hasSnappedTitleOnMobile) {
            this.dynamicPageTitle?.focus();
        }
        announce(this._headerLabel, InvisibleMessageMode.Polite);
    }
    async onPinClick() {
        this.headerPinned = !this.headerPinned;
        this.fireDecoratorEvent("pin-button-toggle");
        await renderFinished();
        this.headerActions?.focusPinButton();
    }
    async onToggleTitle() {
        if (!this.hasHeading) {
            return;
        }
        this.isToggled = true;
        this._toggleHeader();
        this.fireDecoratorEvent("title-toggle");
        await renderFinished();
        this.dynamicPageTitle.focus();
    }
    async _toggleHeader() {
        const headerHeight = this.dynamicPageHeader?.getBoundingClientRect().height || 0;
        const currentScrollTop = this.scrollContainer.scrollTop;
        if (currentScrollTop > SCROLL_THRESHOLD && currentScrollTop < headerHeight) {
            if (!this._headerSnapped) {
                this._headerSnapped = true;
                this.showHeaderInStickArea = true;
                this.scrollContainer.scrollTop = 0;
            }
            else {
                this.showHeaderInStickArea = false;
                this._headerSnapped = false;
            }
            return;
        }
        if (this.scrollContainer.scrollTop === SCROLL_THRESHOLD) {
            this.scrollContainer.scrollTop = 0;
        }
        this.showHeaderInStickArea = !this.showHeaderInStickArea;
        this._headerSnapped = !this._headerSnapped;
        this.skipSnapOnScroll = true;
        await renderFinished();
        if (this._headerSnapped && this.scrollContainer.scrollTop < SCROLL_THRESHOLD) {
            this.scrollContainer.scrollTop = SCROLL_THRESHOLD;
        }
    }
    async onExpandHoverIn() {
        this.dynamicPageTitle?.setAttribute("hovered", "");
        await renderFinished();
    }
    async onExpandHoverOut() {
        this.dynamicPageTitle?.removeAttribute("hovered");
        await renderFinished();
    }
    updateMediaRange() {
        this.mediaRange = MediaRange.getCurrentRange(MediaRange.RANGESETS.RANGE_4STEPS, this.getDomRef().offsetWidth);
    }
};
__decorate([
    property({ type: Boolean })
], DynamicPage.prototype, "hidePinButton", void 0);
__decorate([
    property({ type: Boolean })
], DynamicPage.prototype, "headerPinned", void 0);
__decorate([
    property({ type: Boolean })
], DynamicPage.prototype, "showFooter", void 0);
__decorate([
    property()
], DynamicPage.prototype, "mediaRange", void 0);
__decorate([
    slot({ "default": true, type: HTMLElement })
], DynamicPage.prototype, "content", void 0);
__decorate([
    slot({ type: DynamicPageTitle })
], DynamicPage.prototype, "titleArea", void 0);
__decorate([
    slot({ type: DynamicPageHeader })
], DynamicPage.prototype, "headerArea", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPage.prototype, "footerArea", void 0);
__decorate([
    property({ type: Boolean })
], DynamicPage.prototype, "_headerSnapped", void 0);
__decorate([
    query(".ui5-dynamic-page-scroll-container")
], DynamicPage.prototype, "scrollContainer", void 0);
__decorate([
    query("[ui5-dynamic-page-header-actions]")
], DynamicPage.prototype, "headerActions", void 0);
__decorate([
    property({ type: Boolean })
], DynamicPage.prototype, "headerSnapped", null);
__decorate([
    i18n("@ui5/webcomponents-fiori")
], DynamicPage, "i18nBundle", void 0);
DynamicPage = DynamicPage_1 = __decorate([
    customElement({
        tag: "ui5-dynamic-page",
        renderer: jsxRenderer,
        styles: DynamicPageCss,
        template: DynamicPageTemplate,
    })
    /**
     * Fired when the pin header button is toggled.
     *
     * @public
     */
    ,
    event("pin-button-toggle", {
        bubbles: true,
    })
    /**
     * Fired when the expand/collapse area of the title is toggled.
     *
     * @public
     */
    ,
    event("title-toggle", {
        bubbles: true,
    })
], DynamicPage);
DynamicPage.define();
export default DynamicPage;
//# sourceMappingURL=DynamicPage.js.map