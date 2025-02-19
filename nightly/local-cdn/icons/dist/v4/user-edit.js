import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "user-edit";
const pathData = "M151 384H0v-64q0-26 10-49.5t27.5-41T78 202t50-10h32q-40 0-68-28T64 96t28-68 68-28 68 28 28 68-28 68-68 28h32q31 0 57 14t44 37l-23 22q-13-19-33.5-30T192 224h-64q-40 0-68 28t-28 68v32h151zm-9 128q2-4 8-20t12-34q4-10 7.5-21t8.5-24l261-260q5-5 11-5t11 5l45 45q6 5 6 11 0 5-6 11L246 481q-1 1-17 6t-36 10q-22 8-51 15zm18-352q26 0 45-19t19-45-19-45-45-19q-27 0-45.5 19T96 96t18.5 45 45.5 19zm45 271l23 22 181-181-22-22zm204-204l23 23 40-41-22-22z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/user-edit";
export { pathData, ltr, accData };