import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "stock-requirements";
const pathData = "M207.111 115c-6 10-12 15-22 15h-48v67c0 14-10 25-23 25-14 0-25-11-25-25v-67h-48c-10 0-18-5-21-15-5-9-2-19 4-26l72-72c9-10 24-10 34 0l71 72c7 7 11 17 6 26zm100 269c5-10 12-15 21-15h47v-68c0-13 11-24 25-24 13 0 24 11 24 24v68h47c10 0 19 5 22 15 5 9 3 19-4 25l-72 72c-9 9-24 9-33 0l-72-72c-7-6-11-16-5-25zm14-69h-129c-14 0-24-11-24-24v-83c0-13 10-24 24-24h129c14 0 25 11 25 24v83c0 13-11 24-25 24z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/stock-requirements";
export { pathData, ltr, accData };