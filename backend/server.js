// Initialization
import express from "express"; // "type": "module" allows import syntax
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/database.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();

app.use(express.json()); // allows parse raw json
app.use(express.urlencoded({ extended: true })); // allows parse form data

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is Ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}!`));
