import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "home-share";
const pathData = "M451.5 148q29 27 29 66v208q0 38-26 64t-64 26h-221q-28 0-53-11T73 471.5t-29.5-44-11-53.5 11-53T73 277.5t43.5-29.5 53-11h127l-33-33q-7-7-7-18t7-18.5 18-7.5 18 7l77 77q8 8 8 18 0 11-8 19l-77 76q-8 8-18 8-11 0-18-7.5t-7-18.5 7-18l33-33h-127q-18 0-33.5 7t-27 18.5-18.5 27-7 33.5 7 34 18.5 27.5 27 18.5 33.5 7h221q16 0 27.5-11t11.5-28V214q0-17-13-28l-134-125q-12-10-26-10t-26 10l-135 125q-8 8-11 19-5 19-25 19-11 0-18-8t-7-19q0-14 8.5-27t18.5-22l134-124q26-24 61-24 17 0 32.5 6t28.5 18z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/home-share";
export { pathData, ltr, accData };