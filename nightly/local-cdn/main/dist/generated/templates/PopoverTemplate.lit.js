/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${styleMap(this.styles.root)}" class="${classMap(this.classes.root)}" role="${ifDefined(this._role)}" aria-modal="${ifDefined(this._ariaModal)}" aria-label="${ifDefined(this._ariaLabel)}" aria-labelledby="${ifDefined(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${styleMap(this.styles.arrow)}"></span>${this._displayHeader ? block1.call(this, context, tags, suffix) : undefined}<div style="${styleMap(this.styles.content)}" class="${classMap(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter ? block4.call(this, context, tags, suffix) : undefined}<span class="last-fe" data-ui5-focus-trap role="none" tabindex="0" @focusin=${this.forwardToFirst}></span></section> `; }
function block1(context, tags, suffix) { return html `<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length ? block2.call(this, context, tags, suffix) : block3.call(this, context, tags, suffix)}</header>`; }
function block2(context, tags, suffix) { return html `<slot name="header"></slot>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-title", tags, suffix)} level="H1" class="ui5-popup-header-text">${ifDefined(this.headerText)}</${scopeTag("ui5-title", tags, suffix)}>` : html `<ui5-title level="H1" class="ui5-popup-header-text">${ifDefined(this.headerText)}</ui5-title>`; }
function block4(context, tags, suffix) { return html `${this.footer.length ? block5.call(this, context, tags, suffix) : undefined}`; }
function block5(context, tags, suffix) { return html `<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`; }
export default block0;
//# sourceMappingURL=PopoverTemplate.lit.js.map