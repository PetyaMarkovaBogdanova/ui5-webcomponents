/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${ifDefined(this.onItemPress)} @ui5-close=${ifDefined(this.onItemClose)} @ui5-toggle=${ifDefined(this.onItemToggle)} @ui5-_request-tabindex-change=${ifDefined(this.onItemTabIndexChange)} @ui5-_focused=${ifDefined(this.onItemFocused)} @ui5-_forward-after=${ifDefined(this.onForwardAfter)} @ui5-_forward-before=${ifDefined(this.onForwardBefore)} @ui5-_selection-requested=${ifDefined(this.onSelectionRequested)} @ui5-_focus-requested=${ifDefined(this.onFocusRequested)}><${scopeTag("ui5-busy-indicator", tags, suffix)} id="${ifDefined(this._id)}-busyIndicator" delay="${ifDefined(this.loadingDelay)}" ?active="${this.showBusyIndicatorOverlay}" class="ui5-list-busy-indicator"><div class="ui5-list-scroll-container">${this.header.length ? block1.call(this, context, tags, suffix) : undefined}${this.shouldRenderH1 ? block2.call(this, context, tags, suffix) : undefined}${this.hasData ? block3.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-modeLabel" class="ui5-hidden-text">${ifDefined(this.ariaLabelModeText)}</span><ul id="${ifDefined(this._id)}-listUl" class="ui5-list-ul" role="${ifDefined(this.listAccessibleRole)}" aria-label="${ifDefined(this.ariaLabelTxt)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}"><slot></slot>${this.showNoDataText ? block4.call(this, context, tags, suffix) : undefined}</ul>${this.growsWithButton ? block5.call(this, context, tags, suffix) : undefined}${this.footerText ? block7.call(this, context, tags, suffix) : undefined}${this.hasData ? block8.call(this, context, tags, suffix) : undefined}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div><${scopeTag("ui5-drop-indicator", tags, suffix)} orientation="Horizontal" .ownerReference="${ifDefined(this)}"></${scopeTag("ui5-drop-indicator", tags, suffix)}></${scopeTag("ui5-busy-indicator", tags, suffix)}></div> ` : html `<div class="${classMap(this.classes.root)}" @focusin="${this._onfocusin}" @keydown="${this._onkeydown}" @dragenter="${this._ondragenter}" @dragover="${this._ondragover}" @drop="${this._ondrop}" @dragleave="${this._ondragleave}" @ui5-_press=${ifDefined(this.onItemPress)} @ui5-close=${ifDefined(this.onItemClose)} @ui5-toggle=${ifDefined(this.onItemToggle)} @ui5-_request-tabindex-change=${ifDefined(this.onItemTabIndexChange)} @ui5-_focused=${ifDefined(this.onItemFocused)} @ui5-_forward-after=${ifDefined(this.onForwardAfter)} @ui5-_forward-before=${ifDefined(this.onForwardBefore)} @ui5-_selection-requested=${ifDefined(this.onSelectionRequested)} @ui5-_focus-requested=${ifDefined(this.onFocusRequested)}><ui5-busy-indicator id="${ifDefined(this._id)}-busyIndicator" delay="${ifDefined(this.loadingDelay)}" ?active="${this.showBusyIndicatorOverlay}" class="ui5-list-busy-indicator"><div class="ui5-list-scroll-container">${this.header.length ? block1.call(this, context, tags, suffix) : undefined}${this.shouldRenderH1 ? block2.call(this, context, tags, suffix) : undefined}${this.hasData ? block3.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-modeLabel" class="ui5-hidden-text">${ifDefined(this.ariaLabelModeText)}</span><ul id="${ifDefined(this._id)}-listUl" class="ui5-list-ul" role="${ifDefined(this.listAccessibleRole)}" aria-label="${ifDefined(this.ariaLabelTxt)}" aria-labelledby="${ifDefined(this.ariaLabelledBy)}"><slot></slot>${this.showNoDataText ? block4.call(this, context, tags, suffix) : undefined}</ul>${this.growsWithButton ? block5.call(this, context, tags, suffix) : undefined}${this.footerText ? block7.call(this, context, tags, suffix) : undefined}${this.hasData ? block8.call(this, context, tags, suffix) : undefined}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div><ui5-drop-indicator orientation="Horizontal" .ownerReference="${ifDefined(this)}"></ui5-drop-indicator></ui5-busy-indicator></div> `; }
function block1(context, tags, suffix) { return html `<slot name="header" />`; }
function block2(context, tags, suffix) { return html `<header id="${ifDefined(this.headerID)}" class="ui5-list-header">${ifDefined(this.headerText)}</header>`; }
function block3(context, tags, suffix) { return html `<div id="${ifDefined(this._id)}-before" tabindex="0" role="none" class="ui5-list-focusarea"></div>`; }
function block4(context, tags, suffix) { return html `<li tabindex="0" id="${ifDefined(this._id)}-nodata" class="ui5-list-nodata"><div id="${ifDefined(this._id)}-nodata-text" class="ui5-list-nodata-text">${ifDefined(this.noDataText)}</div></li>`; }
function block5(context, tags, suffix) { return html `<div growing-button part="growing-button"><div part="growing-button-inner" tabindex="0" role="button" id="${ifDefined(this._id)}-growing-btn" aria-labelledby="${ifDefined(this._id)}-growingButton-text" ?active="${this._loadMoreActive}" @click="${this._onLoadMoreClick}" @keydown="${this._onLoadMoreKeydown}" @keyup="${this._onLoadMoreKeyup}" @mousedown="${this._onLoadMoreMousedown}" @mouseup="${this._onLoadMoreMouseup}" growing-button-inner>${this.loading ? block6.call(this, context, tags, suffix) : undefined}<span id="${ifDefined(this._id)}-growingButton-text" growing-button-text>${ifDefined(this._growingButtonText)}</span></div></div>`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-busy-indicator", tags, suffix)} delay="${ifDefined(this.loadingDelay)}" active></${scopeTag("ui5-busy-indicator", tags, suffix)}>` : html `<ui5-busy-indicator delay="${ifDefined(this.loadingDelay)}" active></ui5-busy-indicator>`; }
function block7(context, tags, suffix) { return html `<footer id="${ifDefined(this._id)}-footer" class="ui5-list-footer">${ifDefined(this.footerText)}</footer>`; }
function block8(context, tags, suffix) { return html `<div id="${ifDefined(this._id)}-after" tabindex="0" role="none" class="ui5-list-focusarea"></div>`; }
export default block0;
//# sourceMappingURL=ListTemplate.lit.js.map