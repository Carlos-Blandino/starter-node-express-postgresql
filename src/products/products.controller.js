const productsService = require("./products.service");

function productExists(req, res, next) {
  productsService.read(req.params.productId).then((product) => {
    if (product) {
      res.locals.product = product;
      return next();
    }
    next({ status: 404, message: `Product cannot be found.` });
  });
}

function read(req, res, next) {
  const { product: data} = res.locals;
  return knex("products").select("*").where({ product_id }).first();
}

function list(req, res, next) {
  productsService.list().then((data) => res.json({ data }));
}

module.exports = {
  read: [productExists, read],
  list: [list],
};
