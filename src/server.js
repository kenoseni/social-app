import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "../template";

// comment it out before building for production
import devBundle from "./devBundle";

const app = express();
// comment it out before building for production
devBundle.compile(app);

const CURRENT_WORKING_DIRECTORY = process.cwd();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIRECTORY, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

export default app;
