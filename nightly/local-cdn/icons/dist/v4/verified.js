import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "verified";
const pathData = "M221 16q15-16 35-16 22 0 35 16l22 27 33-12q8-3 15-3 17 0 29.5 10.5T406 66l5 34 35 6q17 3 27.5 15.5T484 150q0 8-3 16l-13 33 27 22q17 14 17 35 0 22-17 34l-27 23 13 33q3 7 3 15 0 17-10.5 29.5T446 406l-35 5-5 35q-3 17-15.5 27.5T361 484q-7 0-15-3l-33-13-22 27q-14 17-35 17t-35-17l-22-27-33 13q-7 3-16 3-16 0-28.5-10.5T106 446l-6-35-34-5q-17-3-27.5-15.5T28 361q0-8 3-15l12-33-27-23Q0 278 0 256t16-35l27-22-12-33q-3-8-3-16 0-16 10.5-28.5T66 106l34-6 6-34q3-17 15.5-27.5T150 28q9 0 16 3l33 12zm15 289l-64-64-32 33 96 94 159-184-33-33z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/verified";
export { pathData, ltr, accData };