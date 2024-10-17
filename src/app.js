import express from "express";

const app = express();
app.use(express.json({ limit: "16kb" }));

// Routes import
import TodoRouter from "./routes/todos.routes.js";


// Routes declaration
app.use("/api/v1/todo", TodoRouter);


export { app };
