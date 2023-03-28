import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
  return (
    <nav className='h-16 bg-slate-900 text-white
    flex justify-between items-center px-20 '>
  <img className=' cursor-pointer' src={logo} alt="" />
 <div className='no-underline flex font-medium'>
 <a className=' ml-5 hover:text-orange-400' href="/shop">Shop</a>
  <a className=' ml-5 hover:text-orange-400' href="/order">Order</a>
  <a className=' ml-5 hover:text-orange-400' href="/inventory">Inventory</a>
  <a className=' ml-5 hover:text-orange-400' href="/login">Log-in</a>
 </div>
    </nav>
  );
};

export default Header;