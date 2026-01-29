import AppError from "./AppError.util.js";
class ServiceResult {
    success;
    data;
    error;
    statusCode;
    constructor(success, data, error, statusCode) {
        this.success = success;
        this.data = data;
        this.error = error;
        this.statusCode = statusCode;
    }
    static success(data, statusCode) {
        return new ServiceResult(true, data, null, statusCode);
    }
    static failure(error, statusCode) {
        throw new AppError(error, statusCode);
    }
}
export default ServiceResult;
//# sourceMappingURL=ServiceResult.js.map