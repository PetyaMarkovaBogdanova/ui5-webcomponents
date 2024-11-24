import patchPatcher from "./patchPatcher.js";
import patchPopup from "./patchPopup.js";
import { registerFeature } from "../FeaturesRegistry.js";
import { setTheme } from "../config/Theme.js";
class OpenUI5Support {
    static isAtLeastVersion116() {
        if (!window.sap.ui.version) {
            return true; // sap.ui.version will be removed in newer OpenUI5 versions
        }
        const version = window.sap.ui.version;
        const parts = version.split(".");
        if (!parts || parts.length < 2) {
            return false;
        }
        return parseInt(parts[0]) > 1 || parseInt(parts[1]) >= 116;
    }
    static isOpenUI5Detected() {
        return typeof window.sap?.ui?.require === "function";
    }
    static init() {
        if (!OpenUI5Support.isOpenUI5Detected()) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            window.sap.ui.require(["sap/ui/core/Core"], async (Core) => {
                const callback = () => {
                    let deps = ["sap/ui/core/Popup", "sap/ui/core/Patcher", "sap/ui/core/LocaleData"];
                    if (OpenUI5Support.isAtLeastVersion116()) { // for versions since 1.116.0 and onward, use the modular core
                        deps = [
                            ...deps,
                            "sap/base/i18n/Formatting",
                            "sap/base/i18n/Localization",
                            "sap/ui/core/ControlBehavior",
                            "sap/ui/core/Theming",
                            "sap/ui/core/date/CalendarUtils",
                        ];
                    }
                    window.sap.ui.require(deps, (Popup, Patcher) => {
                        patchPatcher(Patcher);
                        patchPopup(Popup);
                        resolve();
                    });
                };
                if (OpenUI5Support.isAtLeastVersion116()) {
                    await Core.ready();
                    callback();
                }
                else {
                    Core.attachInit(callback);
                }
            });
        });
    }
    static getConfigurationSettingsObject() {
        if (!OpenUI5Support.isOpenUI5Detected()) {
            return {};
        }
        if (OpenUI5Support.isAtLeastVersion116()) {
            const ControlBehavior = window.sap.ui.require("sap/ui/core/ControlBehavior");
            const Localization = window.sap.ui.require("sap/base/i18n/Localization");
            const Theming = window.sap.ui.require("sap/ui/core/Theming");
            const Formatting = window.sap.ui.require("sap/base/i18n/Formatting");
            const CalendarUtils = window.sap.ui.require("sap/ui/core/date/CalendarUtils");
            return {
                animationMode: ControlBehavior.getAnimationMode(),
                language: Localization.getLanguage(),
                theme: Theming.getTheme(),
                themeRoot: Theming.getThemeRoot(),
                rtl: Localization.getRTL(),
                timezone: Localization.getTimezone(),
                calendarType: Formatting.getCalendarType(),
                formatSettings: {
                    firstDayOfWeek: CalendarUtils.getWeekConfigurationValues().firstDayOfWeek,
                    legacyDateCalendarCustomizing: Formatting.getCustomIslamicCalendarData?.()
                        ?? Formatting.getLegacyDateCalendarCustomizing?.(),
                },
            };
        }
        const Core = window.sap.ui.require("sap/ui/core/Core");
        const config = Core.getConfiguration();
        const LocaleData = window.sap.ui.require("sap/ui/core/LocaleData");
        return {
            animationMode: config.getAnimationMode(),
            language: config.getLanguage(),
            theme: config.getTheme(),
            themeRoot: config.getThemeRoot(),
            rtl: config.getRTL(),
            timezone: config.getTimezone(),
            calendarType: config.getCalendarType(),
            formatSettings: {
                firstDayOfWeek: LocaleData ? LocaleData.getInstance(config.getLocale()).getFirstDayOfWeek() : undefined,
                legacyDateCalendarCustomizing: config.getFormatSettings().getLegacyDateCalendarCustomizing(),
            },
        };
    }
    static getLocaleDataObject() {
        if (!OpenUI5Support.isOpenUI5Detected()) {
            return;
        }
        const LocaleData = window.sap.ui.require("sap/ui/core/LocaleData");
        if (OpenUI5Support.isAtLeastVersion116()) {
            const Localization = window.sap.ui.require("sap/base/i18n/Localization");
            return LocaleData.getInstance(Localization.getLanguageTag())._get();
        }
        const Core = window.sap.ui.require("sap/ui/core/Core");
        const config = Core.getConfiguration();
        return LocaleData.getInstance(config.getLocale())._get();
    }
    static _listenForThemeChange() {
        if (OpenUI5Support.isAtLeastVersion116()) {
            const Theming = window.sap.ui.require("sap/ui/core/Theming");
            Theming.attachApplied(() => {
                setTheme(Theming.getTheme());
            });
        }
        else {
            const Core = window.sap.ui.require("sap/ui/core/Core");
            const config = Core.getConfiguration();
            Core.attachThemeChanged(() => {
                setTheme(config.getTheme());
            });
        }
    }
    static attachListeners() {
        if (!OpenUI5Support.isOpenUI5Detected()) {
            return;
        }
        OpenUI5Support._listenForThemeChange();
    }
    static cssVariablesLoaded() {
        if (!OpenUI5Support.isOpenUI5Detected()) {
            return;
        }
        const link = [...document.head.children].find(el => el.id === "sap-ui-theme-sap.ui.core"); // more reliable than querySelector early
        if (!link) {
            return false;
        }
        return !!link.href.match(/\/css(-|_)variables\.css/);
    }
}
registerFeature("OpenUI5Support", OpenUI5Support);
export default OpenUI5Support;
//# sourceMappingURL=OpenUI5Support.js.map