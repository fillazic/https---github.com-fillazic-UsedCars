
import React, { useState } from 'react';
import './Header.css';
import { supabase } from '../config/supaBase';
import { useUser } from '@supabase/auth-helpers-react';

function Header() {

   const user= useUser();
   const [isVisible, setIsVisible] = useState(false);
   const [isVisibleLogIn, setIsVisibleLogIn] = useState(false);

   const changeVisibility = () => {
      setIsVisible(!isVisible)
   }

   const changeVisibilityLogIn = () => {
    setIsVisibleLogIn(!isVisibleLogIn)
 }

 const signOut = async () => {
  const {error} = await supabase.auth.signOut()
}

    return (
      <div className='header' >

        <div className='logo' >
          <img  src="./images/logo3.png" alt="logo"/>
          <h2>Used <br/><span>Cars</span></h2>
        </div>

        <div className='desctop-btn'>
          { !user ?
            <h3 className='log'>LOG IN</h3> 
          : <div className='my-profile' >
            <div className='container-log'> 
                <h3 className='logProfile'>
                    My Profile
                </h3>
                <div className='h-icon'>
                  <i className='fa fa-caret-down' ></i>
                </div>
            </div>      
            <div className= 'profile' >
              <button>My Posts</button>
              <button onClick={signOut}>Sign out</button>
            </div>
            </div>
          }
          <a href='/add_post'><button className='post'>POST AN AD</button></a>
        </div>

        <div className='menu'>
          <img  className='sedan-btn' src="images/sedann.png" alt="car" onClick={changeVisibility}  />
          <img  className='search-btn' src="images/search.png" alt="search"/>
          <img  className='menu-btn' src="images/hamburger-menu.png" alt="menu" onClick={changeVisibilityLogIn} />
        </div>

        <div className={!isVisible? 'vehicle-type' : 'vehicle-type-visible'} >
          <div className='header-vehicle'>
              <div className='close-path-h' onClick={changeVisibility} >
                  <h4>Close</h4>
                  <img src="images/close.png" alt="close" />
              </div>
              <button className='type-sedann-h'><img src="images/sedann.png" alt="car"/></button>
              <button className='type-motorcycle-h'><img src="images/motorcycle.png" alt="motorcycle"/></button>
              <button className='type-truck-h' ><img src="images/truck2.png" alt="truck"/></button>
              <button className='type-tire-h' ><img src="images/tire.png" alt="tire"/></button>
          </div>
        </div>

        <div className={!isVisibleLogIn? 'logIn-menu' : 'logIn-menu-visible'} >

          <div className='profile-btn'>
            <div className='close-path-log' onClick={changeVisibilityLogIn} >
                  <h4>Close</h4>
                  <img src="images/close.png" alt="close" />
            </div>
            <button className='logIn' >Log In</button>
            <button className='post-ad' >Post an ad</button>
          </div>
          <div className='under-profile'>
            
          </div>

        </div>
        
      </div>
    );
  }
  
  export default Header;