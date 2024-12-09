import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "machine";
const pathData = "M476 120q6-3 11-3 11 0 18 8.5t7 18.5q0 14-15 22l-51 24q-3 1-5.5 1.5t-5.5.5q-7 0-13-3l-38-23q0 13-8 19.5t-17 6.5q-10 0-18-6.5t-8-19.5v-16l-146 19 121 183h60q33 0 56.5 23.5T448 432t-23.5 56.5T368 512H80q-33 0-56.5-23.5T0 432q0-18 7-33.5t19-26T54 356t34-4L41 175q-20-14-30.5-35T0 96q0-21 8-38.5T29.5 27t31-20T97 0q31 0 56 19l180 22V26q0-13 8-19.5T359 0q9 0 17 6.5t8 19.5l38-23q6-3 13-3 3 0 5.5.5T446 2l51 24q15 7 15 23 0 10-7 18t-18 8q-5 0-11-3l-39-18-53 31v22l53 31zm-79 312q0-12-8.5-20.5T368 403H80q-12 0-20.5 8.5T51 432t8.5 20.5T80 461h288q12 0 20.5-8.5T397 432zM51 96q0 18 13 31.5T96 141q17 0 30.5-11.5T141 99q1-20-12.5-34T95 51 63 65 51 96zm84 87q-16 9-36 9l42 160h106zm198-84v-6L190 75q1 5 1.5 10.5T192 96t-.5 10.5T190 117z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/machine";
export { pathData, ltr, accData };