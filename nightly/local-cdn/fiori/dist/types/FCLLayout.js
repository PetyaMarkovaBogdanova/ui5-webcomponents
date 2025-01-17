/**
 * Different types of FCLLayout.
 * @public
 */
var FCLLayout;
(function (FCLLayout) {
    /**
     * The layout will display 1 column.
     * @public
     */
    FCLLayout["OneColumn"] = "OneColumn";
    /**
     *
     * Desktop: Defaults to 67 - 33 - -- percent widths of columns. Start (expanded) and Mid columns are displayed.
     * Tablet:  Defaults to 67 - 33 - -- percent widths of columns. Start (expanded) and Mid columns are displayed.
     * Phone:   Fixed -- 100 -- percent widths of columns, only the Mid column is displayed
     *
     * Use to display both a list and a detail page when the user should focus on the list page.
     * @public
     */
    FCLLayout["TwoColumnsStartExpanded"] = "TwoColumnsStartExpanded";
    /**
     * Desktop: Defaults to 33 - 67 - -- percent widths of columns. Start and Mid (expanded) columns are displayed
     * Tablet:  Defaults to 33 - 67 - -- percent widths of columns. Start and Mid (expanded) columns are displayed
     * Phone:   Fixed -- 100 -- percent widths of columns, only the Mid column is displayed
     *
     * Use to display both a list and a detail page when the user should focus on the detail page.
     * @public
     */
    FCLLayout["TwoColumnsMidExpanded"] = "TwoColumnsMidExpanded";
    /**
     * Desktop: Defaults to 25 - 50 - 25 percent widths of columns. Start, Mid (expanded) and End columns are displayed
     * Tablet:  Defaults to 0 - 67 - 33 percent widths of columns. Mid (expanded) and End columns are displayed, Start is accessible by dragging the columns-separator
     * Phone:   Fixed -- -- 100 percent widths of columns, only the End column is displayed
     *
     * Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail.
     * @public
     */
    FCLLayout["ThreeColumnsMidExpanded"] = "ThreeColumnsMidExpanded";
    /**
     * Desktop: Defaults to 25 - 25 - 50 percent widths of columns. Start, Mid and End (expanded) columns are displayed
     * Tablet:  Defaults to 0 - 33 - 67 percent widths of columns. Mid and End (expanded) columns are displayed, Start is accessible by dragging the columns-separator
     * Phone:   Fixed -- -- 100 percent widths of columns (only the End column is displayed)
     *
     * Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail-detail.
     * @public
     */
    FCLLayout["ThreeColumnsEndExpanded"] = "ThreeColumnsEndExpanded";
    /**
     * Desktop: Defaults to 67 - 33 - 0 percent widths of columns. Start (expanded) and Mid columns are displayed, End is accessible by dragging the columns-separator
     * Tablet:  Defaults to 67 - 33 - 0 percent widths of columns. Start (expanded) and Mid columns are displayed, End is accessible by dragging the columns-separator
     * Phone:   Fixed -- -- 100 percent widths of columns, only the End column is displayed
     *
     * Use to display the list and detail pages when the user should focus on the list.
     * The detail-detail is still loaded and easily accessible by dragging the columns-separator
     * @public
     */
    FCLLayout["ThreeColumnsStartExpandedEndHidden"] = "ThreeColumnsStartExpandedEndHidden";
    /**
     * Desktop: Defaults to 33 - 67 - 0 percent widths of columns. Start and Mid (expanded) columns are displayed, End is accessible by dragging the columns-separator
     * Tablet:  Defaults to 33 - 67 - 0 percent widths of columns. Start and Mid (expanded) columns are displayed, End is accessible by dragging the columns-separator
     * Phone:   Fixed -- -- 100 percent widths of columns, only the End column is displayed
     *
     * Use to display the list and detail pages when the user should focus on the detail.
     * The detail-detail is still loaded and easily accessible by dragging the columns-separator
     * @public
     */
    FCLLayout["ThreeColumnsMidExpandedEndHidden"] = "ThreeColumnsMidExpandedEndHidden";
    /**
     * Desktop: Fixed -- 100 -- percent widths of columns, only the Mid column is displayed
     * Tablet:  Fixed -- 100 -- percent widths of columns, only the Mid column is displayed
     * Phone:   Fixed -- 100 -- percent widths of columns, only the Mid column is displayed
     *
     * Use to display a detail page only, when the user should focus entirely on it.
     * @public
     */
    FCLLayout["MidColumnFullScreen"] = "MidColumnFullScreen";
    /**
     * Desktop: Fixed -- -- 100 percent widths of columns, only the End column is displayed
     * Tablet:  Fixed -- -- 100 percent widths of columns, only the End column is displayed
     * Phone:   Fixed -- -- 100 percent widths of columns, only the End column is displayed
     *
     * Use to display a detail-detail page only, when the user should focus entirely on it.
     * @public
     */
    FCLLayout["EndColumnFullScreen"] = "EndColumnFullScreen";
})(FCLLayout || (FCLLayout = {}));
export default FCLLayout;
//# sourceMappingURL=FCLLayout.js.map