/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<div class="ui5-wiz-step-root" role="listitem" tabindex="${ifDefined(this.effectiveTabIndex)}" aria-current="${ifDefined(this.accInfo.ariaCurrent)}" aria-setsize="${ifDefined(this.accInfo.ariaSetsize)}" aria-posinset="${ifDefined(this.accInfo.ariaPosinset)}" aria-label="${ifDefined(this.accInfo.ariaLabel)}" @click="${this._onclick}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}"><div class="ui5-wiz-step-main"><div class="ui5-wiz-step-icon-circle">${this.icon ? block1.call(this, context, tags, suffix) : block2.call(this, context, tags, suffix)}</div>${this.hasTexts ? block3.call(this, context, tags, suffix) : undefined}</div>${!this.hideSeparator ? block4.call(this, context, tags, suffix) : undefined}</div>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-icon", tags, suffix)} class="ui5-wiz-step-icon" mode="Decorative" name="${ifDefined(this.icon)}"></${scopeTag("ui5-icon", tags, suffix)}>` : html `<ui5-icon class="ui5-wiz-step-icon" mode="Decorative" name="${ifDefined(this.icon)}"></ui5-icon>`; }
function block2(context, tags, suffix) { return html `<span class="ui5-wiz-step-number">${ifDefined(this.number)}</span>`; }
function block3(context, tags, suffix) { return html `<div class="ui5-wiz-step-texts"><div class="ui5-wiz-step-title-text">${ifDefined(this.titleText)}</div><div class="ui5-wiz-step-subtitle-text">${ifDefined(this.subtitleText)}</div></div>`; }
function block4(context, tags, suffix) { return html `<div class="ui5-wiz-step-hr"></div>`; }
export default block0;
//# sourceMappingURL=WizardTabTemplate.lit.js.map