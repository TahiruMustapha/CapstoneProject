import React from 'react'
import { Link } from 'react-router-dom'
import {navItems} from './AllDepartment'
import '../styles/DropDown.css'
import { useState } from 'react';
const DropDown = () => {
    const [dropDown,setDropDown] = useState(false);
  return (
    <div>
      <ul className={dropDown? 'drop-down clicked':'drop-down'}
      onClick={()=>setDropDown(!dropDown)}>
        {navItems.map(items =>{
            return(
                <ul className='tahiru'>
               <li key={items.id} className = {items.cName}>
                     <Link to={items.path} onClick={()=>setDropDown(false)}>{items.title}</Link>
               </li>
               </ul>
            )
        })} 
      </ul>
    </div>
  )
}

export default DropDown
