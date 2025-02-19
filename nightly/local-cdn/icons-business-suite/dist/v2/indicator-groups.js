import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "indicator-groups";
const pathData = "M184 56v66c0 27-20 46-47 46H74l-7 7v274c0 12-11 25-24 25-12 0-23-13-23-25V164c0-6 2-11 7-16L164 7c6-5 12-7 18-7h193c12 0 23 12 23 24v188c0 13-11 24-23 24s-23-11-23-24V47H192zm132 206c96 0 176 80 176 177v17c0 12-11 23-24 23-12 0-23-11-23-23v-17c0-71-57-130-129-130s-130 59-130 130v17c0 12-12 23-24 23-13 0-24-11-24-23v-17c0-97 79-177 178-177zm-10 133l77-45c16-11 32 8 24 23l-46 77c-12 21-41 30-60 15-3-1-5-3-6-4s-3-4-4-5c-15-19-5-48 15-61z";
const ltr = false;
const accData = null;
const collection = "business-suite-v2";
const packageName = "@ui5/webcomponents-icons-business-suite";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "business-suite-v2/indicator-groups";
export { pathData, ltr, accData };