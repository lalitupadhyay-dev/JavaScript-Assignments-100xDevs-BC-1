import type { NextFunction, Request, Response } from "express";
import * as authService from "../services/auth.service.js";
import sendApiResponse from "../utils/sendApiResponse.util.js";

// signup controller
async function signup(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const result = await authService.signup(request.body);
    return sendApiResponse(response, {
      success: true,
      data: result.data,
      error: null,
      statusCode: result.statusCode,
    });
  } catch (error) {
    next(error);
  }
}

// login controller
async function login(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await authService.login(request.body);
    return sendApiResponse(response, {
      success: true,
      data: result.data,
      error: null,
      statusCode: result.statusCode,
    });
  } catch (error) {
    next(error);
  }
}

export { signup, login };
