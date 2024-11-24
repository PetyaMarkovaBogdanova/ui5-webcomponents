import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "radar-chart";
const pathData = "M468 132q12 7 12 22v204q0 14-12 22L270 508q-5 4-14 4t-14-4L44 380q-12-8-12-22V154q0-15 12-22L242 4q5-4 14-4t14 4zm-39 36L256 56 83 168v176l173 112 173-112V168zm-140-4q5-16 17.5-26t29.5-10q20 0 34 14t14 34q0 17-10.5 30T346 223l-38 114q12 12 12 31 0 20-14 34t-34 14-34-14-14-34q0-6 1-10l-71-71q-4 1-10 1-20 0-34-14t-14-34 14-34 34-14q17 0 30 11zm-29 157l34-105-103 35z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/radar-chart";
export { pathData, ltr, accData };