import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "pharmacy";
const pathData = "M394 192q26 23 40 53t14 64v113q0 38-26 64t-64 26H154q-38 0-64-26t-26-64V309q0-34 14-64t40-53l4-4q25-20 25-53v-7h-25q-11 0-18.5-7.5T96 102V26q0-11 7.5-18.5T122 0h268q11 0 18.5 7.5T416 26v76q0 11-7.5 18.5T390 128h-25v7q0 33 25 53zM147 77h218V51H147v26zm250 232q0-47-36-78l-5-4q-42-36-42-92v-7H198v7q0 56-42 92l-5 4q-36 31-36 78v113q0 17 11 28t28 11h204q17 0 28-11t11-28V309zm-71-15q11 0 18.5 7.5T352 320t-7.5 18.5T326 346h-44v44q0 11-7.5 18.5T256 416t-18.5-7.5T230 390v-44h-44q-11 0-18.5-7.5T160 320t7.5-18.5T186 294h44v-44q0-11 7.5-18.5T256 224t18.5 7.5T282 250v44h44z";
const ltr = false;
const accData = null;
const collection = "SAP-icons-v5";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v5/pharmacy";
export { pathData, ltr, accData };