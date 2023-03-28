import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import '../Shop/Shop.css'
const Shop = () => {
const [products,setProducts]=useState([])

const [cart,setCart]=useState([]);

useEffect(()=>{
  fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
  .then(res => res.json())
  .then(data =>setProducts(data))

},[])

const Add_Cart=(product)=>{
  // console.log(product);
  let newCart=[...cart,product];
  setCart(newCart)
}



  return (
    <div className='shop-con '>
      <div className="pro-con grid grid-cols-1
  md:grid-cols-3
      gap-10 m-12">
{
  products.map(product=> <Products
  key={product.id}
  product={product}
  Add_Cart={Add_Cart}
  ></Products>)
}
      </div>
      <div className="cart-con p-1 ">
<h1 className='font-bold'>Order Summary:</h1>
<p>Selected Item: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;