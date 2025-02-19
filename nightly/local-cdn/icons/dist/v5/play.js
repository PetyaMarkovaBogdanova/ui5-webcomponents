import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "play";
const pathData = "M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm85 235q11 8 11 21t-11 21l-109 77q-7 5-14 5-11 0-18.5-7.5T192 333V179q0-11 7.5-18.5T218 153q7 0 14 5zm-85 226q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/play";
export { pathData, ltr, accData };