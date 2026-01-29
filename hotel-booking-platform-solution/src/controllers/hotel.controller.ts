import type { NextFunction, Request, Response } from "express";
import { createHotel } from "../services/hotel.service.js";
import sendApiResponse from "../utils/sendApiResponse.util.js";

async function create(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { user, body } = request;

  try {
    // calling service
    const result = await createHotel(user?.id, body);
    return sendApiResponse(response, {
      success: true,
      data: result.data,
      error: null,
      statusCode: result.statusCode,
    });
  } catch (err) {
    return next(err);
  }
}

export { create };
