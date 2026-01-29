import type { LoginSchema, SignupSchema } from "../validations/auth.validation.js";
import type { Role } from "../generated/prisma/enums.js";
declare function signup(userData: SignupSchema): Promise<import("../utils/service.util.js").ServiceSuccess<{
    id: string;
    name: string;
    email: string;
    role: Role;
    phone: string;
}>>;
declare function login(userData: LoginSchema): Promise<import("../utils/service.util.js").ServiceSuccess<{
    token: string;
    user: {
        name: string;
        email: string;
        role: Role;
        id: string;
    };
}>>;
export { signup, login };
//# sourceMappingURL=auth.service.d.ts.map