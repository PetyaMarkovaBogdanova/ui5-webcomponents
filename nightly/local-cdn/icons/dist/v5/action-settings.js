import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_ACTION_SETTINGS } from "../generated/i18n/i18n-defaults.js";

const name = "action-settings";
const pathData = "M475 299q11 8 16 19t5 22q0 12-6 23l-18 37q-7 14-19.5 21t-26.5 7q-10 0-19-3l-31-13-45 27-7 32q-4 18-18 29.5T274 512h-36q-18 0-32-11.5T188 471l-7-32-45-27-31 13q-9 3-19 3-14 0-26.5-7T40 400l-18-37q-6-9-6-21 0-28 29-48l16-13v-50l-24-18q-11-8-16-19t-5-22q0-12 6-24l18-36q7-14 19.5-21T86 84q11 0 20 4l30 12 45-26 7-33q4-18 18-29.5T238 0h36q18 0 32 11.5T324 41l7 32 44 27 25-10q15-5 26-5 32 0 46 27l18 36q6 12 6 24 0 11-5 22t-16 19l-24 17v51zM256 160q40 0 68 28t28 68-28 68-68 28-68-28-28-68 28-68 68-28zm165 163q-21-16-21-41v-52q0-25 21-41l24-18-19-36-31 13q-9 3-19 3-16 0-27-7l-44-27q-19-10-24-33l-7-33h-36l-7 33q-5 23-24 33l-44 27q-11 7-27 7-10 0-19-3l-31-13-19 36 24 18q21 15 21 41v52q0 26-21 41l-24 17 19 37 27-10q8-4 13-5t10-1q13 0 27 7l44 26q19 12 24 34l7 33h36l7-33q5-22 24-34l44-26q14-7 26-7 11 0 20 4l30 12 20-37zm-165-22q19 0 32-13t13-32-13-32-32-13-32 13-13 32 13 32 32 13z";
const ltr = false;
const accData = ICON_ACTION_SETTINGS;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/action-settings";
export { pathData, ltr, accData };