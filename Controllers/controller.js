const express = require("express");
const router = express.Router();
const userModel = require("../Model/User");

// test route
router.get("/", (req, res) => res.send({ name : "rahul"}));

// fetch user from database if exist (login)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // check if any fileds is empty
  if (!email || !password) {
    return res.status(400).send("Please provide all required fields");
  }

  try {
    //check user exist or not and route besed on response
    let user = await userModel.find({ email: email });
    if (user.length === 0) {
      return res.status(400).send("No user exist with given email");
    }

    // if user exist check password is valid or not
    if (user[0].password !== password) {
      return res.status(400).send("invalid credentials");
    }

    // if everything ok send response
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

//save user to database (singup)
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // check if any fileds is empty
  if (!name || !email || !password) {
    return res.status(400).send("Please provide all required fields");
  }

  try {
    //get user from database to check if it already exist or not
    let user = await userModel.find({ email: email });
    if (user.length !== 0) {
      return res.status(400).send("user already exist with given email");
    }

    // add user to database
    user = new userModel({ name, email, password });
    await user.save();
    res.status(200).send("user registered successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
