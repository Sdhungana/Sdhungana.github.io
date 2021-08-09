const cartItemList = [
    {product_name: 'Sony Headphone', price: 200, qty: 10},
    {product_name: 'Nike shoe', price: 500, qty: 5},
    {product_name: 'Dell Laptop', price: 900, qty: 3}
]

exports.getCartItems = (req,res) => {
    res.render('shoppingcart', {
        cartItems: cartItemList, pageTitle: "Shopping Cart"
    })
}
