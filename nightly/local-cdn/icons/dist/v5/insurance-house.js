import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "insurance-house";
const pathData = "M470 332q10 7 10 20v134q0 11-7.5 18.5T454 512H250q-11 0-18.5-7.5T224 486V352q0-13 10-20l86-64q15-12 32-12 20 0 33 12zm-41 33l-77-58-77 58v96h45v-51q0-11 7.5-18.5T346 384t18 7.5 7 18.5v51h58v-96zM83 201v260h84q11 0 18.5 7t7.5 18-7.5 18.5T167 512H58q-11 0-18.5-7.5T32 486V192q0-10 6-17L181 9q6-9 19-9h190q11 0 18.5 7.5T416 26v109q0 11-7.5 18.5T390 161t-18-7.5-7-18.5V51H212l-20 24v66q0 21-15 36t-36 15H91z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/insurance-house";
export { pathData, ltr, accData };