require("dotenv").config();
const express = require("express");
const routes = require("./router");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));//
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));// serve para dar acesso aos files
app.use("/api", routes);
app.listen(process.env.PORT || 3333);
