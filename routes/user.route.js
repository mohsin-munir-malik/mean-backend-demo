const express = require("express");
const app = express();
const userRoute = express.Router();

// User model
let User = require("../models/User");

// Add User
userRoute.route("/create").post((req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      emailalready = "Email already exists";
      return res.status(400).json({ email: emailalready });
    } else {
      User.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    }
  });
});

// Get All User
userRoute.route("/").get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return res.status(400).json({ error: error });
    } else {
      res.json(data);
    }
  });
});

// Get single User
userRoute.route("/:id").get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update User
userRoute.route("/update/:id").put((req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user && user._id != req.params.id) {
      emailalready = "Email already exists";
      return res.status(400).json({ email: emailalready });
    } else {
      User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        (error, data) => {
          if (error) {
            return next(error);
          } else {
            res.json(data);
            console.log("Data updated successfully");
          }
        }
      );
    }
  });
});

// Delete User
userRoute.route("/delete/:id").delete((req, res) => {
  console.log(req.params);
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = userRoute;
