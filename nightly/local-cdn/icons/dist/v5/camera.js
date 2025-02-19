import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "camera";
const pathData = "M441 480q-11 0-18-7.5t-7-18.5 7-18 18-7h13q7 0 7-7V154q0-7-7-7h-74q-5 0-11-3t-13-12l-40-49H196l-44 55q-7 9-20 9H58q-7 0-7 7v268q0 7 7 7h13q11 0 18 7t7 18-7 18.5-18 7.5H58q-24 0-41-17T0 422V154q0-24 17-41t41-17h62l44-55q8-9 20-9h145q12 0 20 10l44 54h61q24 0 41 17t17 41v268q0 24-17 41t-41 17h-13zm-185-32q-27 0-50-10t-40.5-27.5T138 370t-10-50 10-50 27.5-40.5T206 202t50-10 50 10 40.5 27.5T374 270t10 50-10 50-27.5 40.5T306 438t-50 10zm144-224q-16 0-16-16t16-16 16 16-16 16zm-144 19q-32 0-54.5 22.5T179 320t22.5 54.5T256 397t54.5-22.5T333 320t-22.5-54.5T256 243z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/camera";
export { pathData, ltr, accData };