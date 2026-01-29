import z from "zod";
import { Role } from "../generated/prisma/enums.js";
import error from "../error/error.js";

export const signupValidationSchema = z
  .object({
    name: z.string().trim(),
    email: z.email(),
    password: z.string().trim(),
    role: z.enum(Role).optional(),
    phone: z.string().trim().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.name === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["name"],
      });
    }

    if (data.email === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["email"],
      });
    }

    if (data.password === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["password"],
      });
    }
  });

export const loginValidationSchema = z
  .object({
    email: z.email(error.INVALID_REQUEST.message),
    password: z.string().trim(),
  })
  .superRefine((data, ctx) => {
    if (data.email === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["email"],
      });
    }

    if (data.password === "") {
      ctx.addIssue({
        code: "custom",
        message: error.INVALID_REQUEST.message,
        path: ["password"],
      });
    }
  });

export type SignupSchema = z.infer<typeof signupValidationSchema>;
export type LoginSchema = z.infer<typeof loginValidationSchema>;
