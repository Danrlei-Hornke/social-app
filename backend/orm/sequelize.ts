import { Sequelize } from "sequelize";

const DEV = process.env.ENVIRONMENT == "dev";
const name = process.env.DATABASE_NAME!;
const user = process.env.DATABASE_USER!;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

export const database = new Sequelize(name, user, password, {
   dialect: "mysql",
   host: host,
   logging: DEV,
   timezone: "+00:00",
});
