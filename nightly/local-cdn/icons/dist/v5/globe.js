import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "globe";
const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zM51 256q0 39 14 74t38 62 57 44.5 70 22.5v-53q-26-8-43-28.5T167 331L56 212q-2 11-3.5 22T51 256zm351 144q27-28 43-65t16-79q0-34-10.5-64.5t-29-56T377 91t-57-29v41q0 11-7.5 18t-18.5 7h-70v39q0 11-7.5 18t-18.5 7h-41l53 64h84q11 0 18.5 7.5T320 282v70h6q26 0 45.5 13.5T402 400z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/globe";
export { pathData, ltr, accData };