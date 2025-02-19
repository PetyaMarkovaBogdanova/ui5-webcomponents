import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "immunization";
const pathData = "M25.625 471c-9-11-9-25 0-34l65-65v-86c0-6 2-11 7-16l150-150-6-7c-11-9-11-23 0-34 5-5 10-8 16-8 5 0 11 3 16 8l43 43 51-49-32-31c-11-11-11-25 0-34 5-5 11-7 17-7s12 2 16 7l120 120c9 9 9 24 0 33-4 5-10 8-16 8s-12-3-18-8l-31-32-49 51 43 43c10 11 10 22 0 32-5 5-12 8-18 8s-11-3-16-8l-7-6-150 150c-5 5-10 7-16 7h-86l-65 65c-4 4-10 7-16 7s-12-3-18-7zm148-210l-36 36v62h62l144-144-62-62-27 27 19 19c9 9 9 23 0 34-5 5-11 7-16 7-6 0-11-2-16-7l-21-19-13 13 19 19c9 9 9 23 0 34-5 5-11 7-17 7s-11-2-17-7z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/immunization";
export { pathData, ltr, accData };