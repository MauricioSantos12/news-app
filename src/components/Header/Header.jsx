import React, { useState } from 'react'
import './Header.scss'
import { Search, Star, Menu, X } from 'feather-icons-react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); 
  
  return (
    // <header className='headerContainer'>
    //     {/* <h2 className="titleHeader"> NewsGeeks </h2> */}
    //     <header>
    //       <div className='conteinerSubHeader'>
    //         <ul className={showMenu ? 'show nav-menu': 'nav-menu'}>
    //             <li className="nav-li "><a  className='active' href="#">Home</a></li>
    //             <li className="nav-li"><a href="#">About Us</a></li>
    //             <li className="nav-li"><a href="#">Our Products</a></li>
    //             <li className="nav-li"><a href="#">Careers</a></li>
    //             <li className="nav-li"><a href="#">Contact Us</a></li>
    //         </ul>
    //       </div>
    //       <div className='conteinerSubHeader'>
    //         <div className='containerSearch'>
    //           <p>Search</p>
    //           <Search className='iconSearch' />
    //           <div  className='v-line'/>
    //         </div>
    //         <div className='containerSearch'>
    //           <p>Favorites</p>
    //           <Star className='iconSearch' />
    //         </div>
    //       </div>
    //       <button className="menu-hamburguesa" id="menu-hamburguesa">
    //             {!showMenu ?
    //             <Menu onClick={()=> setShowMenu(!showMenu)}/>
    //             :
    //             <X onClick={()=> setShowMenu(!showMenu)}/>
    //             }
    //         </button>
    //     </header>
    // </header>
    <nav>
      <ul className={showMenu ? 'show': ''}>
          <li onClick={()=> setShowMenu(false)}><a href="#" >About me</a></li>
          <li onClick={()=> setShowMenu(false)}><a href="#" >Skills</a></li>
          <li onClick={()=> setShowMenu(false)}><a href="#" >Projects</a></li>
          <div className='containerSearch'>
            <p>Search</p>
            <Search className='iconSearch' />
            <div  className='v-line'/>
          </div>
          <div className='containerSearch'>
            <p>Favorites</p>
            <Star className='iconSearch' />
          </div>
      </ul>
      
      <button className="menu-hamburguesa" id="menu-hamburguesa">
          {!showMenu ?
          <Menu onClick={()=> setShowMenu(!showMenu)}/>
          :
          <X onClick={()=> setShowMenu(!showMenu)}/>
          }
      </button>
    </nav>
  )
}

export default Header