const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const itemsRoutes = require("./routes/items");
const categoriesRoutes = require("./routes/categories");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemsRoutes);
app.use("/api/categories", categoriesRoutes);

app.get("/", (req, res) => {
  res.send("Backend fittizio attivo. Usa /api/auth e /api/items.");
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
