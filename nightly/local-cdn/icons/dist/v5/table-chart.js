import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "table-chart";
const pathData = "M26 160q11 0 18 7.5t7 18.5v76q0 11-7 18.5T26 288t-18.5-7.5T0 262v-76q0-11 7.5-18.5T26 160zm0 192q11 0 18 7.5t7 18.5v76q0 11-7 18.5T26 480t-18.5-7.5T0 454v-76q0-11 7.5-18.5T26 352zm428-224q24 0 41 17t17 41v268q0 24-17 41t-41 17H186q-24 0-41-17t-17-41V186q0-24 17-41t41-17h268zM186 51q-11 0-18.5-7T160 26t7.5-18.5T186 0h76q11 0 18.5 7.5T288 26t-7.5 18-18.5 7h-76zm192 0q-11 0-18.5-7T352 26t7.5-18.5T378 0h76q11 0 18.5 7.5T480 26t-7.5 18-18.5 7h-76zM179 454q0 7 7 7h108V346H179v108zm7-275q-7 0-7 7v108h115V179H186zm268 282q7 0 7-7V346H346v115h108zm7-275q0-7-7-7H346v115h115V186z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/table-chart";
export { pathData, ltr, accData };