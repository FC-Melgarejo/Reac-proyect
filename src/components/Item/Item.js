import React from 'react';
import { Link } from 'react-router-dom';
import style from './Item.module.css';

const Item = ({ id, name, picture, price, stock }) => {
  
  return (
    <article className={style.item}>
      <header className={style.header}>
        <h2 className={style.itemheader}>{name}</h2>
      </header>
      <picture>
        <img src={picture} alt={name} className={style.itemimg} />
      </picture>
      <section>
        <p className={style.info}>Precio: ${price}</p>
        <p className={style.info}>Stock: {stock}</p>
      </section>
      <footer className={style.ItemFooter}>
        <Link to={`/item/${id}`} className={style.option}>
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
