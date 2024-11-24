import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "meeting-room";
const pathData = "M422 32q38 0 64 26t26 64v12q0 11-7.5 18.5T486 160t-18-7.5-7-18.5v-12q0-17-11-28t-28-11H90q-17 0-28 11t-11 28v268q0 17 11 28t28 11h12q11 0 18.5 7t7.5 18-7.5 18.5T102 480H90q-38 0-64-26T0 390V122q0-38 26-64t64-26h332zm-125 96q11 0 18.5 7.5T323 154t-7.5 18-18.5 7H120q-11 0-18-7t-7-18 7-18.5 18-7.5h177zM164 237q11 0 18.5 7t7.5 18-7.5 18.5T164 288h-44q-11 0-18-7.5T95 262t7-18 18-7h44zm124 19q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm26 128q29 0 49.5 20t20.5 45q0 14-6.5 22.5T358 480H218q-11 0-18.5-8t-7.5-23q0-13 6-25t16-21 22.5-14 25.5-5h52zm102-64q-20 0-34-13.5T368 272t14-34.5 34-13.5 34 14 14 34-14 34-34 14zm26 32q29 0 49.5 20t20.5 45q0 15-7.5 23t-18.5 8h-71q-2-26-17.5-46.5T363 371q-7-4-7-6 0-3 4.5-5.5t10.5-4 11.5-2.5 7.5-1h52z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/meeting-room";
export { pathData, ltr, accData };