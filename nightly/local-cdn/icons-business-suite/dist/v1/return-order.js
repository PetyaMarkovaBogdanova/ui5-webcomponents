import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "return-order";
const pathData = "M127 160v-32L255 0h224c19 0 32 15 32 32v448c0 19-14 32-31 32H160c-19 0-33-14-33-33h32l321 1-1-448H287v96c0 19-15 32-32 32H127zm2 288L1 320l128-128v64l-32 32h160v64H97l32 32v64zm247-131c-31-4-47-20-54-56l33-3c1 7 4 14 8 19 5 7 6 7 13 10v-55c-36-11-49-28-49-57 0-28 22-48 49-51v-15h18v15c28 3 44 18 48 45l-30 4c-3-15-10-19-18-22v51c41 11 53 27 53 56 0 33-22 51-53 58v24h-18v-23zm18-30c13 0 22-13 22-25 0-9-5-20-22-24v49zm-18-136c-11 6-17 14-17 23 0 4 1 8 4 13 3 3 6 6 13 9v-45z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/return-order";
export { pathData, ltr, accData };