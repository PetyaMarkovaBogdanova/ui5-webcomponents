import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "auto-layout";
const pathData = "M26 282c-14 0-25-12-25-26V26C1 11 12 0 26 0h179c14 0 26 11 26 26v230c0 14-12 26-26 26H26zm282-103c-15 0-26-11-26-25V26c0-15 11-26 26-26h179c14 0 25 11 25 26v128c0 14-11 25-25 25H308zm-1 333c-14 0-26-11-26-25V256c0-14 12-25 26-25h179c14 0 26 11 26 25v231c0 14-12 25-26 25H307zm-281 0c-15 0-26-11-26-25V359c0-15 11-26 26-26h179c14 0 25 11 25 26v128c0 14-11 25-25 25H26z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/auto-layout";
export { pathData, ltr, accData };