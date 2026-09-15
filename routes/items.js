const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/auth");
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemsController");

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", checkAuth, createItem);
router.put("/:id", checkAuth, updateItem);
router.delete("/:id", checkAuth, deleteItem);

module.exports = router;
