import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
connectDb();
const port = process.env.PORT || 8000;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello Backend!");
});

//Listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
