import sendApiResponse from "./sendApiResponse.util.js";
import AppError from "./class/AppError.util.js";
import err from "../error/error.js";
function globalErrorHandler(error, request, response, next) {
    // console.log("gb handler", error);
    if (error instanceof AppError) {
        return sendApiResponse(response, {
            success: false,
            data: null,
            error: error.error,
            statusCode: error.statusCode,
        });
    }
    return sendApiResponse(response, {
        success: false,
        data: null,
        error: err.INTERNAL_SERVER_ERROR.message,
        statusCode: err.INTERNAL_SERVER_ERROR.code,
    });
}
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.util.js.map