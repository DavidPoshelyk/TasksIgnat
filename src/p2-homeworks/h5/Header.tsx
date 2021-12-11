import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import './NavLink.css'


function Header() {
    return (
        <ul className='menu-main'>
         <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to={PATH.PRE_JUNIOR}> Pre Junior  </NavLink></li>
          <li> <NavLink  className={({ isActive }) => isActive ? 'current' : ''} to={PATH.JUNIOR}>   Junior  </NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'current' : ''} to={PATH.JUNIOR_PLUS} > Junior Plus  </NavLink></li>
        </ul>
    )
}

export default Header
