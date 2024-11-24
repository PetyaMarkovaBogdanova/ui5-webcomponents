import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "incoming-call";
const pathData = "M406.5 308q20 9 31 27t11 40v20q0 51-26.5 84t-79.5 33q-12 0-20-1.5t-12-2.5q-53-14-102-42T119 398.5 49 310 5.5 206q-1-4-3-13.5T.5 169q0-53 33-79t84-26h31q35 0 51 32l28 56q6 12 6 25 0 16-8.5 30t-23.5 22l-5 2q9 26 34 51t50 34l3-6q8-15 22-23t30-8q13 0 25 6zm-10 67q0-14-13-22l-46-23h-3q-3 0-5 3l-11 23q-9 14-27 14-22 0-48.5-15t-48.5-37.5-37-48.5-15-48q0-21 14-27l22-11q4-1 4-5 0-2-1-4l-28-55q-2-4-5-4h-31q-66 0-66 53 0 6 1 12.5t4 17.5q12 45 36.5 87t59 76 77.5 59 90 37q13 4 22 4 32 0 43.5-18.5t11.5-47.5v-20zm90-298q13 0 19 8t6 18q0 9-6 17t-19 8h-143l33 33q8 8 8 18 0 11-7.5 18.5t-18.5 7.5-18-8l-77-76q-7-7-7-18 0-12 7-19l77-76q8-8 18-8 11 0 18.5 7.5t7.5 18.5q0 10-8 18l-33 33h143z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/incoming-call";
export { pathData, ltr, accData };