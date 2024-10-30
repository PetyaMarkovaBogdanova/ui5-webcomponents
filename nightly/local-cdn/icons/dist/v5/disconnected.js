import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "disconnected";
const pathData = "M230 320q-10 0-18-8l-43-43-11 12q-9 7-18 7t-18-7l-32-32q-26-26-26-64 0-36 24-61L7 44q-7-7-7-18T7.5 7.5 25 0q12 0 19 7l80 81q27-24 61-24 38 0 64 26l31 32q8 8 8 18t-8 18l-10 11 43 43q8 8 8 19t-7.5 18-18.5 7-18-7l-44-44-28 28 43 43q8 8 8 18 0 11-7.5 18.5T230 320zm-90-94l86-86-14-14q-11-11-27-11t-27 11l-32 32q-11 11-11 27 0 15 11 28zm364 242q8 8 8 18 0 11-7.5 18.5T486 512t-18-7l-80-81q-27 24-61 24-38 0-64-26l-32-32q-7-7-7-18t7-18l123-123q7-7 18-7t18 7l32 32q26 28 26 64 0 35-24 61zm-177-71q14 0 27-11l31-32q12-12 12-27 0-16-12-28l-13-13-86 86 13 14q13 11 28 11z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/disconnected";
export { pathData, ltr, accData };