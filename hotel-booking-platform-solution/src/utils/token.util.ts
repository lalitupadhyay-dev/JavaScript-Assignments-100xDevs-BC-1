import jwt from "jsonwebtoken";
import { env } from "../configs/env.js";
import type { User } from "../generated/prisma/client.js";

function generate(data: Partial<User>) {
  const token = jwt.sign(data, env.JWT_SECRET, { expiresIn: "1hr" });
  return token;
}

function decode(token: string)  {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    return decoded;
}

export { generate, decode };
