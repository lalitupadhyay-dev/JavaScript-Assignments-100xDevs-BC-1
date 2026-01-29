import type { NextFunction, Request, Response } from "express";
import sendApiResponse from "../utils/sendApiResponse.util.js";
import error from "../error/error.js";

function verifyRole(request: Request, response: Response, next: NextFunction) {
  const { user } = request;

  if (user?.role !== "owner") {
    return sendApiResponse(response, {
      success: false,
      data: null,
      error: error.FORBIDDEN.message,
      statusCode: error.FORBIDDEN.code,
    });
  }
  return next();
}

export default verifyRole;
