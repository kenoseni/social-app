import express from "express";
import path from "path";
import { MongoClient } from "mongodb";
import template from "../template";

// comment it out before building for production
import devBundle from "./devBundle";

const app = express();
// comment it out before building for production
devBundle.compile(app);

const CURRENT_WORKING_DIRECTORY = process.cwd();

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIRECTORY, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});

// Database Connection URL
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernSetup";
// Use connect method to connect to the server
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
  }
);
