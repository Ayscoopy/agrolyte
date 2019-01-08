const express = require("express");
const router = express.Router();

// Newsletter model
const Newsletter = require("../../models/Newsletter");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/buy-agr", function(req, res) {
  res.render("buyagr");
});

router.get("/airdrop", function(req, res) {
  res.render("airdrop");
});

// newsletter
router.post("/", (req, res) => {
  const newNewsletter = new Newsletter({
    newsletter: req.body.youremail
  });

  newNewsletter.save().then(newsletter => res.json(newsletter));

  //const news = req.body.newsletter;

  //console.log(news);
});

module.exports = router;
