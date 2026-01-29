class AppError extends Error {
    statusCode;
    error;
    constructor(error, statusCode) {
        super(error);
        this.error = error;
        this.statusCode = statusCode;
    }
}
export default AppError;
//# sourceMappingURL=AppError.js.map