import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "deployment-instance";
const pathData = "M64 32h385c17 0 31 13 31 32v176h-32V64H64v384h192v32H64c-17 0-32-12-32-31V64c0-19 13-32 32-32zm192 320h34c2-11 6-21 11-29l-23-24 22-21 24 22c9-5 17-9 28-10v-34h32v33c9 1 21 4 29 11l24-22 21 21-22 24c7 8 8 18 11 29h33v32h-33c-2 9-6 18-11 28l23 24-22 22-24-23c-8 5-18 9-29 11v34h-32v-34c-9-2-18-6-28-11l-24 23-22-22 23-24c-5-9-8-17-11-28h-34v-32zm68 32c4 12 15 25 28 29 5 2 11 3 16 3 6 0 11-1 16-3 15-4 25-14 29-29 2-5 3-11 3-16 0-19-13-38-32-45-5-2-10-3-16-3-25 0-47 23-47 48 0 5 1 11 3 16z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/deployment-instance";
export { pathData, ltr, accData };