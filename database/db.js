require("dotenv").config();
module.exports = {
  db:
    "mongodb://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASS +
    "@" +
    process.env.DB_HOST +
    "/" +
    process.env.DB_NAME
};
