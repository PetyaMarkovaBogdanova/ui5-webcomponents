import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "leads";
const pathData = "M450 341q26 0 44 18.5t18 43.5q0 21-12.5 38.5T467 465v21q0 11-7 18.5t-18 7.5-18.5-7.5T416 486v-19h-26q-11 0-18.5-7t-7.5-18 7.5-18.5T390 416h60q4 0 7.5-4t3.5-9q0-4-3.5-7t-7.5-3h-24q-26 0-44-18.5T364 331q0-23 15-40.5t37-21.5v-25q0-11 7.5-18.5T442 218t18 7.5 7 18.5v25h19q11 0 18.5 6t7.5 17-7.5 19.5T486 320h-60q-4 0-7.5 3t-3.5 8q0 4 3.5 7t7.5 3h24zm-166-85q-27 0-52 10t-44 27.5-30 42.5-11 55v6h115q11 0 18.5 7.5T288 423t-7.5 18-18.5 7H121q-11 0-18-7.5T96 420v-36H26q-11 0-18.5-7.5T0 358v-48q0-36 19-65.5T68 200q-20-26-20-60 0-41 28-69.5T145 42q14 0 24.5 3t16.5 5q18-23 45-36.5T288 0q26 0 49.5 10.5t41 28 27.5 41 10 50.5-10.5 50-28.5 40-42 26.5-51 9.5zm4-205q-32 0-54.5 22.5T211 128t22.5 54.5T288 205t54.5-22.5T365 128t-22.5-54.5T288 51zM145 93q-20 0-32.5 14T100 140q0 20 13.5 33.5T147 187h27q-14-28-14-59 0-18 4-31-5-2-9.5-3t-9.5-1zm-40 240q20-61 70-94h-52q-30 0-51 21t-21 50v23h54z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/leads";
export { pathData, ltr, accData };