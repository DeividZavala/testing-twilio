const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/send", (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
