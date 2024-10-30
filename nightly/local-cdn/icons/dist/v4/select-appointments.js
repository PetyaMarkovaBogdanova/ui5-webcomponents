import { registerIcon } from "@ui5/webcomponents-base/dist/asset-registries/Icons.js";

const name = "select-appointments";
const pathData = "M32 480h256v32H32q-14 0-23-9t-9-23V64q0-14 9-23t23-9h64V0h32v32h192V0h32v32h64q14 0 23 9t9 23v256h-32V128H32v352zM320 96h32V64h-32v32zM96 96h32V64H96v32zm0 160q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm128 0q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm128 0q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zM96 384q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm128 0q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm128 0q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zm138-24l22 21-109 131-72-73 21-23 51 52z";
const ltr = true;
const accData = null;
const collection = "SAP-icons-v4";
const packageName = "@ui5/webcomponents-icons";

registerIcon(name, { pathData, ltr, collection, packageName });

export default "SAP-icons-v4/select-appointments";
export { pathData, ltr, accData };