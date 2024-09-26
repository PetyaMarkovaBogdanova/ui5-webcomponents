import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "tags";
const pathData = "M275 512q-37 0-63-26L8 282q-8-8-8-19V122q0-11 7-18l96-97q9-7 19-7h141q11 0 19 8l204 204q26 26 26 63t-26 63L338 486q-26 26-63 26zM51 253l197 197q11 11 27 11t27-11l148-148q11-11 11-27t-11-27L253 51H132l-81 81v121zm125-29q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm122 160q-11 0-18.5-7.5T272 358q0-10 8-18l48-45q7-7 17-7 11 0 18.5 7.5T371 314q0 10-8 18l-48 45q-7 7-17 7zm-57-54q-11 0-18.5-7.5T215 304t7-18l87-87q7-7 18-7t18.5 7.5T353 218t-7 18l-87 87q-7 7-18 7z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/tags";
export { pathData, ltr, accData };