import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const [menu,setmenu]= useState("home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
<Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
<a href='#explore-menu' onClick={()=> setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
<a href='#app-download' onClick={()=> setmenu("mobile app")}  className={menu==="mobile app"?"active":""}>mobile app</a>
<a  href='#footer' onClick={()=> setmenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
   <img src={assets.basket_icon} alt="" />
   <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar