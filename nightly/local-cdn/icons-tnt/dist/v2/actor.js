import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "actor";
const pathData = "M255 140q-29 0-49-20.5T186 70t20-49.5T255 0t50 20.5T326 70t-21 49.5-50 20.5zm0-116q-18 0-32 13.5T209 70t14 33 32 14q20 0 33.5-14T302 70t-13.5-32.5T255 24zm140 48q9-6 21-6 16 0 28.5 11t12.5 28v5q-2 14-15 24l-100 76q-7 7-7 15v250q0 15-10.5 26T297 512q-15 0-26-11t-11-26V352h-8v123q0 15-11 26t-26 11q-17 0-27.5-11T177 475V225q0-8-14-20.5T131 178t-35.5-26T70 134q-12-9-13.5-17T55 105q0-8 4-17t14-16.5T95 64q13 0 22 8l107 80h64l35-25zM224 178q-2 0-6-2t-16-10-35.5-25.5T101 92q-5-4-11-4-9 0-11 5.5t-2 7.5q0 7 8 13l100 75q17 14 17 36v250q0 11 13 11 5 0 8.5-3t3.5-8V347q0-20 20-20h18q20 0 20 20v128q0 5 3.5 8t8.5 3q13 0 13-11V225q0-22 17-36l100-75q7-5 7-11 0-2-2-7.5T420 90q-6 0-9 2l-94 71-17.5 12.5-7.5 2.5h-68z";
const ltr = false;
const accData = null;
const collection = "tnt-v2";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v2/actor";
export { pathData, ltr, accData };