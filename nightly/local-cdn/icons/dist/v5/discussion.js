import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "discussion";
const pathData = "M0 390V90q0-38 26-64T90 0h204q38 0 64 26t26 64v128q0 37-26 63t-64 26H139L44 408q-7 8-18 8-10 0-18-7t-8-19zM90 51q-17 0-28 11T51 90v236l58-62q8-8 19-8h166q17 0 28-11t11-27V90q0-17-11-28t-28-11H90zm378 453l-95-101H186q-11 0-18.5-7t-7.5-18 7.5-18.5T186 352h198q11 0 19 8l58 62V186q0-11 7-18.5t18-7.5 18.5 7.5T512 186v300q0 12-8 19t-18 7-18-8z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/discussion";
export { pathData, ltr, accData };