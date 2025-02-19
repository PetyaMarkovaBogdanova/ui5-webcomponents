import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "vessel";
const pathData = "M0 270c0-12 10-17 17-17h53v-18c0-13 10-20 19-20h70c11 0 19 9 19 20v18h13c13 0 20 11 20 20v2h192v-22h92c15 0 17 12 17 16 0 1-1 4-2 9l-24 48c1 5 2 18 2 27 0 27-8 41-25 41H68c-12 0-18-9-21-14L2 277c-1-3-2-5-2-7zm186 8H29l40 91h392c1-1 2-6 2-15v-5l-1-8v-5c-1-2-1-5-1-10l-1-4 22-44h-54v3c0 9-7 19-20 19H186v-22zm-91-25h59v-13H95v13z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/vessel";
export { pathData, ltr, accData };