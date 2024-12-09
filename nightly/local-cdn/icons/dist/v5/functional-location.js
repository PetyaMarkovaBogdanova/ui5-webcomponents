import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "functional-location";
const pathData = "M256 224q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm0-96q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM58 512q-11 0-18.5-7.5T32 486t7.5-18 18.5-7h396q11 0 18.5 7t7.5 18-7.5 18.5T454 512H58zm198-96q-11 0-18-7-23-22-48-52t-46-64-34.5-70T96 153q0-32 12.5-59.5t34-48.5T193 12t63-12 63 12 50.5 33 34 48.5T416 153q0 34-13.5 70T368 293t-46 64-48 52q-7 7-18 7zm0-365q-22 0-42 8t-35 21.5-23.5 32.5-8.5 41q0 25 10.5 53t27 54.5T220 312t36 42q17-18 36-42t35.5-50.5 27-54.5 10.5-53q0-22-8.5-41T333 80.5 298.5 59 256 51z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/functional-location";
export { pathData, ltr, accData };