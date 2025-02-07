import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config();
const app = express();
mongoose
	.connect(process.env.MONGO)
	.then(() => {
		console.log("Database is connected", process.env.DB_NAME);
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(3000, () => {
	console.log("Server is running on port 3000!");
});

app.get("/test", (req, res) => {
	res.json({
		message: "Hello World!",
	});
});

app.use("/api/user", userRouter);
