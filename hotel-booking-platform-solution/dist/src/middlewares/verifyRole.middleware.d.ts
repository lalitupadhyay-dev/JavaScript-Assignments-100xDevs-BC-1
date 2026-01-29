import type { NextFunction, Request, Response } from "express";
declare function verifyRole(request: Request, response: Response, next: NextFunction): void | Response<any, Record<string, any>>;
export default verifyRole;
//# sourceMappingURL=verifyRole.middleware.d.ts.map