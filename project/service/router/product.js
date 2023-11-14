const router = require("express").Router();
const { createProduct, getPagingProduct } = require("../controllers/products");
const authentication = require("../middlewares/authentication");

router.post("/", authentication, createProduct);
router.get("/", getPagingProduct);

module.exports = router;
