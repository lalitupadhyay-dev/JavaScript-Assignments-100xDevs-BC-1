export interface AppErrorInstance {
  error: string;
  statusCode: number;
}

class AppError extends Error {
  statusCode: number;
  error: string;
  constructor(error: string, statusCode: number) {
    super(error);
    this.error = error;
    this.statusCode = statusCode;
  }
}

export default AppError;
