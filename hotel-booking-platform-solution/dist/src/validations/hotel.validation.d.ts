import z from "zod";
export declare const createHotelValidationSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    city: z.ZodString;
    country: z.ZodString;
    amenities: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.z.core.$strip>;
export type CreateHotelSchema = z.infer<typeof createHotelValidationSchema>;
//# sourceMappingURL=hotel.validation.d.ts.map