import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "foil";
const pathData = "M64.375 31c0-17 47-31 105-31s106 14 106 31v37h157l-49 46c-3 3-3 7 0 10l62 58c3 3 3 8 0 11l-62 57c-3 3-3 8 0 11l62 57c3 3 3 8 0 11l-62 57c-3 3-3 8 0 11l50 46h-158v37c0 18-48 32-106 32s-105-14-105-32V31zm32 438c11 5 36 11 73 11 38 0 63-6 74-11v-26h-3V87c-28 6-57 7-71 7-15 0-45-1-73-8v383zm287-382h-108v337h109l-15-14c-6-5-9-11-9-18s3-14 9-19l53-50-53-49c-6-5-9-12-9-19s3-13 9-18l53-50-53-49c-6-5-9-12-9-19s3-14 9-19zm-214-81c-55 0-97 13-97 25s42 25 97 25 97-13 97-25-42-25-97-25z";
const ltr = false;
const accData = null;
const collection = "business-suite-v1";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v1/foil";
export { pathData, ltr, accData };