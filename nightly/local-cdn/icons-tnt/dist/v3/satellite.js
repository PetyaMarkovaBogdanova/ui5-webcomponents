import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "satellite";
const pathData = "M133 224L0 92 92 0l132 132-34 35 21 21L312 87c13-13 28-19 46-19 43 0 86 44 86 87 0 17-6 32-19 45L324 301l21 21 35-34 132 132-91 92-133-132 35-35-22-21-101 101c-11 11-26 19-43 19h-3c-43 0-86-43-86-87 0-17 6-32 19-45l101-101-21-22zM61 51l31 30 30-30-30-31zm41 41l31 30 30-30-30-31zM51 61L21 92l30 30 31-30zm284 49l-42 42 68 67 41-42c7-6 10-13 10-22 0-27-30-54-55-55-9 0-17 3-22 10zm-202 33l-31 30 31 31 71-72-31-30-30 30 30 31-10 10zm-41-41l-31 30 31 31 30-31zm246 140l-68-68-96 96 68 68zM100 357c0 27 31 52 56 55 8 0 15-3 22-10l41-42-67-67-42 41c-7 7-10 15-10 23zm280-49l-31 31 31 30 30-30zm41 41l-31 31 31 30 30-30zm-82 0l-30 31 30 30 31-30zm82 82l-31 30 31 31 71-72-31-30-30 30 30 31-10 10zm-72-11l31 31 30-31-30-30z";
const ltr = false;
const accData = null;
const collection = "tnt-v3";
const packageName = "@ui5/webcomponents-icons-tnt";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "tnt-v3/satellite";
export { pathData, ltr, accData };