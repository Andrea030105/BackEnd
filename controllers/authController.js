const HARDCODED_USER = {
  username: "admin",
  password: "qwerty",
};

const FAKE_TOKEN = "secrettoken123";

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username e password sono obbligatori." });
  }

  if (
    username === HARDCODED_USER.username &&
    password === HARDCODED_USER.password
  ) {
    return res.status(200).json({
      success: true,
      message: "Login effettuato con successo.",
      token: FAKE_TOKEN,
      user: { username: HARDCODED_USER.username },
    });
  }

  return res
    .status(401)
    .json({ success: false, message: "Credenziali non valide." });
}

function me(req, res) {
  res.status(200).json({
    success: true,
    user: { username: HARDCODED_USER.username },
  });
}

module.exports = { login, me };
