const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
ObjectId = Schema.ObjectId;
let User = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("User", User);
