import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_MULTI_SELECT } from "../generated/i18n/i18n-defaults.js";

const name = "multi-select";
const pathData = "M86 152l-47-52q-7-7-7-17 0-11 7.5-18.5T58 57t18 9l28 30 75-87q8-9 19-9t18.5 7.5T224 26q0 8-6 16l-94 109q-7 9-19 9-11 0-19-8zm0 160l-47-52q-7-7-7-17 0-11 7.5-18.5T58 217t18 9l28 30 75-87q8-9 19-9t18.5 7.5T224 186q0 8-6 16l-94 109q-7 9-19 9-11 0-19-8zm80 200H58q-11 0-18.5-7.5T32 486V378q0-11 7.5-18.5T58 352h108q11 0 18.5 7.5T192 378v108q0 11-7.5 18.5T166 512zm-83-51h58v-58H83v58zM454 96H282q-11 0-18.5-7.5T256 70t7.5-18 18.5-7h172q11 0 18.5 7t7.5 18-7.5 18.5T454 96zm0 186H282q-11 0-18.5-7.5T256 256t7.5-18.5T282 230h172q11 0 18.5 7.5T480 256t-7.5 18.5T454 282zm0 185H282q-11 0-18.5-7t-7.5-18 7.5-18.5T282 416h172q11 0 18.5 7.5T480 442t-7.5 18-18.5 7z";
const ltr = true;
const accData = ICON_MULTI_SELECT;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/multi-select";
export { pathData, ltr, accData };