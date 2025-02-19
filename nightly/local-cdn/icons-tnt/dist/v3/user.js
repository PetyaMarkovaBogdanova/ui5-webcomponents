import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "user";
const pathData = "M471.5 512h-403c-15 0-26-12-26-26v-58c0-85 54-158 130-186-27-26-43-62-43-102 0-77 63-140 140-140 78 0 141 63 141 140 0 40-17 76-43 102 75 28 130 101 130 186v58c0 14-12 26-26 26zm-202-461c-49 0-89 40-89 89 0 50 40 90 89 90 50 0 90-40 90-90 0-49-40-89-90-89zm-176 377v32h352v-32c0-81-66-147-147-147h-57c-81 0-148 66-148 147z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/user";
export { pathData, ltr, accData };