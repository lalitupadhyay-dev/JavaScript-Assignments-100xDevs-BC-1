import { prisma } from "../configs/prisma.js";
import error from "../error/error.js";
import AppError from "../utils/class/AppError.util.js";
import { serviceSuccess } from "../utils/service.util.js";
async function createHotel(userId, hotelData) {
    if (!userId) {
        const { message, code } = error.UNAUTHORIZED;
        throw new AppError(message, code);
    }
    // check user existence
    const user = await prisma.user.findFirst({
        where: { id: userId },
        select: { name: true, email: true },
    });
    if (!user) {
        const { message, code } = error.UNAUTHORIZED;
        throw new AppError(message, code);
    }
    // create hotel
    const createdHotel = await prisma.hotel.create({
        data: {
            name: hotelData.name,
            owner_id: userId,
            city: hotelData.city,
            country: hotelData.country,
            ...(hotelData.description !== undefined && {
                description: hotelData.description,
            }),
            ...(hotelData.amenities !== undefined && {
                amenities: hotelData.amenities,
            }),
        },
    });
    const { created_at, ...rest } = createdHotel;
    return serviceSuccess(rest, 201);
}
export { createHotel };
//# sourceMappingURL=hotel.service.js.map