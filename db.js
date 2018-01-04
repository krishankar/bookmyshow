var mongoose = require("mongoose");

exports.mongoose=mongoose;

require("dotenv").load();
mongoose.connect(process.env.DB_URL);

exports.mongoose = mongoose;

var itemSchema = mongoose.Schema({
  title: String,
  actor: String,
  rating: Number
});

exports.Item = mongoose.model("Item", itemSchema, "items");
