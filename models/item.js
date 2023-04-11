var db = require("mongoose");

db.connect("mongodb://localhost:27017/CuoiKi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var itemSchema = db.Schema({
  text: String,
});

var Item = db.model("Item", itemSchema);
module.exports = Item;
