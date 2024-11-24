/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return html `<label class="ui5-label-root" @click=${this._onclick}><span class="ui5-label-text-wrapper"><slot></slot></span><span aria-hidden="true" class="ui5-label-required-colon" data-colon="${ifDefined(this._colonSymbol)}"></span></label>`; }
export default block0;
//# sourceMappingURL=LabelTemplate.lit.js.map