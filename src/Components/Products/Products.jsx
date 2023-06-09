import React from 'react';
import './Products.css'
const Products = (props) => {
 const {img,price,name,category,ratings,seller}=props.product

let Add_Cart=props.Add_Cart;
  return (
    <div>
    
    <div className="cards rounded-lg shadow-xl p-3
   
    ">
    <img className='w-64 h-64  rounded-lg' src={img} alt="" srcset="" />
    <div className="pro-info h-44">
    <h6 className='text-xl font-semibold leading-6
  tracking-wide my-3' >{name}</h6>
    <p className='text-lg font-semibold leading-6
  tracking-wide my-3' >Price: {price}$</p>
    <p className='text-base font-semibold leading-6
  tracking-wide my-3' >Manufacturer: {seller}</p>
    <p className='text-base font-semibold leading-6
  tracking-wide my-3' >Ratings: {ratings} Stars</p>
    </div>




<button onClick={()=>Add_Cart(props.product)} className="btn bg-rose-400 hover:btn-warning border-0 w-full">
Add to Cart
</button>

</div>


  
    </div>
  );
};

export default Products;