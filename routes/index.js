const express = require("express");
const router = express.Router();
const { sendMessage } = require("../helpers/twilio");

/* GET home page */
router.post("/send", (req, res) => {
  console.log(req.body);
  const { message, receiver } = req.body;
  sendMessage(message, receiver)
    .then(response => {
      console.log(response);
      res.json({ message: "Mensaje enviado con éxito" });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
