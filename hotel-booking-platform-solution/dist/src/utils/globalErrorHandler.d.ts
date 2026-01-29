import type { NextFunction, Request, Response } from "express";
import type { AppErrorInstance } from "./AppError.js";
declare function globalErrorHandler(error: AppErrorInstance, request: Request, response: Response, next: NextFunction): Response<any, Record<string, any>>;
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.d.ts.map