import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "recipe";
const pathData = "M75 58l45 146c1 2 1 4 1 6 0 6-4 10-11 13-1 1-3 1-4 1-4 0-12-3-15-11L47 68c-1-2-1-4-1-5 0-5 3-11 10-14 1-1 3-1 5-1 4 0 11 3 14 10zM16 257c150 0 333-1 482-1 0 135-119 240-243 240S16 392 16 257z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/recipe";
export { pathData, ltr, accData };