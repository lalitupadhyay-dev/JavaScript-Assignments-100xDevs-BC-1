import sendApiResponse from "./sendApiResponse.util.js";
function globalErrorHandler(error, request, response, next) {
    // console.log("gb handler", error);
    return sendApiResponse(response, {
        success: false,
        data: null,
        error: error.error,
        statusCode: error.statusCode,
    });
}
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map