import {dirname} from "path"
import {fileURLToPath} from "url"

const path = dirname(import.meta.url);
const __dirname = fileURLToPath(path);
;
export default __dirname;