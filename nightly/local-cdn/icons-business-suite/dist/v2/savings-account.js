import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "savings-account";
const pathData = "M15.5 409V72c0-39 32-71 71-71h339c39 0 71 32 71 71v337c0 39-32 71-71 71h-339c-39 0-71-32-71-71zm48 0c0 13 10 23 23 23h339c13 0 22-10 22-23V72c0-15-7-23-22-23h-339c-13 0-23 8-23 23v337zm26-198c-3-35 20-59 48-66v-24c0-16 8-24 24-24s24 8 24 24v24h23c15 0 24 9 24 24 0 16-8 24-24 24h-59c-8 0-12 4-12 13 0 7 4 10 12 10h21c5 0 10 1 15 2 25 7 44 29 47 53 3 35-19 59-47 66v22c0 17-8 25-24 25s-24-8-24-25v-24h-24c-16 0-24-7-24-22 0-16 8-24 24-24h60c8 0 12-4 12-13 0-7-5-12-12-12h-21c-30 0-59-23-63-53zm263 174c-39 0-71-33-71-72 0-41 32-71 71-71 41 0 73 30 73 71 0 39-32 72-73 72zm3-192c-27 0-48-21-48-48s21-48 48-48 47 21 47 48-20 48-47 48zm-3 96c-13 0-22 9-22 24 0 13 9 24 22 24 15 0 25-11 25-24 0-15-10-24-25-24z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/savings-account";
export { pathData, ltr, accData };