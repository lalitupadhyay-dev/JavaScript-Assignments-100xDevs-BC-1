import "dotenv/config";
import { env } from "./src/configs/env.js";

import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);

server.listen(env.PORT, () => console.log("Server is listening on port: ", env.PORT));