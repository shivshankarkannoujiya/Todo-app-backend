import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
    path: "./.env",
});

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`ERROR: ${error.message}`);
            process.exit(1);
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is listening at: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`MongoDB connection Failed !!, error: ${error.message}`);
    });
