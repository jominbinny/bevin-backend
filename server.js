import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import rsvpRoutes from "./routes/rsvp.js";
import engagementRoutes from "./routes/engagement.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/rsvp", rsvpRoutes);
app.use("/api/engagement", engagementRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err));