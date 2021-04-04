const CategoriesService = require("./categories.service");

function list(req, res) {
  CategoriesService.list().then((data) => res.json({ data }));
}

module.exports = {
  list,
};
