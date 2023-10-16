// Initialization
import express from "express"; // "type": "module" allows import syntax
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

// Routes
app.get("/", (req, res) => res.send("Server is Ready"));

app.listen(port, () => console.log(`Server started on port ${port}!`));
