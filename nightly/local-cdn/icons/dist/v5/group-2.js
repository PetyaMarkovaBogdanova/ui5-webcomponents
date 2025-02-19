import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";
import { ICON_GROUP_2 } from "../generated/i18n/i18n-defaults.js";

const name = "group-2";
const pathData = "M102 480H58q-24 0-41-17T0 422V90q0-24 17-41t41-17h44q11 0 18.5 7.5T128 58t-7.5 18-18.5 7H58q-7 0-7 7v332q0 7 7 7h44q11 0 18.5 7t7.5 18-7.5 18.5T102 480zm160-109H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 320h108q11 0 18.5 7.5T288 346t-7.5 18-18.5 7zm96-192H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 128h204q11 0 18.5 7.5T384 154t-7.5 18-18.5 7zm0 96H154q-11 0-18.5-7t-7.5-18 7.5-18.5T154 224h204q11 0 18.5 7.5T384 250t-7.5 18-18.5 7zm96 205h-44q-11 0-18.5-7.5T384 454t7.5-18 18.5-7h44q7 0 7-7V90q0-7-7-7h-44q-11 0-18.5-7T384 58t7.5-18.5T410 32h44q24 0 41 17t17 41v332q0 24-17 41t-41 17z";
const ltr = false;
const accData = ICON_GROUP_2;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, accData, collection, packageName });

export default "SAP-icons-v5/group-2";
export { pathData, ltr, accData };