import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
import sendApiResponse from "../utils/sendApiResponse.util.js";

function validator(schema: ZodType) {
  return (request: Request, response: Response, next: NextFunction) => {
    const data = request.body;
    const result = schema.safeParse(data);
    if (!result.success) {
      return sendApiResponse(response, {
        success: false,
        data: null,
        error: result.error?.issues[0]?.message!,
        statusCode: 400,
      });
    }
    request.body = result.data;
    return next();
  };
}

export default validator;
