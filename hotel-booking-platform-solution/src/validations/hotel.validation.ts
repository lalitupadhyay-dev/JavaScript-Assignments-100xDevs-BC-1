import z from "zod";
import error from "../error/error.js";

export const createHotelValidationSchema = z
  .object({
    name: z.string().trim(),
    description: z.string().trim().optional(),
    city: z.string().trim().toLowerCase(),
    country: z.string().trim().toLowerCase(),
    amenities: z.array(z.string().trim().toLowerCase()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.name === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["name"],
      });
    }

    if (data.city === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["city"],
      });
    }

    if (data.country === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["country"],
      });
    }
  });

export type CreateHotelSchema = z.infer<typeof createHotelValidationSchema>;
