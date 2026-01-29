import type { NextFunction, Request, Response } from "express";
declare function signup(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
declare function login(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
export { signup, login };
//# sourceMappingURL=auth.controller.d.ts.map