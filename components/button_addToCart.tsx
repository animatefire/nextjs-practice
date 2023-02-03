import commerce from '../lib/commerce'

const addToCart = (productId) => {

commerce.cart.add(productId, 5)
.then((response) => console.log(response));

}