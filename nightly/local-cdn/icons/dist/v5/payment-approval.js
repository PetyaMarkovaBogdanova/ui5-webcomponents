import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "payment-approval";
const pathData = "M486 320q11 0 18.5 7.5T512 346q0 8-6 16l-94 109q-7 9-19 9-13 0-19-8l-47-52q-7-7-7-17 0-11 7.5-18.5T346 377t18 9l28 30 75-87q8-9 19-9zm-153-26q0 25-17 43.5T275 358v26q0 11-7 18.5t-18 7.5-18.5-7.5T224 384v-26h-19q-11 0-18.5-7t-7.5-18 7.5-18.5T205 307h64q5 0 9-4t4-9-4-8.5-9-3.5h-26q-26 0-45-19t-19-45q0-25 17-43.5t41-20.5v-25q0-11 7-18.5t18-7.5 18.5 7.5T288 129v25h19q11 0 18.5 7t7.5 18-7.5 18.5T307 205h-64q-5 0-9 4t-4 9 4 8.5 9 3.5h26q26 0 45 19t19 45zM422 0q38 0 64 26t26 64v140q0 11-7.5 18.5T486 256t-18-7.5-7-18.5V90q0-17-11-28t-28-11H90q-17 0-28 11T51 90v332q0 17 11 28t28 11h141q11 0 18.5 7t7.5 18-7.5 18.5T231 512H90q-38 0-64-26T0 422V90q0-38 26-64T90 0h332z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/payment-approval";
export { pathData, ltr, accData };