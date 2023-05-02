import React from 'react'
import './sidebar.css'
import {Links} from './sidebarElements'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul className='sidebar-menu'>
            {Links.map((menuItem)=>{
                 const {id,path,Icon} = menuItem
                 return(
                    <li className='sidebar-link' key={id}>
                        <Link Link to={path}>
                          <Icon className='icons'/>
                        </Link>
                    </li>
                 )
            }
            )}
        </ul>
    </div>
  )
}

export default Sidebar

