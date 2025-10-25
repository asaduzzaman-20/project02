import React, { useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import './nav.css'
const nav = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='nav'>
      <img src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li className={menu==="Home"?"active":""}>Home</li>
        <li className={menu==="Home"?"active":""}>About</li>
        <li className={menu==="Home"?"active":""}>menu</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Signin</button>
      </div>
    </div>
  )
}

export default nav
