import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type TableCellHorizontalAlign from "./types/TableCellHorizontalAlign.js";
/**
 * @class
 * A class to serve as a foundation for the `TableCell` and `TableHeaderCell` classes.
 * @constructor
 * @abstract
 * @extends UI5Element
 * @since 2.0.0
 * @public
 */
declare abstract class TableCellBase extends UI5Element {
    /**
     * Defines the content of the component.
     * @public
     */
    content: Array<Node>;
    _popin: boolean;
    /**
     * Determines the horizontal alignment of table cells.
     * **Note:** All values valid for justify-content can be used, not just the ones inside the enumeration.
     * @default undefined
     * @public
     */
    horizontalAlign?: `${TableCellHorizontalAlign}`;
    _individualSlot?: string;
    protected ariaRole: string;
    static i18nBundle: I18nBundle;
    onEnterDOM(): void;
    onBeforeRendering(): void;
    getFocusDomRef(): this;
    isTableCellBase(): boolean;
}
export default TableCellBase;