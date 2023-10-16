// Initialization
import express from "express"; // "type": "module" allows import syntax
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

// Routes
app.get("/", (req, res) => res.send("Server is Ready"));

app.listen(port, () => console.log(`Server started on port ${port}!`));
