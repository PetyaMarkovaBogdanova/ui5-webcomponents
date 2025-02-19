import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "education";
const pathData = "M271 417q3-3 6-8t8-10.5 11-9.5 15-4h169V65H302q-18 0-23.5 12.5T272 98l-1 287v32zM71 33h82q11 0 24.5 10.5T192 65v192l-48-63-48 63V63q0-11-9-19.5T71 33zM0 417V65q0-11 7.5-21.5T32 33h11q7 2 13 12.5T64 65H32v320h162q11 0 18.5 4t13.5 9.5 9.5 10.5 6.5 8V97q-1-11-9.5-21.5T212 65q0-11-10-22-11-10-14-10 27 0 44 9 16 9 20 17 5-8 18-17t39-9h169q16 0 25 10t9 26v348q0 14-9.5 23t-22.5 9H326q-22 0-42 12t-28 19q-3-3-11.5-8.5T225 461t-23-8.5-23-3.5H32q-32 0-32-32z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/education";
export { pathData, ltr, accData };