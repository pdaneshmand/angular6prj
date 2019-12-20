const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
app.use(
  session({
    secret: "kjhasdhjkk324kh324hjkhasdhkjkjasdasd",
    saveUninitialized: false,
    resave: false
  })
);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/angulardb").then(() => {
  console.log("mongoose up");
});

const User = require("./models/users");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../intro2angular/dist/intro2angular/")));

app.post("/api/quote", async (req, res) => {
  const user = await User.findOne({ email: req.session.user });
  if (!user) {
    res.json({
      success: false,
      message: "Invalid user!"
    });
    return;
  }
  User.update(
    { email: req.session.user },
    { $set: { quote: req.body.value } }
  ).then(() => {
    res.json({
      success: true
    });
  });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const resp = await User.findOne({ email, password });
  if (!resp) {
    res.json({
      success: false,
      message: "Incorrect Details"
    });
  } else {
    req.session.user = email;
    req.session.save();
    res.json({
      success: true,
      message: "You are logged in"
    });
  }
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.json({
      success: false,
      message: "email already in use"
    });
    return;
  }

  const user = new User({
    email,
    password
  });
  const result = await user.save();
  res.json({
    success: true,
    message: "Welcome!"
  });
});

app.get("/api/isloggedin", (req, res) => {
  res.json({
    status: !!req.session.user
  });
});

app.get("/api/data", async (req, res) => {
  const user = await User.findOne({ email: req.session.user });
  if (!user) {
    res.json({
      status: false,
      message: "User was deleted"
    });
    return;
  }
  res.json({
    status: true,
    email: req.session.user,
    quote: user.quote
  });
});

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.json({
    success: true
  });
});

app.get("*", (req, res) => {
  return (
    res.sendFile(path.join(__dirname, "../intro2angular/dist/intro2angular/index.html"))
  );
});

app.listen(1234, () => console.log("server listening"));
