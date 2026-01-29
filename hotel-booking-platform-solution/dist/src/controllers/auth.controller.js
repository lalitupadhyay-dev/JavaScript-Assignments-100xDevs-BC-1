import * as authService from "../services/auth.service.js";
import sendApiResponse from "../utils/sendApiResponse.util.js";
// signup controller
async function signup(request, response, next) {
    try {
        const result = await authService.signup(request.body);
        return sendApiResponse(response, {
            success: true,
            data: result.data,
            error: null,
            statusCode: result.statusCode,
        });
    }
    catch (error) {
        next(error);
    }
}
// login controller
async function login(request, response, next) {
    try {
        const result = await authService.login(request.body);
        return sendApiResponse(response, {
            success: true,
            data: result.data,
            error: null,
            statusCode: result.statusCode,
        });
    }
    catch (error) {
        next(error);
    }
}
export { signup, login };
//# sourceMappingURL=auth.controller.js.map