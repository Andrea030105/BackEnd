const categories = require("../data/categories");

function getAllCategories(req, res) {
  return res.status(200).json({
    success: true,
    data: categories,
  });
}

module.exports = {
  getAllCategories,
};
