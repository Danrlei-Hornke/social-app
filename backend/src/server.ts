import logger from "./log";
import { api } from "./api";
import { database } from "../orm/sequelize";

require("dotenv-safe").config();

(async () => {
   try {
      logger.info("Starting server...");
      const port = parseInt(`${process.env.PORT}`);
      
      await database.authenticate().then(() => logger.info("Database connected..."))
         .catch((err) => logger.error(err));
      api.listen(port);
      logger.info(`API iniciada com sucesso na porta ${process.env.PORT}!`);
   } catch (error) {
      logger.error(error);
   }
})();
