import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  //   const total = cart.reduce((total, prod) => total + prod.price, 0);
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  let shiping = 0;
  if (total > 35) {
    shiping = 0;
  } else if (total > 15) {
    shiping = 4.99;
  } else if (total > 0) {
    shiping = 12.99;
  }

  const tax = Math.round(total / 10);
  const grandTotal = total + shiping + tax;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Product Price: {formatNumber(total)}</p>
      <p>Item Ordered: {cart.length}</p>
      <p>Shipping Cost:{shiping}</p>
      <p>Tax + Vat:{tax}</p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
