import{useState}from 'react';
import style from './ItemCount.module.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const[quantity, setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity > initial){
            setQuantity(quantity - 1);
        }
    }

    return(
        <div className={style.Couter}>
       <div className={style.Controls}>
       <button className={style.Button} onClick={decrement}>-</button>
<span className={style.quantity}>{quantity}</span>
<button className={style.Button} onClick={increment}>+</button>
       </div>
            <button className={style.Button} onClick={() => onAdd(quantity)}disabled={!stock}>Agregar al carrito</button>

        </div>
    )
}


export default ItemCount;
