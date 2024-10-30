import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_DECLINE } from "../generated/i18n/i18n-defaults.js";

const name = "decline";
const pathData = "M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-9 0-18-7L256 292 140 409q-9 7-18 7-11 0-18.5-7.5T96 390t7-18l117-116-117-116q-7-7-7-18t7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z";
const ltr = false;
const accData = ICON_DECLINE;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/decline";
export { pathData, ltr, accData };