import z from "zod";
export declare const signupValidationSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodEnum<{
        readonly customer: "customer";
        readonly owner: "owner";
    }>>;
    phone: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const loginValidationSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.z.core.$strip>;
export type SignupSchema = z.infer<typeof signupValidationSchema>;
export type LoginSchema = z.infer<typeof loginValidationSchema>;
//# sourceMappingURL=auth.validation.d.ts.map