const Food = require("../models/food");

// Create food
exports.createFood = async (req, res) => {
  try {
    const { title, quantity, address, expiryTime } = req.body;

    if (!title || !quantity || !address || !expiryTime) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const food = new Food({
      title,
      quantity,
      address,
      expiryTime,
      donor: req.user.id, // assuming req.user is populated by auth middleware
    });

    await food.save();
    res.status(201).json({ message: "Food added successfully", food });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// List available food (not claimed)
exports.listFood = async (req, res) => {
  try {
    const foods = await Food.find({ claimedBy: null }).populate("donor", "name email");
    res.json(foods);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Claim food
exports.claimFood = async (req, res) => {
  try {
    const { foodId } = req.body;

    if (!foodId) return res.status(400).json({ message: "Food ID is required" });

    const food = await Food.findById(foodId);
    if (!food) return res.status(404).json({ message: "Food not found" });

    if (food.claimedBy) return res.status(400).json({ message: "Food already claimed" });

    food.claimedBy = req.user.id;
    await food.save();

    res.json({ message: "Food claimed successfully", food });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};