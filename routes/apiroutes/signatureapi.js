const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async function (req, res, next) {
  try {
    await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      country: req.body.country,
      streetAddress: req.body.streetAddress,
    });
    res.json({ msg: `User ${req.body.email} signed succesfully!` });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
