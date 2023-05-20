import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import style from './CartItem.module.css';


const CartItem = ({ id, name, quantity, price, updateQuantity }) => { 
  const { removeItem} = useContext(CartContext); 
  const total = price * quantity;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(id, newQuantity);
  }

  return (
    <div className={style.cartitem}>
      <div className={style.cartiteminfo}>
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <div>
          <label htmlFor={`quantity-${id}`}>Cantidad:</label>
          <input 
            id={`quantity-${id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className={style.input}
          />
        </div>
        <p>Total: ${total}</p>
      </div>
      <div className={style.itemaction}>
        <button className={style.Button} onClick={() => removeItem(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;