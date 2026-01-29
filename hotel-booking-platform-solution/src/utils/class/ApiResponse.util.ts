class ApiResponse {
  success: boolean;
  data: [] | {} | null;
  error: string | null;

  constructor(success: boolean, data: [] | {} | null, error: string | null) {
    this.success = success;
    this.data = data;
    this.error = error;
  }
}

export default ApiResponse;
