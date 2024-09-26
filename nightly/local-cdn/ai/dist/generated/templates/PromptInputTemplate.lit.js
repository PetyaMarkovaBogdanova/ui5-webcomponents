/* eslint no-unused-vars: 0 */
import { html, ifDefined, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<div class="ai-prompt-input-wrapper">${this.label ? block1.call(this, context, tags, suffix) : undefined}<div class="ai-prompt-input-form-wrapper"><div class="ai-prompt-inner-input-wrapper"><${scopeTag("ui5-input", tags, suffix)} id="input" .value="${ifDefined(this.value)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this.valueState)}" ?show-clear-icon=${this.showClearIcon} ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?show-suggestions="${this.showSuggestions}" @keydown="${this._onkeydown}" @ui5-input="${ifDefined(this._onInnerInput)}" @ui5-change="${ifDefined(this._onInnerChange)}" @ui5-type-ahead="${ifDefined(this._onTypeAhead)}"><slot></slot>${this.valueStateMessage.length ? block2.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-input", tags, suffix)}>${this.showExceededText ? block3.call(this, context, tags, suffix) : undefined}</div><${scopeTag("ui5-button", tags, suffix)} ?disabled=${this._submitButtonDisabled} class="ai-prompt-input-button" design="Emphasized" icon="paper-plane" @click="${this._onButtonClick}"></${scopeTag("ui5-button", tags, suffix)}></div></div>` : html `<div class="ai-prompt-input-wrapper">${this.label ? block1.call(this, context, tags, suffix) : undefined}<div class="ai-prompt-input-form-wrapper"><div class="ai-prompt-inner-input-wrapper"><ui5-input id="input" .value="${ifDefined(this.value)}" placeholder="${ifDefined(this.placeholder)}" value-state="${ifDefined(this.valueState)}" ?show-clear-icon=${this.showClearIcon} ?disabled="${this.disabled}" ?readonly="${this.readonly}" ?show-suggestions="${this.showSuggestions}" @keydown="${this._onkeydown}" @ui5-input="${ifDefined(this._onInnerInput)}" @ui5-change="${ifDefined(this._onInnerChange)}" @ui5-type-ahead="${ifDefined(this._onTypeAhead)}"><slot></slot>${this.valueStateMessage.length ? block2.call(this, context, tags, suffix) : undefined}</ui5-input>${this.showExceededText ? block3.call(this, context, tags, suffix) : undefined}</div><ui5-button ?disabled=${this._submitButtonDisabled} class="ai-prompt-input-button" design="Emphasized" icon="paper-plane" @click="${this._onButtonClick}"></ui5-button></div></div>`; }
function block1(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-label", tags, suffix)} for="input">${ifDefined(this.label)}</${scopeTag("ui5-label", tags, suffix)}>` : html `<ui5-label for="input">${ifDefined(this.label)}</ui5-label>`; }
function block2(context, tags, suffix) { return html `<slot name="valueStateMessage" slot="valueStateMessage"></slot>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-label", tags, suffix)} class="ai-prompt-input-counter">${ifDefined(this._exceededText)}</${scopeTag("ui5-label", tags, suffix)}>` : html `<ui5-label class="ai-prompt-input-counter">${ifDefined(this._exceededText)}</ui5-label>`; }
export default block0;
//# sourceMappingURL=PromptInputTemplate.lit.js.map