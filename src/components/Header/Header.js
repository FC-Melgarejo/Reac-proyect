import React from 'react';
import style from './Header.module.css';
import Navbar from '../Nabvar/Navbar';


function Header() {
  return (
    <div className={style.h1}>
      <h1 className={style.h1}><a href="/">Alta Pinta!!</a></h1>
      <Navbar />
    </div>
  );
}

export default Header;