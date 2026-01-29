import { Router } from "express";
import { create } from "../controllers/hotel.controller.js";
import verifyRole from "../middlewares/verifyRole.middleware.js";
import auth from "../middlewares/auth.middleware.js";
import validator from "../middlewares/validator.middleware.js";
import { createHotelValidationSchema } from "../validations/hotel.validation.js";
const hotelRouter = Router();
hotelRouter.post("/", auth, verifyRole, validator(createHotelValidationSchema), create);
export default hotelRouter;
//# sourceMappingURL=hotel.routes.js.map