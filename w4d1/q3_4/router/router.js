const express = require('express');
const productController = require('../controllers/product');
const cartController = require('../controllers/shoppingcart');
const router = express.Router();

router.get("/", productController.getProduct);
router.post("/addToCart", cartController.getCartItems);
router.get("/shoppingcart", (req,res) => {
    res.render('shoppingcart', {
        cartItems: req.session.cart, pageTitle: "Shopping Cart"
    })
})

module.exports = router;



