import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "association";
const pathData = "M488 208q-11 0-18.5-7.5T462 182V79L46 495q-7 7-18 7t-17-7q-8-8-8-18t8-18L419 50h-89q-11 0-18.5-7T304 25t7.5-18T330 0h158q10 0 17 7t7 18v157q0 11-7 18.5t-17 7.5z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/association";
export { pathData, ltr, accData };