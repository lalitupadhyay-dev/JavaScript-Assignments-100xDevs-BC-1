import { Router } from "express";
import hotelRouter from "./hotel.routes.js";
import authRouter from "./auth.routes.js";

const appRouter = Router();

// Auth Routes
appRouter.use("/auth", authRouter);

// Hotel Routes
appRouter.use("/hotels", hotelRouter);

export default appRouter;