import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../Context/CartContext';
import {Link} from 'react-router-dom';
import  './CartWidget.module.css'

const CartWidget =() => {
  const {totalQuantity} = useContext(CartContext)
 

  return (
<Link to="/cart" className="cartwidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
  <box-icon className="box-icon" type="solid" name="cart-alt"></box-icon>
  {totalQuantity}
</Link>


  );
}

export default CartWidget;