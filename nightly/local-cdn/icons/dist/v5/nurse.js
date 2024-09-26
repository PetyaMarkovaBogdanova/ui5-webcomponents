import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "nurse";
const pathData = "M310 406q11 0 18.5 7.5T336 432t-7.5 18.5T310 458h-28v28q0 11-7.5 18.5T256 512t-18.5-7.5T230 486v-28h-28q-11 0-18.5-7.5T176 432t7.5-18.5T202 406h28v-28q0-11 7.5-18.5T256 352t18.5 7.5T282 378v28h28zm32-119q48 23 77 67.5t29 99.5v32q0 11-7.5 18.5T422 512h-44q-11 0-18.5-7.5T352 486t7.5-18 18.5-7h19v-7q0-28-10.5-52.5t-29-42.5-43-28.5T262 320h-12q-28 0-52.5 10.5t-43 28.5-29 42.5T115 454v7h19q11 0 18.5 7t7.5 18-7.5 18.5T134 512H90q-11 0-18.5-7.5T64 486v-32q0-55 29-99.5t77-67.5q-42-40-42-95 0-24 8.5-45.5T160 108l-19-22q-13-14-13-35 0-20 13.5-35.5T176 0h160q21 0 34.5 15.5T384 51q0 21-13 35l-19 22q32 35 32 84 0 56-42 95zM213 128q-16 11-25 27.5t-9 36.5q0 32 22.5 54.5T256 269t54.5-22.5T333 192q0-19-9-36t-25-28h-86zm-12-51h110l22-26H179z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/nurse";
export { pathData, ltr, accData };