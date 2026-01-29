import { createHotel } from "../services/hotel.service.js";
import sendApiResponse from "../utils/sendApiResponse.util.js";
async function create(request, response, next) {
    const { user, body } = request;
    try {
        // calling service
        const result = await createHotel(user?.id, body);
        return sendApiResponse(response, {
            success: true,
            data: result.data,
            error: null,
            statusCode: result.statusCode,
        });
    }
    catch (err) {
        return next(err);
    }
}
export { create };
//# sourceMappingURL=hotel.controller.js.map