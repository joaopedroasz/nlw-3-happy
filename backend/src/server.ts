import express from "express";
import "express-async-errors";

import cors from "cors";

import { join } from "path";

import "./database/connection";

import errorHandler from "./errors/handler";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(8000);
