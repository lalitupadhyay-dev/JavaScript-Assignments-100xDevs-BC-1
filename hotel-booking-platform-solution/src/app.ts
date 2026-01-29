import express from "express";
import globalErrorHandler from "./utils/globalErrorHandler.util.js";
import authRouter from "./routes/auth.routes.js";
import hotelRouter from "./routes/hotel.routes.js";
import appRouter from "./routes/index.js";

const app = express();

app.use(express.json());

// App Router
app.use("/api", appRouter);


// Global Error Handler
app.use(globalErrorHandler);

export default app;
