/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
function block0(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-responsive-popover", tags, suffix)} id="${ifDefined(this._id)}-user-menu-rp" class="ui5-pm-rp" tabindex="-1" placement="Bottom" vertical-align="Bottom" horizontal-align="End" @ui5-close=${ifDefined(this._handlePopoverAfterClose)} prevent-initial-focus accessible-name=${ifDefined(this.accessibleNameText)} .open=${ifDefined(this.open)} .opener=${ifDefined(this.opener)}>${this._selectedAccount ? block1.call(this, context, tags, suffix) : undefined}${this.showOtherAccounts ? block7.call(this, context, tags, suffix) : undefined}${this.menuItems.length ? block15.call(this, context, tags, suffix) : undefined}<div slot="footer" class="ui5-pm-footer"><${scopeTag("ui5-button", tags, suffix)} design="Transparent" icon="log" @click="${this._handleSignOutClick}">${ifDefined(this._signOutButtonText)}</${scopeTag("ui5-button", tags, suffix)}></div></${scopeTag("ui5-responsive-popover", tags, suffix)}>` : html `<ui5-responsive-popover id="${ifDefined(this._id)}-user-menu-rp" class="ui5-pm-rp" tabindex="-1" placement="Bottom" vertical-align="Bottom" horizontal-align="End" @ui5-close=${ifDefined(this._handlePopoverAfterClose)} prevent-initial-focus accessible-name=${ifDefined(this.accessibleNameText)} .open=${ifDefined(this.open)} .opener=${ifDefined(this.opener)}>${this._selectedAccount ? block1.call(this, context, tags, suffix) : undefined}${this.showOtherAccounts ? block7.call(this, context, tags, suffix) : undefined}${this.menuItems.length ? block15.call(this, context, tags, suffix) : undefined}<div slot="footer" class="ui5-pm-footer"><ui5-button design="Transparent" icon="log" @click="${this._handleSignOutClick}">${ifDefined(this._signOutButtonText)}</ui5-button></div></ui5-responsive-popover>`; }
function block1(context, tags, suffix) { return suffix ? html `<div class="ui5-pm-selected-account" slot="header"><${scopeTag("ui5-avatar", tags, suffix)} size="L" @click="${this._handleAvatarClick}" .initials="${ifDefined(this._selectedAccount._initials)}" fallback-icon="person-placeholder">${this._selectedAccount.avatarSrc ? block2.call(this, context, tags, suffix) : undefined}<${scopeTag("ui5-tag", tags, suffix)} slot="badge" wrapping-type="None" design="Set1" color-scheme="7" title="${ifDefined(this._editAvatarTooltip)}"><${scopeTag("ui5-icon", tags, suffix)} slot="icon" name="edit"></${scopeTag("ui5-icon", tags, suffix)}></${scopeTag("ui5-tag", tags, suffix)}></${scopeTag("ui5-avatar", tags, suffix)}>${this._selectedAccount.titleText ? block3.call(this, context, tags, suffix) : undefined}${this._selectedAccount.subtitleText ? block4.call(this, context, tags, suffix) : undefined}${this._selectedAccount.description ? block5.call(this, context, tags, suffix) : undefined}${this.showManageAccount ? block6.call(this, context, tags, suffix) : undefined}</div>` : html `<div class="ui5-pm-selected-account" slot="header"><ui5-avatar size="L" @click="${this._handleAvatarClick}" .initials="${ifDefined(this._selectedAccount._initials)}" fallback-icon="person-placeholder">${this._selectedAccount.avatarSrc ? block2.call(this, context, tags, suffix) : undefined}<ui5-tag slot="badge" wrapping-type="None" design="Set1" color-scheme="7" title="${ifDefined(this._editAvatarTooltip)}"><ui5-icon slot="icon" name="edit"></ui5-icon></ui5-tag></ui5-avatar>${this._selectedAccount.titleText ? block3.call(this, context, tags, suffix) : undefined}${this._selectedAccount.subtitleText ? block4.call(this, context, tags, suffix) : undefined}${this._selectedAccount.description ? block5.call(this, context, tags, suffix) : undefined}${this.showManageAccount ? block6.call(this, context, tags, suffix) : undefined}</div>`; }
function block2(context, tags, suffix) { return html `<img src=${ifDefined(this._selectedAccount.avatarSrc)}/>`; }
function block3(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-title", tags, suffix)}>${ifDefined(this._selectedAccount.titleText)}</${scopeTag("ui5-title", tags, suffix)}>` : html `<ui5-title>${ifDefined(this._selectedAccount.titleText)}</ui5-title>`; }
function block4(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-text", tags, suffix)}>${ifDefined(this._selectedAccount.subtitleText)}</${scopeTag("ui5-text", tags, suffix)}>` : html `<ui5-text>${ifDefined(this._selectedAccount.subtitleText)}</ui5-text>`; }
function block5(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-text", tags, suffix)}>${ifDefined(this._selectedAccount.description)}</${scopeTag("ui5-text", tags, suffix)}>` : html `<ui5-text>${ifDefined(this._selectedAccount.description)}</ui5-text>`; }
function block6(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} icon="user-settings" class="ui5-pm-manage-account-btn" @click="${this._handleManageAccountClick}">${ifDefined(this._manageAccountButtonText)}</${scopeTag("ui5-button", tags, suffix)}>` : html `<ui5-button icon="user-settings" class="ui5-pm-manage-account-btn" @click="${this._handleManageAccountClick}">${ifDefined(this._manageAccountButtonText)}</ui5-button>`; }
function block7(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-panel", tags, suffix)} collapsed class="ui5-pm-other-accounts"><div slot="header" class="ui5-user-menu-account-header"><${scopeTag("ui5-title", tags, suffix)} slot="header" level="H4">${ifDefined(this._otherAccountsButtonText)} (${ifDefined(this._otherAccounts.length)})</${scopeTag("ui5-title", tags, suffix)}>${this.showAddAccount ? block8.call(this, context, tags, suffix) : undefined}</div>${this._otherAccounts.length ? block9.call(this, context, tags, suffix) : undefined}</${scopeTag("ui5-panel", tags, suffix)}>` : html `<ui5-panel collapsed class="ui5-pm-other-accounts"><div slot="header" class="ui5-user-menu-account-header"><ui5-title slot="header" level="H4">${ifDefined(this._otherAccountsButtonText)} (${ifDefined(this._otherAccounts.length)})</ui5-title>${this.showAddAccount ? block8.call(this, context, tags, suffix) : undefined}</div>${this._otherAccounts.length ? block9.call(this, context, tags, suffix) : undefined}</ui5-panel>`; }
function block8(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-button", tags, suffix)} slot="header" class="ui5-pm-add-account-btn" design="Transparent" icon="add-employee" @click="${this._handleAddAccountClick}" tooltip="${ifDefined(this._addAccountTooltip)}"/>` : html `<ui5-button slot="header" class="ui5-pm-add-account-btn" design="Transparent" icon="add-employee" @click="${this._handleAddAccountClick}" tooltip="${ifDefined(this._addAccountTooltip)}"/>`; }
function block9(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} @ui5-item-click="${ifDefined(this._handleAccountSwitch)}">${repeat(this._otherAccounts, (item, index) => item._id || index, (item, index) => block10.call(this, context, tags, suffix, item, index))}</${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list @ui5-item-click="${ifDefined(this._handleAccountSwitch)}">${repeat(this._otherAccounts, (item, index) => item._id || index, (item, index) => block10.call(this, context, tags, suffix, item, index))}</ui5-list>`; }
function block10(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-li-custom", tags, suffix)} .associatedAccount="${ifDefined(item)}"><div class="ui5-pm-other-accounts-content"><${scopeTag("ui5-avatar", tags, suffix)} slot="image" size="S" .initials="${ifDefined(item._initials)}" fallback-icon="person-placeholder">${item.avatarSrc ? block11.call(this, context, tags, suffix, item, index) : undefined}</${scopeTag("ui5-avatar", tags, suffix)}><div>${item.titleText ? block12.call(this, context, tags, suffix, item, index) : undefined}${item.subtitleText ? block13.call(this, context, tags, suffix, item, index) : undefined}${item.description ? block14.call(this, context, tags, suffix, item, index) : undefined}</div></div></${scopeTag("ui5-li-custom", tags, suffix)}>` : html `<ui5-li-custom .associatedAccount="${ifDefined(item)}"><div class="ui5-pm-other-accounts-content"><ui5-avatar slot="image" size="S" .initials="${ifDefined(item._initials)}" fallback-icon="person-placeholder">${item.avatarSrc ? block11.call(this, context, tags, suffix, item, index) : undefined}</ui5-avatar><div>${item.titleText ? block12.call(this, context, tags, suffix, item, index) : undefined}${item.subtitleText ? block13.call(this, context, tags, suffix, item, index) : undefined}${item.description ? block14.call(this, context, tags, suffix, item, index) : undefined}</div></div></ui5-li-custom>`; }
function block11(context, tags, suffix, item, index) { return html `<img src=${ifDefined(item.avatarSrc)}/>`; }
function block12(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-title", tags, suffix)}>${ifDefined(item.titleText)}</${scopeTag("ui5-title", tags, suffix)}>` : html `<ui5-title>${ifDefined(item.titleText)}</ui5-title>`; }
function block13(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-label", tags, suffix)}>${ifDefined(item.subtitleText)}</${scopeTag("ui5-label", tags, suffix)}>` : html `<ui5-label>${ifDefined(item.subtitleText)}</ui5-label>`; }
function block14(context, tags, suffix, item, index) { return suffix ? html `<${scopeTag("ui5-label", tags, suffix)}>${ifDefined(item.description)}</${scopeTag("ui5-label", tags, suffix)}>` : html `<ui5-label>${ifDefined(item.description)}</ui5-label>`; }
function block15(context, tags, suffix) { return suffix ? html `<${scopeTag("ui5-list", tags, suffix)} class="ui5-user-menu-list" selection-mode="None" separators="None" accessible-role="Menu" @ui5-item-click=${ifDefined(this._handleMenuItemClick)} @ui5-close-menu=${ifDefined(this._handleMenuItemClose)}><slot></slot></${scopeTag("ui5-list", tags, suffix)}>` : html `<ui5-list class="ui5-user-menu-list" selection-mode="None" separators="None" accessible-role="Menu" @ui5-item-click=${ifDefined(this._handleMenuItemClick)} @ui5-close-menu=${ifDefined(this._handleMenuItemClose)}><slot></slot></ui5-list>`; }
export default block0;
//# sourceMappingURL=UserMenuTemplate.lit.js.map