const addToCart = (productId, cart) => {

cart.add(productId, 5)
.then((response) => console.log(response));

} 


export async function addToCart();