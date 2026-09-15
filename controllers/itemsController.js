const items = require("../data/items");

function getAllItems(req, res) {
  return res.status(200).json({
    success: true,
    data: items,
  });
}

function getItemById(req, res) {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({
      success: false,
      message: "Item non trovato.",
    });
  }

  return res.status(200).json({
    success: true,
    data: item,
  });
}

function createItem(req, res) {
  const { name, price, category } = req.body;

  if (!name || price === undefined || !category) {
    return res.status(400).json({
      success: false,
      message: "name, price e category sono obbligatori.",
    });
  }

  const newItem = {
    id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
    name,
    price,
    category,
  };

  items.push(newItem);

  return res.status(201).json({
    success: true,
    data: newItem,
  });
}

function updateItem(req, res) {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Item non trovato.",
    });
  }

  const { name, price, category } = req.body;

  items[index] = {
    ...items[index],
    name: name ?? items[index].name,
    price: price ?? items[index].price,
    category: category ?? items[index].category,
  };

  return res.status(200).json({
    success: true,
    data: items[index],
  });
}

function deleteItem(req, res) {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Item non trovato.",
    });
  }

  const deletedItem = items.splice(index, 1)[0];

  return res.status(200).json({
    success: true,
    data: deletedItem,
  });
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
