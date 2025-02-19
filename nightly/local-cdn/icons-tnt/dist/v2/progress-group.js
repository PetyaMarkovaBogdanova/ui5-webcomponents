import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "progress-group";
const pathData = "M448 32q13 0 22.5 9.5T480 64v384q0 14-9.5 23.5T448 481H64q-14 0-23.5-9.5T31 448V64q0-13 9.5-22.5T64 32h384zm0 32H64v384h384V64zm-37 180q5 7 5 13t-5 11l-63 77q-7 7-16 7H106q-6 0-9-5-2-2-2-4 0-3 3-6l57-69q5-5 5-11t-5-13l-57-68q-3-3-3-6 0-2 2-4 3-6 9-6h226q8 0 16 8zm-32 12l-53-64H153l27 32q12 15 12 33t-13 33l-26 30h173z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/progress-group";
export { pathData, ltr, accData };