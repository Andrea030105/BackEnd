const gateway = require("../config/braintreeGateway");

// GENERA IL TOKEN PER IL FRONTEND
exports.generateToken = async (req, res) => {
  try {
    const response = await gateway.clientToken.generate({});
    res.json({ clientToken: response.clientToken });
  } catch (error) {
    console.error("Error generate token:", error);
    res.status(500).json({ error: "ERROR GENERETE TOKEN" });
  }
};

// PROCESSA IL PAGAMENTO
exports.processPayment = async (req, res) => {
  const { paymentMethodNonce, amount } = req.body;

  if (!paymentMethodNonce || !amount) {
    return res.status(400).json({ error: "NONCE or MISSING AMOUNT " });
  }

  try {
    const result = await gateway.transaction.sale({
      amount: amount.toString(),
      paymentMethodNonce: paymentMethodNonce,
      options: {
        submitForSettlement: true,
      },
    });

    if (result.success) {
      res.json({ success: true, transaction: result.transaction });
    } else {
      res.status(400).json({ success: false, message: result.message });
    }
  } catch (error) {
    console.error("TRANSICTION ERROR:", error);
    res.status(500).json({ error: "ERROR PATMENT" });
  }
};
