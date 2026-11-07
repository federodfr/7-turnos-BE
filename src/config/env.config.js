import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["PORT", "NODE_ENV", "MONGO_DB_URI"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingEnvVars.length > 0) {
  console.error(
    `Faltan variables de entorno requeridas: ${missingEnvVars.join(", ")}. Revisá el archivo .env.`
  );
  process.exit(1);
}

const config = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
  mongoURI: process.env.MONGO_DB_URI
};

export default config;
