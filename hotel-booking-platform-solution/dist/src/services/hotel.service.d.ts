import type { CreateHotelSchema } from "../validations/hotel.validation.js";
declare function createHotel(userId: string | undefined, hotelData: CreateHotelSchema): Promise<import("../utils/service.util.js").ServiceSuccess<{
    id: string;
    name: string;
    description: string;
    city: string;
    country: string;
    amenities: import("@prisma/client/runtime/client").JsonValue;
    rating: number;
    total_reviews: number;
    owner_id: string;
}>>;
export { createHotel };
//# sourceMappingURL=hotel.service.d.ts.map