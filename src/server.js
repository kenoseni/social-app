import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "../template";

import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";

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

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send(Template());
});

// Catch unauthorised errors from express-jwt and other server-side error
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
