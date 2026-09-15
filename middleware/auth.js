const HARDCODED_TOKEN = "Bearer secrettoken123";

function checkAuth(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Token mancante. Effettua il login." });
  }

  if (authHeader !== HARDCODED_TOKEN) {
    return res.status(403).json({ message: "Token non valido." });
  }

  next();
}

module.exports = checkAuth;
