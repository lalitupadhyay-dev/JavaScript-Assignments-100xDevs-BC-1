function loadEnvVariables() {
    const { PORT, DATABASE_URL } = process.env;
    // 🔍 Check required variables
    if (!PORT) {
        throw new Error("❌ PORT is not defined in environment variables");
    }
    if (!DATABASE_URL) {
        throw new Error("❌ DATABASE_URL is not defined in environment variables");
    }
    // 🔢 Convert & validate PORT
    const portNumber = Number(PORT);
    if (isNaN(portNumber) || portNumber <= 0) {
        throw new Error(" PORT must be a valid positive number");
    }
    console.log("Environment variables loaded successfully");
    return {
        PORT: portNumber,
        DATABASE_URL: DATABASE_URL
    };
}
export const env = loadEnvVariables();
//# sourceMappingURL=env.js.map