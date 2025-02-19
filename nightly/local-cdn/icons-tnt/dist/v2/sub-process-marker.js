import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "sub-process-marker";
const pathData = "M32 448V64q0-13 9-22.5T64 32h384q13 0 22.5 9.5T480 64v384q0 14-9.5 23t-22.5 9H64q-14 0-23-9t-9-23zm416 0V64H64v384h384zM240 240V128h32v112h112v32H272v112h-32V272H128v-32h112z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/sub-process-marker";
export { pathData, ltr, accData };