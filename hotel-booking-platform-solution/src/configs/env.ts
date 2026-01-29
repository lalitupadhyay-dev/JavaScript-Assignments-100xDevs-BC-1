interface ENV {
  PORT: number;
  DATABASE_URL: string;
  JWT_SECRET: string;
}

function loadEnvVariables(): ENV {
  const { PORT, DATABASE_URL, JWT_SECRET } = process.env;

  // Check Port
  if (!PORT) {
    throw new Error("PORT is not defined in environment variables");
  }
  // Convert & validate PORT
  const portNumber = Number(PORT);
  if (isNaN(portNumber) || portNumber <= 0) {
    throw new Error(" PORT must be a valid positive number");
  }

  // Check Database url
  if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }

  // Check Jwt secret
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  console.log("Environment variables loaded successfully");

  return {
    PORT: portNumber,
    DATABASE_URL: DATABASE_URL,
    JWT_SECRET: JWT_SECRET,
  };
}

export const env = loadEnvVariables();
