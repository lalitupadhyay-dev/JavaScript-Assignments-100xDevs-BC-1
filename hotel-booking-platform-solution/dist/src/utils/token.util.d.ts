import jwt from "jsonwebtoken";
import type { User } from "../generated/prisma/client.js";
declare function generate(data: Partial<User>): string;
declare function decode(token: string): string | jwt.JwtPayload;
export { generate, decode };
//# sourceMappingURL=token.util.d.ts.map