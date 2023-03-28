import React from 'react';
import './Cart.css'
const Cart = (props) => {
  // const cart=props.cart
  const {cart}=props;
  console.log(cart);
  let total=0;
  let totalShipping=0
for(let product of cart){
  total=total+product.price;
  totalShipping=totalShipping+product.shipping
}
const tax=((total*7)/100)

const grandTotal=(total+totalShipping+tax);

  return (
    <div className='lg:text-center cart
w-36 h-auto lg:w-auto lg:mr-0 mr-10 p-8'>
      <h4 className='font-bold leading-8 text-white'>Order Summary:</h4>
<p className='text-base text-left font-medium leading-10'>Selected Item: {cart.length}</p>
<p className='text-base text-left font-medium leading-10' >Total Price: ${total}</p>
<p className='text-base text-left font-medium leading-10' >Total Shipping: ${totalShipping}</p>
<p className='text-base text-left font-medium  leading-10' >Tax: ${tax}</p>
<h6 className='text-base text-left font-medium leading-10'>Grand Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;