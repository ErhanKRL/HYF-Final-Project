import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";
import machineRouter from "./routes/machine.js";
import reviewsRouter from "./routes/reviews.js";
import favoriteRouter from "./routes/favorite.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);
app.use("/api/machines", machineRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/favorite", favoriteRouter);

export default app;
