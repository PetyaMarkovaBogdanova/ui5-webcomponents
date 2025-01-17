import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@ui5/webcomponents-base/jsx-runtime";
import Dialog from "@ui5/webcomponents/dist/Dialog.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import Title from "@ui5/webcomponents/dist/Title.js";
import SegmentedButton from "@ui5/webcomponents/dist/SegmentedButton.js";
import SegmentedButtonItem from "@ui5/webcomponents/dist/SegmentedButtonItem.js";
import List from "@ui5/webcomponents/dist/List.js";
import ListItemGroup from "@ui5/webcomponents/dist/ListItemGroup.js";
import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard.js";
import navBackIcon from "@ui5/webcomponents-icons/dist/nav-back.js";
import sortIcon from "@ui5/webcomponents-icons/dist/sort.js";
import filterIcon from "@ui5/webcomponents-icons/dist/filter.js";
function ViewSettingsDialogTemplateHeader() {
    return (_jsxs("div", { slot: "header", class: "ui5-vsd-header", children: [_jsxs("div", { class: "ui5-vsd-header-container", children: [_jsxs("div", { class: "ui5-vsd-header-start", children: [this.showBackButton && (_jsx(Button, { design: "Transparent", icon: navBackIcon, class: "ui5-vsd-back-button", onClick: this._navigateToFilters })), _jsx(Title, { wrappingType: "None", level: "H1", class: "ui5-vsd-title", id: `${this._id}-label`, children: this._title })] }), _jsx("div", { class: "ui5-vsd-header-end", children: _jsx(Button, { design: "Transparent", onClick: this._resetSettings, disabled: this._disableResetButton, children: this._resetButtonLabel }) })] }), !this.showBackButton && this.hasPagination && (_jsx("div", { class: "ui5-vsd-sub-header-container", children: _jsx("div", { class: "ui5-vsd-sub-header", children: _jsxs(SegmentedButton, { onSelectionChange: this._handleModeChange, children: [_jsx(SegmentedButtonItem, { selected: this.isModeSort, icon: sortIcon, "data-mode": "Sort", tooltip: this._sortButtonTooltip }), _jsx(SegmentedButtonItem, { selected: this.isModeFilter, icon: filterIcon, "data-mode": "Filter", tooltip: this._filterButtonTooltip })] }) }) }))] }));
}
function ViewSettingsDialogTemplateContent() {
    return (_jsxs("div", { class: {
            "ui5-vsd-content": true,
            "ui5-vsd-content-expand": this.expandContent,
        }, children: [this.shouldBuildSort && this.isModeSort && (_jsxs("div", { class: "ui5-vsd-sort", children: [_jsx(List, { selectionMode: "SingleStart", onItemClick: this._onSortOrderChange, "sort-order": "", accessibleNameRef: `${this._id}-label`, children: _jsx(ListItemGroup, { headerText: this._sortOrderLabel, children: this._currentSettings.sortOrder.map(item => (_jsx(ListItemStandard, { selected: item.selected, children: item.text }))) }) }), _jsx(List, { selectionMode: "SingleStart", onItemClick: this._onSortByChange, "sort-by": "", children: _jsx(ListItemGroup, { headerText: this._sortByLabel, children: this._currentSettings.sortBy.map((item, index) => (_jsx(ListItemStandard, { "data-ui5-external-action-item-index": index, selected: item.selected, children: item.text }))) }) })] })), this.shouldBuildFilter && this.isModeFilter && (_jsx(_Fragment, { children: this._filterStepTwo ? (_jsx(List, { selectionMode: "Multiple", onItemClick: this._handleFilterValueItemClick, accessibleNameRef: `${this._id}-label`, children: this._currentSettings.filters.filter(item => item.selected).map(item => (_jsx(_Fragment, { children: item.filterOptions.map(option => (_jsx(ListItemStandard, { selected: option.selected, children: option.text }))) }))) })) : ( // else
                _jsx(List, { onItemClick: this._changeCurrentFilter, accessibleNameRef: `${this._id}-label`, children: _jsx(ListItemGroup, { headerText: this._filterByLabel, children: this.filterItems.map(item => (_jsx(ListItemStandard, { class: "ui5-vsd-filterItemList", 
                            // selected={item.selected} TODO
                            additionalText: item.additionalText, children: item.text }))) }) })) }))] }));
}
function ViewSettingsDialogTemplateFooter() {
    return (_jsxs("div", { slot: "footer", class: "ui5-vsd-footer", children: [_jsx(Button, { design: "Emphasized", onClick: this._confirmSettings, children: this._okButtonLabel }), _jsx(Button, { design: "Transparent", onClick: this._cancelSettings, children: this._cancelButtonLabel })] }));
}
export default function ViewSettingsDialogTemplate() {
    return (_jsxs(Dialog, { preventInitialFocus: true, "aria-label": this._dialogTitle, onBeforeClose: this._restoreConfirmedOnEscape, stretch: this._isPhone, open: this.open, onBeforeOpen: this.beforeDialogOpen, onOpen: this.afterDialogOpen, onClose: this.afterDialogClose, children: [ViewSettingsDialogTemplateHeader.call(this), ViewSettingsDialogTemplateContent.call(this), ViewSettingsDialogTemplateFooter.call(this)] }));
}
//# sourceMappingURL=ViewSettingsDialogTemplate.js.map