import express from "express";
import Engagement from "../models/Engagement.js";

const router = express.Router();

// ADD RSVP
router.post("/", async (req, res) => {
  const { count } = req.body;

  let doc = await Engagement.findOne();

  if (!doc) {
    doc = new Engagement({ total: count });
  } else {
    doc.total += count;
  }

  await doc.save();

  res.json({ total: doc.total });
});

// GET TOTAL
router.get("/", async (req, res) => {
  const doc = await Engagement.findOne();
  res.json({ total: doc?.total || 0 });
});

export default router;