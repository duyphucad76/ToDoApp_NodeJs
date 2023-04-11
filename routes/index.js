var express = require("express");
var router = express.Router();
var Item = require("../models/item.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  Item.find({}, (error, items) => {
    res.render("index.ejs", { items });
  });
});

//Them
router.post("/them", function (req, res, next) {
  var dulieu = new Item({
    text: req.body.txtTen,
  });
  dulieu.save((error) => res.redirect("/"));
});

//Sua
router.post("/sua", function (req, res, next) {
  Item.findOne({ _id: req.body.id }, (error, dulieu) => {
    dulieu.text = req.body.txtTen;
    dulieu.save((error) => res.redirect("/"));
  });
});
//Xoa
router.post("/xoa", function (req, res, next) {
  Item.deleteOne({ _id: req.body.id }, (error) => res.redirect("/"));
});
module.exports = router;
