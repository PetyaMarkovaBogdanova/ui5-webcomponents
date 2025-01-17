import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "touch";
const pathData = "M441 335q7 7 7 17 0 4-1 6l-32 134q-2 9-9 14.5t-16 5.5H198q-15 0-21-12L72 338q-8-14-8-29 0-22 15.5-37.5T117 256q18 0 33 12l42 38V128q2-14 9.5-23t21.5-9 23.5 9 9.5 23l13 128h89q11 0 19 8zm-47 24l-47-52H243v51q0 11-7.5 18.5T217 384h-6q-11 0-17-7l-76-69q-2-1-3 0t1 2l96 151h158zM129 192q-10 0-16.5-7T102 168t-5-21-1-19q0-26 10-49.5t27.5-41 41-27.5T224 0t49.5 10 41 27.5 27.5 41 10 49.5q0 8-1 19t-5 21-10.5 17-17.5 7q-10 0-17-7.5t-7-18.5q0-4 2-12 5-12 5-26 0-32-22.5-54.5T224 51t-54.5 22.5T147 128q0 16 5 26 2 8 2 12 0 11-7 18.5t-18 7.5z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/touch";
export { pathData, ltr, accData };