import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'


function Navbar() {
  return (
   <nav className={style.nav}>
    <Link className={style.NavLink} to='/'>
      <h1 className={style.h1}>My Store</h1>
    </Link>
    <div className={style.div}>
      <NavLink to={`/category/remeras`} activeclassname='active' className={style.NavLink}>Remera</NavLink>
      <NavLink to={'/category/auriculares'} activeclassname='active' className ={style.NavLink}>Auricular</NavLink>
      <NavLink to='/category/camperas' activeclassname='active' className={style.NavLink}>Parcka</NavLink>
      <NavLink  to='/category/botellas' activeclassname ='active' className={style.NavLink}>Bottella</NavLink>
      <NavLink to='/category/anteojos' activeclassname='active' className={style.NavLink}>Anteojos</NavLink>
      <NavLink to='/category/gorros' activeclassname='active' className={style.NavLink}>Gorrito</NavLink>
      <NavLink to='/category/mochilas' activeclassname='active' className={style.NavLink}>Mochila</NavLink>
      <NavLink to='/category/zapatillas' activeclassname='active' className={style.NavLink}>zapatilla</NavLink>
    </div>
    <CartWidget className={style.CartWidget}/>

   </nav>
  )
}

export default Navbar
