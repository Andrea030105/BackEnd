const gateway = require("../config/braintreeGateway");
const items = require("../data/items");
const orders = require("../data/orders");

// GENERA IL TOKEN PER IL FRONTEND
exports.generateToken = async (req, res) => {
  try {
    const response = await gateway.clientToken.generate({});

    return res.status(200).json({
      clientToken: response.clientToken,
    });
  } catch (error) {
    console.error("Errore generazione token:", error);

    return res.status(500).json({
      success: false,
      message: "Errore nella generazione del token",
    });
  }
};

// CALCOLA IL TOTALE DA PAGARE
function calculateTotal(cartItems) {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    throw new Error("Il carrello è vuoto");
  }

  return cartItems.reduce((total, cartItem) => {
    const product = items.find(
      (item) => String(item.id) === String(cartItem.productId),
    );

    if (!product) {
      throw new Error(`Prodotto non trovato: ${cartItem.productId}`);
    }

    const quantity = Number(cartItem.quantity);

    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Quantità non valida");
    }

    const price = Number(product.price);

    if (!Number.isFinite(price) || price < 0) {
      throw new Error(`Prezzo non valido per il prodotto ${product.id}`);
    }

    return total + price * quantity;
  }, 0);
}

// PROCESSA IL PAGAMENTO
exports.processPayment = async (req, res) => {
  try {
    const { paymentMethodNonce, items: cartItems, billing } = req.body;

    if (!paymentMethodNonce) {
      return res.status(400).json({
        success: false,
        message: "Payment nonce mancante",
      });
    }

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Il carrello è vuoto",
      });
    }

    if (!billing) {
      return res.status(400).json({
        success: false,
        message: "Dati di fatturazione mancanti",
      });
    }

    const total = calculateTotal(cartItems);
    const amount = total.toFixed(2);

    const result = await gateway.transaction.sale({
      amount,
      paymentMethodNonce,
      options: {
        submitForSettlement: true,
      },
    });

    if (!result.success) {
      return res.status(402).json({
        success: false,
        message: result.message || "Pagamento rifiutato",
      });
    }

    const transaction = result.transaction;

    const order = {
      id: orders.length + 1,
      billing,
      items: cartItems,
      total: amount,
      transactionId: transaction.id,
      transactionStatus: transaction.status,
      status: "paid",
      createdAt: new Date().toISOString(),
    };

    orders.push(order);

    console.dir(order, {
      depth: null,
      colors: true,
    });

    return res.status(201).json({
      success: true,
      order,
      transaction: {
        id: transaction.id,
        status: transaction.status,
      },
    });
  } catch (error) {
    console.error("Transaction error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Errore durante il pagamento",
    });
  }
};
