import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const register = async (req, res) => {
  // your existing register code
};

export const login = async (req, res) => {
  console.log("Login request body:", req.body); // <-- put here at the very top
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Incorrect password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Login success, sending:", {
      token,
      user: { role: user.role, name: user.name, email: user.email },
    }); // <-- put here before sending response

    res.json({
      message: "Login successful",
      token,
      user: { role: user.role, name: user.name, email: user.email }, // <-- must send user object
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};