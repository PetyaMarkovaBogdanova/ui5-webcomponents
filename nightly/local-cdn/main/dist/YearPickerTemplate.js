import { jsx as _jsx, jsxs as _jsxs } from "@ui5/webcomponents-base/jsx-runtime";
export default function YearPickerTemplate() {
    return (_jsx("div", { class: "ui5-yp-root", role: "grid", "aria-roledescription": this.roleDescription, "aria-readonly": "false", "aria-multiselectable": "false", onMouseOver: this._onmouseover, onKeyDown: this._onkeydown, onKeyUp: this._onkeyup, onClick: this._selectYear, children: this._yearsInterval.map(years => _jsx("div", { role: "row", class: "ui5-yp-interval-container", children: years.map(year => _jsxs("div", { "data-sap-timestamp": year.timestamp, tabindex: year._tabIndex, "data-sap-focus-ref": year.focusRef ? "true" : undefined, class: year.classes, part: year.parts, role: "gridcell", "aria-selected": year.ariaSelected, "aria-disabled": year.ariaDisabled, children: [_jsx("span", { class: "ui5-dp-yeartext", children: year.year }), year.yearInSecType &&
                        _jsx("span", { class: "ui5-yp-year-sec-type", children: year.yearInSecType })] })) })) }));
}
//# sourceMappingURL=YearPickerTemplate.js.map