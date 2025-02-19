import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-employee";
const pathData = "M202 256q-28 0-52.5 10.5t-43 28.5-29 42.5T67 390v7h115q11 0 18.5 7t7.5 18-7.5 18.5T182 448H42q-11 0-18.5-7.5T16 422v-32q0-55 29-99.5t77-67.5q-42-39-42-95 0-27 10.5-50.5t28-41 40.5-27T208 0t49.5 10 41 27.5 27.5 41 10 49.5-10.5 50.5T295 222q11 5 26 15t15 26q0 9-7 16.5t-18 7.5q-6 0-9.5-2t-7.5-5l-4-3q-16-10-36-15.5t-40-5.5h-12zm268 118q11 0 18.5 7.5T496 400t-7.5 18.5T470 426h-60v60q0 11-7.5 18.5T384 512t-18.5-7.5T358 486v-60h-60q-11 0-18.5-7.5T272 400t7.5-18.5T298 374h60v-60q0-11 7.5-18.5T384 288t18.5 7.5T410 314v60h60zM208 51q-32 0-54.5 22.5T131 128t22.5 54.5T208 205q33 0 55-23t22-54q0-32-22.5-54.5T208 51z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/add-employee";
export { pathData, ltr, accData };