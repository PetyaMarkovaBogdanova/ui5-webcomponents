import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "content-enricher";
const pathData = "M256 352v96h224V128H256v64h-32v-64q0-14 9-23t23-9h224q14 0 23 9t9 23v320q0 14-9 23t-23 9H256q-14 0-23-9t-9-23v-96h32zm-64-80q0-16 16-16h124l-40-40q-5-5-5-11 0-16 16-16 7 0 12 4l67 68q4 6 4 11 0 7-4 11l-67 68q-5 4-12 4-16 0-16-15 0-7 5-12l40-40H208q-16 0-16-16zM0 224q0-14 9-23t23-9h96q14 0 23 9t9 23v96q0 14-9 23t-23 9H32q-14 0-23-9t-9-23v-96z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/content-enricher";
export { pathData, ltr, accData };