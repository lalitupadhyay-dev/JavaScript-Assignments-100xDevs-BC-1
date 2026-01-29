import type { NextFunction, Request, Response } from "express";
declare function auth(request: Request, response: Response, next: NextFunction): void | Response<any, Record<string, any>>;
export default auth;
//# sourceMappingURL=auth.middleware.d.ts.map