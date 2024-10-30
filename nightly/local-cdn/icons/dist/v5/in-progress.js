import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "in-progress";
const pathData = "M342 306q10 7 10 20 0 11-7 18.5t-18 7.5q-8 0-16-5l-77-60q-10-8-10-20V154q0-11 7.5-18.5T250 128t18 7.5 7 18.5v100zm48-274q38 0 64 26t26 64v268q0 38-26 64t-64 26H122q-38 0-64-26t-26-64V122q0-38 26-64t64-26h268zm39 90q0-17-11-28t-28-11H122q-17 0-28 11t-11 28v268q0 17 11 28t28 11h268q17 0 28-11t11-28V122z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/in-progress";
export { pathData, ltr, accData };