import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
declare function validator(schema: ZodType): (request: Request, response: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export default validator;
//# sourceMappingURL=validator.middleware.d.ts.map