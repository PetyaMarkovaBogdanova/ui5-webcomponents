import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_REDO } from "../generated/i18n/i18n-defaults.js";

const name = "redo";
const pathData = "M160 160h256l-88-84q-8-8-8-18 0-11 7.5-18.5T346 32q10 0 17 7l141 134q8 8 8 19t-8 19L363 345q-7 7-17 7-11 0-18.5-7.5T320 326q0-10 8-18l101-97H160q-22 0-42 8.5T83 243t-23.5 34.5T51 320q0 22 8.5 42T83 397t35 23.5 42 8.5h198q11 0 18.5 7t7.5 18-7.5 18.5T358 480H160q-33 0-62-12.5T47 433t-34.5-51T0 320t12.5-62T47 207t51-34.5 62-12.5z";
const ltr = false;
const accData = ICON_REDO;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/redo";
export { pathData, ltr, accData };