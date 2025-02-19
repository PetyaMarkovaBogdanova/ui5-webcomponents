var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Timeline_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import i18n from "@ui5/webcomponents-base/dist/decorators/i18n.js";
import jsxRenderer from "@ui5/webcomponents-base/dist/renderer/JsxRenderer.js";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import { isTabNext, isTabPrevious, isSpace, isEnter, isUp, isDown, isLeft, isRight, } from "@ui5/webcomponents-base/dist/Keys.js";
import "./TimelineItem.js";
import ItemNavigation from "@ui5/webcomponents-base/dist/delegate/ItemNavigation.js";
import NavigationMode from "@ui5/webcomponents-base/dist/types/NavigationMode.js";
import { TIMELINE_ARIA_LABEL } from "./generated/i18n/i18n-defaults.js";
import TimelineTemplate from "./TimelineTemplate.js";
import event from "@ui5/webcomponents-base/dist/decorators/event-strict.js";
import debounce from "@ui5/webcomponents-base/dist/util/debounce.js";
import query from "@ui5/webcomponents-base/dist/decorators/query.js";
import process from "@ui5/webcomponents-icons/dist/process.js";
import drillDown from "@ui5/webcomponents-icons/dist/drill-down.js";
// Styles
import TimelineCss from "./generated/themes/Timeline.css.js";
import TimelineLayout from "./types/TimelineLayout.js";
// Mode
import TimelineGrowingMode from "./types/TimelineGrowingMode.js";
const SHORT_LINE_WIDTH = "ShortLineWidth";
const LARGE_LINE_WIDTH = "LargeLineWidth";
const GROWING_WITH_SCROLL_DEBOUNCE_RATE = 250; // ms
/**
 * @class
 *
 * ### Overview
 *
 * The `ui5-timeline` component shows entries (such as objects, events, or posts) in chronological order.
 * A common use case is to provide information about changes to an object, or events related to an object.
 * These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
 * There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
 * while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.
 * @constructor
 * @extends UI5Element
 * @public
 * @since 0.8.0
 */
let Timeline = Timeline_1 = class Timeline extends UI5Element {
    constructor() {
        super();
        /**
         * Defines the items orientation.
         * @default "Vertical"
         * @since 1.0.0-rc.15
         * @public
         */
        this.layout = "Vertical";
        /**
         * Defines if the component should display a loading indicator over the Timeline.
         *
         * @default false
         * @since 2.7.0
         * @public
         */
        this.loading = false;
        /**
         * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
         * @default 1000
         * @public
         */
        this.loadingDelay = 1000;
        /**
         * Defines whether the Timeline will have growing capability either by pressing a "More" button,
         * or via user scroll. In both cases a `load-more` event is fired.
         *
         * Available options:
         *
         * `Button` - Displays a button at the end of the Timeline, which when pressed triggers the `load-more` event.
         *
         * `Scroll` -Triggers the `load-more` event when the user scrolls to the end of the Timeline.
         *
         * `None` (default) - The growing functionality is off.
         *
         * @default "None"
         * @since 2.7.0
         * @public
         */
        this.growing = "None";
        /**
         * Defines the active state of the `More` button.
         * @private
         */
        this._loadMoreActive = false;
        this.timeLineEndObserved = false;
        this.initialIntersection = true;
        this._itemNavigation = new ItemNavigation(this, {
            getItemsCallback: () => this._navigableItems,
        });
    }
    get ariaLabel() {
        return this.accessibleName
            ? `${Timeline_1.i18nBundle.getText(TIMELINE_ARIA_LABEL)} ${this.accessibleName}`
            : Timeline_1.i18nBundle.getText(TIMELINE_ARIA_LABEL);
    }
    get showBusyIndicatorOverlay() {
        return !this.growsWithButton && this.loading;
    }
    get growsOnScroll() {
        return this.growing === TimelineGrowingMode.Scroll;
    }
    get growingButtonIcon() {
        return this.layout === TimelineLayout.Horizontal ? process : drillDown;
    }
    get growsWithButton() {
        return this.growing === TimelineGrowingMode.Button;
    }
    onAfterRendering() {
        if (this.growsOnScroll) {
            this.observeTimelineEnd();
        }
        else if (this.timeLineEndObserved) {
            this.unobserveTimelineEnd();
        }
        this.growingIntersectionObserver = this.getIntersectionObserver();
    }
    onExitDOM() {
        this.unobserveTimelineEnd();
    }
    async observeTimelineEnd() {
        if (!this.timeLineEndObserved) {
            await renderFinished();
            this.getIntersectionObserver().observe(this.timelineEndMarker);
            this.timeLineEndObserved = true;
        }
    }
    unobserveTimelineEnd() {
        if (this.growingIntersectionObserver) {
            this.growingIntersectionObserver.disconnect();
            this.growingIntersectionObserver = null;
            this.timeLineEndObserved = false;
        }
    }
    getIntersectionObserver() {
        if (!this.growingIntersectionObserver) {
            this.growingIntersectionObserver = new IntersectionObserver(this.onIntersection.bind(this), {
                root: null,
                threshold: 1.0,
            });
        }
        return this.growingIntersectionObserver;
    }
    onIntersection(entries) {
        if (this.initialIntersection) {
            this.initialIntersection = false;
            return;
        }
        if (entries.some(entry => entry.isIntersecting)) {
            debounce(this.loadMore.bind(this), GROWING_WITH_SCROLL_DEBOUNCE_RATE);
        }
    }
    loadMore() {
        this.fireDecoratorEvent("load-more");
    }
    _onLoadMoreKeydown(e) {
        if (isSpace(e)) {
            e.preventDefault();
            this._loadMoreActive = true;
        }
        if (isEnter(e)) {
            this._onLoadMoreClick();
            this._loadMoreActive = true;
        }
    }
    _onLoadMoreKeyup(e) {
        if (isSpace(e)) {
            this._onLoadMoreClick();
        }
        this._loadMoreActive = false;
    }
    _onLoadMoreClick() {
        this.fireDecoratorEvent("load-more");
    }
    _onfocusin(e) {
        let target = e.target;
        if (target.isGroupItem) {
            target = target.shadowRoot.querySelector("[ui5-toggle-button]");
        }
        this._itemNavigation.setCurrentItem(target);
    }
    onBeforeRendering() {
        this._itemNavigation._navigationMode = this.layout === TimelineLayout.Horizontal ? NavigationMode.Horizontal : NavigationMode.Vertical;
        if (!this.items.length) {
            return;
        }
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].layout = this.layout;
            if (this.items[i + 1] && !!this.items[i + 1].icon) {
                this.items[i].forcedLineWidth = SHORT_LINE_WIDTH;
            }
            else if (this.items[i].icon && this.items[i + 1] && !this.items[i + 1].icon) {
                this.items[i].forcedLineWidth = LARGE_LINE_WIDTH;
            }
        }
        this._setLastItem();
        this._setIsNextItemGroup();
        this.items[0].firstItemInTimeline = true;
    }
    _setLastItem() {
        const items = this.items;
        for (let i = 0; i < items.length; i++) {
            items[i].lastItem = false;
        }
        if (items.length > 0) {
            items[items.length - 1].lastItem = true;
        }
    }
    _setIsNextItemGroup() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].isNextItemGroup = false;
        }
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i + 1] && this.items[i + 1].isGroupItem) {
                this.items[i].isNextItemGroup = true;
            }
        }
    }
    _onkeydown(e) {
        const target = e.target;
        if (isDown(e) || isRight(e)) {
            this._handleDown();
            e.preventDefault();
            return;
        }
        if (isUp(e) || isLeft(e)) {
            this._handleUp(e);
            e.preventDefault();
            return;
        }
        if (target.nameClickable && !target.getFocusDomRef().matches(":has(:focus-within)")) {
            return;
        }
        if (isTabNext(e)) {
            this._handleNextOrPreviousItem(e, true);
        }
        else if (isTabPrevious(e)) {
            this._handleNextOrPreviousItem(e);
        }
    }
    _handleNextOrPreviousItem(e, isNext) {
        const target = e.target;
        let updatedTarget = target;
        if (target.isGroupItem) {
            updatedTarget = target.shadowRoot.querySelector("[ui5-toggle-button]");
        }
        const nextTargetIndex = isNext ? this._navigableItems.indexOf(updatedTarget) + 1 : this._navigableItems.indexOf(updatedTarget) - 1;
        const nextTarget = this._navigableItems[nextTargetIndex];
        if (!nextTarget) {
            return;
        }
        if (nextTarget) {
            e.preventDefault();
            nextTarget.focus();
            this._itemNavigation.setCurrentItem(nextTarget);
        }
    }
    _handleDown() {
        if (this.growsWithButton) {
            this.focusGrowingButton();
        }
    }
    focusGrowingButton() {
        const items = this._navigableItems;
        const lastIndex = items.length - 1;
        const currentIndex = this._itemNavigation._currentIndex;
        if (currentIndex !== -1 && currentIndex === lastIndex) {
            this.growingButton?.focus();
        }
    }
    _handleUp(e) {
        if (this.growingButton === e.target) {
            const items = this._navigableItems;
            const lastItem = items[items.length - 1];
            this.focusItem(lastItem);
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }
    /**
     * Focuses a list item and sets its tabindex to "0" via the ItemNavigation
     * @protected
     * @param item
     */
    focusItem(item) {
        this._itemNavigation.setCurrentItem(item);
        item.focus();
    }
    get _navigableItems() {
        const navigatableItems = [];
        if (!this.items.length) {
            return [];
        }
        this.items.forEach(item => {
            if (!item.isGroupItem) {
                navigatableItems.push(item);
                return;
            }
            const navigatableItem = item.shadowRoot.querySelector("[ui5-toggle-button]");
            if (navigatableItem) {
                navigatableItems.push(navigatableItem);
            }
            if (!item.collapsed) {
                item.items?.forEach(groupItem => {
                    navigatableItems.push(groupItem);
                });
            }
        });
        return navigatableItems;
    }
};
__decorate([
    property()
], Timeline.prototype, "layout", void 0);
__decorate([
    property()
], Timeline.prototype, "accessibleName", void 0);
__decorate([
    property({ type: Boolean })
], Timeline.prototype, "loading", void 0);
__decorate([
    property({ type: Number })
], Timeline.prototype, "loadingDelay", void 0);
__decorate([
    property()
], Timeline.prototype, "growing", void 0);
__decorate([
    property({ type: Boolean })
], Timeline.prototype, "_loadMoreActive", void 0);
__decorate([
    slot({ type: HTMLElement, individualSlots: true, "default": true })
], Timeline.prototype, "items", void 0);
__decorate([
    query(".ui5-timeline-end-marker")
], Timeline.prototype, "timelineEndMarker", void 0);
__decorate([
    query((`[id="ui5-timeline-growing-btn"]`))
], Timeline.prototype, "growingButton", void 0);
__decorate([
    i18n("@ui5/webcomponents-fiori")
], Timeline, "i18nBundle", void 0);
Timeline = Timeline_1 = __decorate([
    customElement({
        tag: "ui5-timeline",
        languageAware: true,
        renderer: jsxRenderer,
        styles: TimelineCss,
        template: TimelineTemplate,
    })
    /**
     * Fired when the user presses the `More` button or scrolls to the Timeline's end.
     *
     * **Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.
     * @public
     * @since 2.7.0
     */
    ,
    event("load-more", {
        bubbles: true,
    })
], Timeline);
Timeline.define();
export default Timeline;
//# sourceMappingURL=Timeline.js.map