import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ITimelineItem } from "./Timeline.js";
import TimelineLayout from "./types/TimelineLayout.js";
/**
 * @class
 *
 * ### Overview
 *
 * An entry posted on the timeline.
 * @constructor
 * @extends UI5Element
 * @implements { ITimelineItem }
 * @public
 */
declare class TimelineItem extends UI5Element implements ITimelineItem {
    /**
     * Defines the icon to be displayed as graphical element within the `ui5-timeline-item`.
     * SAP-icons font provides numerous options.
     *
     * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
     * @default undefined
     * @public
     */
    icon?: string;
    /**
     * Defines the name of the item, displayed before the `title-text`.
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * Defines if the `name` is clickable.
     * @default false
     * @public
     */
    nameClickable: boolean;
    /**
     * Defines the title text of the component.
     * @default undefined
     * @public
     */
    titleText?: string;
    /**
     * Defines the subtitle text of the component.
     * @default undefined
     * @public
     */
    subtitleText?: string;
    /**
     * Defines the content of the `ui5-timeline-item`.
     * @public
     */
    content: Array<Node>;
    /**
     * @private
     */
    firstItemInTimeline: boolean;
    /**
     * @private
     */
    isNextItemGroup: boolean;
    forcedTabIndex: string;
    /**
     * Defines the items orientation.
     * @default "Vertical"
     * @private
     */
    layout: `${TimelineLayout}`;
    /**
     * Defines the indicator line width.
     * @private
     */
    forcedLineWidth?: string;
    /**
     * @private
     */
    hideBubble: boolean;
    /**
     * Marks the last `<ui5-timeline-item>`
     * @private
     */
    lastItem: boolean;
    /**
     * @private
     */
    hidden: boolean;
    /**
     * Defines the position of the item in a group.
     * @private
     */
    positionInGroup?: number;
    constructor();
    onNamePress(): void;
    /**
     * Focus the internal link.
     */
    focusLink(): void;
    get classes(): {
        indicator: {
            "ui5-tli-indicator": boolean;
            "ui5-tli-indicator-short-line": boolean;
            "ui5-tli-indicator-large-line": boolean;
        };
        bubbleArrowPosition: {
            "ui5-tli-bubble-arrow": boolean;
            "ui5-tli-bubble-arrow--left": boolean;
            "ui5-tli-bubble-arrow--top": boolean;
        };
    };
    get isGroupItem(): boolean;
}
export default TimelineItem;