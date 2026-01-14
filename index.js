const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const connectDB = require("./src/config/database");
const colorsRoutes = require("./src/routes/colors.routes");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.use("/api/colores", colorsRoutes);
