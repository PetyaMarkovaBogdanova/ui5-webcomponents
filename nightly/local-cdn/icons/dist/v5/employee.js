import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "employee";
const pathData = "M326 352q11 0 18.5 7.5T352 378t-7.5 18-18.5 7h-12q-11 0-18.5-7t-7.5-18 7.5-18.5T314 352h12zm16-97q48 23 77 67.5t29 99.5v32q0 11-7.5 18.5T422 480H90q-11 0-18.5-7.5T64 454v-32q0-55 29-99.5t77-67.5l-5-4q-18-18-27.5-41.5T128 160q0-27 10-50t27.5-40.5 41-27.5T256 32t49.5 10.5 41 28T374 111t10 49q0 27-11 52t-31 43zm-112 86l-25-15q-13-7-13-19v-6q-34 17-55.5 49T115 422v7h115v-88zm-51-181q0 32 22.5 54.5T256 237t54.5-22.5T333 160t-22.5-54.5T256 83t-54.5 22.5T179 160zm218 262q0-40-21.5-72T320 301v6q0 12-13 19l-26 15v88h116v-7z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/employee";
export { pathData, ltr, accData };