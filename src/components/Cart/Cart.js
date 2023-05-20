import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);


  if (totalQuantity === 0) {
    return (
      <div className={styles.cartContainer}>
        <h1 className={styles.title}>No tienes productos en tu carrito</h1>
        <Link to='/' className={styles.link}>Productos</Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h1 className={styles.total}>Total: ${total}</h1>

      <button onClick={()=> clearCart()} className={styles.button}>Limpiar carrito</button>
      <Link to='/checkout' className={styles.link}>Checkout</Link>
    </div>
  );
};

export default Cart;
