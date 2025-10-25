import React, { useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import './nav.css'
const nav = () => {
    const [menu,setMenu]=useState("Home");
  return (
    <div className='nav'>
      <img src={assets.logo} alt=""  className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu('Home')} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu('menu')} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu('mobie_app')} className={menu==="mobie_app"?"active":""}>mobie_app</li>
        <li onClick={()=>setMenu('contuct')} className={menu==="contuct"?"active":""}>contuct</li>
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
