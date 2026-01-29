import jwt from "jsonwebtoken";
import { env } from "../configs/env.js";
function generate(data) {
    const token = jwt.sign(data, env.JWT_SECRET, { expiresIn: "1hr" });
    return token;
}
function decode() {
}
export { generate, decode };
//# sourceMappingURL=token.js.map