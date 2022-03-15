import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

app.use(cors());
app.use(express.json());

//main url
app.use("/api/v1/restaurants", restaurants);
//If someone is going to another url that does not exists
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
