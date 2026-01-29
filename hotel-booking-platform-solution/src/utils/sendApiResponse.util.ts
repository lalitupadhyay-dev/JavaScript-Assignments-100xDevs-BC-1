import type { Response } from "express";
import ApiResponse from "./class/ApiResponse.util.js";

interface Result {
  success: boolean;
  data: [] | {} | null;
  error: string | null;
  statusCode: number;
}

function sendApiResponse(response: Response, result: Result) {
  return response
    .status(result.statusCode)
    .json(new ApiResponse(result.success, result.data, result.error));
}

export default sendApiResponse;
