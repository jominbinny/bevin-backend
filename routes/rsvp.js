import express from "express";
import Count from "../models/RSVP.js";

const router = express.Router();

// ADD RSVP (increment total)
router.post("/", async (req, res) => {
  try {
    const { count } = req.body;

    if (!count || count < 1) {
      return res.status(400).json({ error: "Invalid count" });
    }

    let doc = await Count.findOne();

    if (!doc) {
      doc = new Count({ total: count });
    } else {
      doc.total += count;
    }

    await doc.save();

    res.json({ total: doc.total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET TOTAL
router.get("/", async (req, res) => {
  const doc = await Count.findOne();
  res.json({ total: doc?.total || 0 });
});

export default router;