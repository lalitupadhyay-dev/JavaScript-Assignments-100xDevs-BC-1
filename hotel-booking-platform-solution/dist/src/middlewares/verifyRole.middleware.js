import sendApiResponse from "../utils/sendApiResponse.util.js";
import error from "../error/error.js";
function verifyRole(request, response, next) {
    const { user } = request;
    if (user?.role !== "owner") {
        return sendApiResponse(response, {
            success: false,
            data: null,
            error: error.FORBIDDEN.message,
            statusCode: error.FORBIDDEN.code,
        });
    }
    return next();
}
export default verifyRole;
//# sourceMappingURL=verifyRole.middleware.js.map