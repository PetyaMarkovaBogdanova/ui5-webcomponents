import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "chalkboard";
const pathData = "M454 67q24 0 41 17t17 41v332q0 24-17 41t-41 17H58q-24 0-41-17T0 457V125q0-24 17-41t41-17h396zM58 118q-7 0-7 7v262h410V125q0-7-7-7H58zm46 122q-4 2-7 3t-7 1q-11 0-18.5-7.5T64 218q0-14 12-21l44-30q7-4 14-4 11 0 18.5 7.5T160 189v140q0 11-7.5 18.5T134 355t-18-7.5-7-18.5v-93zm256 0q-4 2-7 3t-7 1q-11 0-18.5-7.5T320 218q0-14 12-21l44-30q7-4 14-4 11 0 18.5 7.5T416 189v140q0 11-7.5 18.5T390 355t-18-7.5-7-18.5v-93zM218 355q-11 0-18.5-7.5T192 329q0-10 8-18l20-20-20-20q-8-8-8-18 0-11 7.5-18.5T218 227t18 7l20 21 20-21q7-7 18-7t18.5 7.5T320 253t-7 18l-21 20 21 20q7 7 7 18t-7.5 18.5T294 355q-10 0-18-8l-20-20-20 20q-8 8-18 8zm236 109q7 0 7-7v-19H51v19q0 7 7 7h396z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/chalkboard";
export { pathData, ltr, accData };