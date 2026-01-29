import type { NextFunction, Request, Response } from "express";
import sendApiResponse from "../utils/sendApiResponse.util.js";
import error from "../error/error.js";
import { decode } from "../utils/token.util.js";
import AppError from "../utils/class/AppError.util.js";
import jwt from "jsonwebtoken";
import type { User } from "../generated/prisma/client.js";

function auth(request: Request, response: Response, next: NextFunction) {
  const token = request.headers?.authorization?.split(" ")[1];

  if (!token) {
    return sendApiResponse(response, {
      success: false,
      data: null,
      error: error.UNAUTHORIZED.message,
      statusCode: error.UNAUTHORIZED.code,
    });
  }

  // decode the token
  // if -> valid returns payload
  // else -> throw error

  try {
    const decoded = decode(token);
    if (decoded) {
      request.user = decoded as Partial<User>;
    }
  } catch (err: unknown) {
    if (
      err instanceof jwt.JsonWebTokenError ||
      err instanceof jwt.TokenExpiredError
    ) {
      const { message, code } = error.UNAUTHORIZED;
      const errr = new AppError(message, code);
      return next(errr);
    }
    return next(err);
  }

  return next();
}

export default auth;
