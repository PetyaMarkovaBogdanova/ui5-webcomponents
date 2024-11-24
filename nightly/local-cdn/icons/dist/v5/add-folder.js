import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "add-folder";
const pathData = "M90 83q-17 0-28 11t-11 28v268q0 17 11 28t28 11h139q11 0 18.5 7t7.5 18-7.5 18.5T229 480H90q-38 0-64-26T0 390V122q0-38 26-64t64-26h115q9 0 18 7l44 38h156q18 0 34.5 7t28.5 18 19 26 7 30q0 17-7.5 25.5T486 192t-18-7.5-7-19.5q0-15-11-26t-27-11H256q-9 0-18-7l-44-38H90zm396 259q11 0 18.5 7.5T512 368t-7.5 18.5T486 394h-60v60q0 11-7.5 18.5T400 480t-18.5-7.5T374 454v-60h-60q-11 0-18.5-7.5T288 368t7.5-18.5T314 342h60v-60q0-11 7.5-18.5T400 256t18.5 7.5T426 282v60h60z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/add-folder";
export { pathData, ltr, accData };