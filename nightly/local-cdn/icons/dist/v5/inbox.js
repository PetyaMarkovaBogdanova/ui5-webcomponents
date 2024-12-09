import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "inbox";
const pathData = "M391 64q37 0 63 26t26 63v269q0 38-26 64t-63 26H122q-38 0-64-26t-26-64V153q0-37 26-63t64-26h12q11 0 18 7t7 18-7 18.5-18 7.5h-12q-17 0-28 11t-11 27v148h96q21 0 26 24 3 17 17.5 28.5T256 365q20 0 34.5-11.5T308 325q5-24 25-24h96V153q0-16-11-27t-27-11h-13q-11 0-18.5-7.5T352 89t7.5-18 18.5-7h13zm0 397q16 0 27-11t11-28v-70h-77q-12 29-38 46.5T256 416t-58-17.5-37-46.5H83v70q0 17 11 28t28 11h269zM161 172q-7-7-7-19 0-10 7.5-17.5T179 128q12 0 19 7l33 34V25q0-11 7.5-18T257 0t18 7.5 7 18.5v143l33-34q7-7 19-7 10 0 17.5 7.5T359 153q0 12-7 19l-77 77q-7 7-18 7-12 0-19-7z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/inbox";
export { pathData, ltr, accData };