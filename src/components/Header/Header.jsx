import React, { useState } from 'react'
import './Header.scss'
import { Search, Star, Menu, X } from 'feather-icons-react';
import Favorites from '../Favorites/Favorites';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); 
  const [showFavorites, setShowFavorites] = useState(false); 
  
  return (
    <div>
      <nav>
        <div className='namePage'><p className='namePage'><a href="#" >Break News</a></p></div>
        <ul className={showMenu ? 'show': ''}>
            <li onClick={()=> setShowMenu(false)}><a href="#" >World</a></li>
            <li onClick={()=> setShowMenu(false)}><a href="#" >Bussines</a></li>
            <li onClick={()=> setShowMenu(false)}><a href="#" >Economy</a></li>
            <li onClick={()=> setShowMenu(false)}><a href="#" >Sports</a></li>
            <li onClick={()=> setShowMenu(false)}><a href="#" >Scientific</a></li>
            <div  className='v-line'/>
            <div className='containerSearch'>
              <p>Search</p>
              <Search className='iconSearch' />
              <div  className='v-line'/>
            </div>
            <div className='containerSearch' onClick={() => setShowFavorites(!showFavorites)}>
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
      {
        showFavorites ?
          <Favorites />
        :
          null
      }
    </div>
  )
}

export default Header