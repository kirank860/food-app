import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias impedit animi nesciunt. Cupiditate ut recusandae ad et eos dolores voluptatum commodi temporibus magnam nihil! Perspiciatis iusto nam quasi porro.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
<img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
<p>{item.menu_name}</p>

            </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
 