import express from "express";
import cors from "cors";

import TripRoute from "./routes/TripRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(TripRoute);

app.listen(5000, () => console.log('server running on port...'));