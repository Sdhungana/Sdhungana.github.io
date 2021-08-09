const express = require('express');
const productController = require('../controllers/product');
const cartController = require('../controllers/shoppingcart');
const router = express.Router();

router.get("/", productController.getProduct);
router.get("/addToCart", cartController.getCartItems);

module.exports = router;



