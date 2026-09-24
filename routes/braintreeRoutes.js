const express = require("express");
const router = express.Router();
const {
  generateToken,
  processPayment,
} = require("../controllers/braintreeController");

router.get("/token", generateToken);
router.post("/checkout", processPayment);

module.exports = router;
