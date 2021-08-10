exports.getCartItems = (req, res) => {
  let sessionCart = req.session.cart;
  let present = false;
  for (let c of sessionCart) {
    if (c.prodName == req.body.prodName) {
      c.prodPrice += parseFloat(req.body.prodPrice);
      present = true;
      c.prodQty++;
    }
  }
  if (!present) {
    req.session.cart.push({
      prodName: req.body.prodName,
      prodPrice: parseFloat(req.body.prodPrice),
      prodQty: 1,
    });
  }

  res.redirect(303, "/shoppingcart");
};
