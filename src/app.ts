import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";
import { deserializeUser } from "./middleware";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
// User Deserialize Middleware
app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  // Log Webserver
  log.info(`Server listing as http://${host}:${port}`);
  // Connect to Mongo Database
  connect();
  // Routes
  routes(app);
});
