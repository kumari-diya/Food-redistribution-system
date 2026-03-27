const cors = require("cors");
app.use(cors());
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(cors());          // <-- must be before routes
app.use(express.json());
// Import routes
const authRoutes = require("./routes/authroutes");
const foodRoutes = require("./routes/foodroutes");

// Use routes
app.use("/auth", authRoutes);
app.use("/food", foodRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/food-redistribution";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));