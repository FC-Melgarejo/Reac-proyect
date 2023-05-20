import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import CheckoutForm from './CheckoutFrom';
import { db, collection, addDoc, serverTimestamp } from '../../Config/firebaseConfig';


import styles from './Checkout.module.css';

const Checkout = () => {
  
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async ({ name, email, phone }) => {
    setLoading(true);

    try {
      const userDocRef = await addDoc(collection(db, 'users'), { name, email, phone });

      const orderDocData = {
        userId: userDocRef.id,
        items: cart,
        total: total,
        createdAt: serverTimestamp(),
      };

      const orderDocRef = await addDoc(collection(db, 'orders'), orderDocData);

      setOrderId(orderDocRef.id);
      clearCart();
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (orderId) {
    return <h1 className={styles.orderId}>Se está generando su orden: {orderId}</h1>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heanding}>Checkout</h1>
      <CheckoutForm onSubmit={handleSubmit} className={styles.CheckoutForm} />
    </div>
  );
};

export default Checkout;







 
   











