import './SideMenu.css';
import { useState } from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";

const SideMenu = () => {
  const [sideBarShow, setSideBarShow] = useState(false);

  const handleMouseEnter = () => setSideBarShow(!sideBarShow);

  const closeBar = () => sideBarShow ? setSideBarShow(!sideBarShow) : null

  return (
    <>
      <IconContext.Provider value={{color: 'white'}}>
        <div  className="navbar"> 
            <Link to='#' className="menu-bars">
              <FaIcons.FaBars onClick={handleMouseEnter}/>
            </Link>
            <h1>What To Watch?</h1>
        </div>  
        <div  className="drop_down"> 
          <nav className={sideBarShow ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={handleMouseEnter}
                onMouseLeave={closeBar}>
              <li className="navbar-toggle">
                <Link to='#' className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li> {SideBarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        
      </IconContext.Provider>
    </>
  )
}

export default SideMenu;