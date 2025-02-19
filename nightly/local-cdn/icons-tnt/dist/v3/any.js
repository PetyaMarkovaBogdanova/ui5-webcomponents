import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "any";
const pathData = "M256 0c141 0 256 114 256 255 0 142-115 257-256 257S0 397 0 255C0 114 115 0 256 0zm0 460c113 0 205-91 205-205 0-112-92-204-205-204S51 143 51 255c0 114 92 205 205 205zm26-358c28 0 51 23 51 51v77c0 28-23 51-51 51v26c0 14-12 25-26 25s-25-11-25-25v-26c0-28 22-51 51-51v-77h-51v26c0 14-12 25-26 25s-26-11-26-25v-26c0-28 23-51 52-51h51zm-26 256c21 0 38 17 38 38 0 22-17 38-38 38s-38-16-38-38c0-21 17-38 38-38z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/any";
export { pathData, ltr, accData };