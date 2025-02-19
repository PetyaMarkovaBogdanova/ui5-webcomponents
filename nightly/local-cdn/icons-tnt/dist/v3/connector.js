import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "connector";
const pathData = "M483 224H29c-16 0-29-13-29-29s13-28 29-28h454c16 0 29 12 29 28s-13 29-29 29zm0 191c-11 0-21-10-21-21v-84l-15 5c-11 3-24-3-27-13-4-12 3-23 14-28l42-14c7-3 15-1 20 3 6 4 9 10 9 17v114c0 11-10 21-22 21zm-405 0c-12 0-20-10-20-21v-84l-16 5c-10 3-23-3-26-13-4-12 1-23 13-28l43-14c6-1 13-1 19 3 5 4 8 10 8 17v114c0 11-8 21-21 21z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/connector";
export { pathData, ltr, accData };