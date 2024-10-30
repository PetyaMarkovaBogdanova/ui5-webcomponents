import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "pdf-attachment";
const pathData = "M294 96q-10 0-17-7l-39-38H83v19q0 11-7 18.5T58 96t-18.5-7.5T32 70V26q0-11 7.5-18.5T58 0h190q9 0 18 7l46 45q8 8 8.5 18T313 88t-19 8zm96 416H26q-11 0-18.5-7.5T0 486v-44q0-11 7.5-18.5T26 416t18 7.5 7 18.5v19h314v-19q0-11 7-18.5t18-7.5 18.5 7.5T416 442v44q0 11-7.5 18.5T390 512zm25-303v22h47q11 0 18.5 7.5T488 257t-7.5 18-18.5 7h-47v47q0 11-7.5 18.5T389 355t-18-7.5-7-18.5V184q0-11 7-18.5t18-7.5h97q11 0 18.5 7.5T512 184t-7.5 18-18.5 7h-71zM74 158q31 0 52.5 21.5T148 232t-21.5 52.5T74 306H51v23q0 11-7 18.5T26 355t-18.5-7.5T0 329V184q0-11 7.5-18.5T26 158h48zm0 97q10 0 16.5-6.5T97 232q0-9-6.5-16T74 209H51v46h23zm179-97q31 0 52.5 21.5T327 232v49q0 31-21.5 52.5T253 355h-49q-11 0-18-7.5t-7-18.5V184q0-11 7-18.5t18-7.5h49zm23 74q0-9-7-16t-16-7h-23v95h23q9 0 16-7t7-16v-49z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/pdf-attachment";
export { pathData, ltr, accData };