import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "vehicle-repair";
const pathData = "M320 256q0-16 10-24t22-8 22 8 10 24-10 24-22 8-22-8-10-24zm-192 51q0-16 10-24t22-8 22 8 10 24-10 23.5-22 7.5-22-7.5-10-23.5zm382 169q2 6 2 10 0 11-7.5 18.5T486 512H346q-11 0-18.5-7.5T320 486q0-4 2-10l48-106-251 67 11 39q0 2 .5 3.5t.5 3.5q0 8-5.5 15.5T112 508l-13 3q-3 1-7 1-8 0-15.5-5.5T67 493L1 245q-1-2-1-6l8-93q2-29 21.5-52T78 63L301 3q12-3 24-3 22 0 41.5 9.5T400 37l58 76q2 3 4 9l49 183q1 3 1 7 0 8-5.5 15.5T493 337l-41 11zm-55-182l-36-134-362 97 36 134zM91 112q-14 4-22.5 14T59 150l-5 55 340-91-35-46q-12-17-34-17-3 0-5.5.5T314 53zm356 349l-31-68-31 68h62z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/vehicle-repair";
export { pathData, ltr, accData };