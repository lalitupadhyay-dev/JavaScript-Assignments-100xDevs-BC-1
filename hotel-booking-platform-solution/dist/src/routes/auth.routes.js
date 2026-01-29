import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";
import validator from "../middlewares/validator.middleware.js";
import { loginValidationSchema, signupValidationSchema, } from "../validations/auth.validation.js";
const authRouter = Router();
authRouter.post("/signup", validator(signupValidationSchema), signup);
authRouter.post("/login", validator(loginValidationSchema), login);
export default authRouter;
//# sourceMappingURL=auth.routes.js.map