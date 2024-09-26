const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/userModels");  // Fix import, no need to require again in routes
const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name,
      email,
      age
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log("error");
    res.status(400).json({ error: error.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Get Single User by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById(id);  // Corrected to pass the id
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete User by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);  // Simplified
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Update User by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
