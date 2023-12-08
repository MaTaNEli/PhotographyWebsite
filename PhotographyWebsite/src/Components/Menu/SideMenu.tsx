import './SideMenu.css';
import { PropsWithChildren, useState } from "react";
import { SideBarMoviesData, SideBarTvShowData } from "./SideBarData";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Link } from "react-router-dom";
import Menu from './Menu';
import { mainServer } from '../../ApiLinks/ApiLink';

interface User {
  userName:string
}
const SideMenu = ((props : PropsWithChildren<User>) => {

  const [sideBarShow, setSideBarShow] = useState(false);

  const handleMouseEnter = () => setSideBarShow(!sideBarShow);
  const closeBar = () => sideBarShow ? setSideBarShow(!sideBarShow) : null

  const SignOut = async () => {
    try{
      const res = await mainServer.get(`/signOut`);
      if (res.status == 200) location.reload();
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <IconContext.Provider value={{color: 'white'}}>
        <div  className="navbar"> 
            <Link to='#' className="menu-bars">
              <FaIcons.FaBars onClick={handleMouseEnter}/>
            </Link>
            <h1>What To Watch?</h1>
            <h3>Hello {props.userName}</h3>
            <button className='btn' onClick={SignOut}>Log Out</button>

        </div>  

        <div  className="drop_down"> 
          <nav className={sideBarShow ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={handleMouseEnter}
                onMouseLeave={closeBar}>
              <li className="navbar-toggle">
                <Link to='#' className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li> 
              <Menu list={SideBarMoviesData} title='Movies'/>
              <Menu list={SideBarTvShowData} title='TV Shows'/>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  )
})

export default SideMenu;