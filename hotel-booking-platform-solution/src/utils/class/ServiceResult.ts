import AppError from "./AppError.util.js";

class ServiceResult {
  success: boolean;
  data: [] | {} | null;
  error: string | null;
  statusCode: number;

  constructor(
    success: boolean,
    data: [] | {} | null,
    error: string | null,
    statusCode: number,
  ) {
    this.success = success;
    this.data = data;
    this.error = error;
    this.statusCode = statusCode;
  }

  static success(data: [] | {} | null, statusCode: number) {
    return new ServiceResult(true, data, null, statusCode);
  }

  static failure(error: string, statusCode: number) {
    throw new AppError(error, statusCode);
  }
}

export default ServiceResult;
