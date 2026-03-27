const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createFood, listFood, claimFood } = require("../controllers/foodcontroller");

// Donor creates a food post
router.post("/create", auth, createFood);

// List all available food (not claimed)
router.get("/list", auth, listFood);

// Receiver claims a food post
router.post("/claim", auth, claimFood);

module.exports = router;