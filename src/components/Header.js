import './Header.css';
import Vehicle from './Vehicle';

function Header() {

    return (
      <div className='header'>

        <div className='logo'>
          <img  src="./images/logo3.png" alt="logo"/>
          <h2>Used <br/><span>Cars</span></h2>
        </div>

        <div className='desctop-btn'>
          <h3 className='log'>LOG IN</h3>
          <button className='post'>POST AN AD</button>
        </div>

        <div className='menu'>
          <img  className='sedan-btn' src="images/sedann.png" alt="car"/>
          <img  className='search-btn' src="images/search.png" alt="search"/>
          <img  className='menu-btn' src="images/hamburger-menu.png" alt="menu"/>
        </div>

        <div className='vehicle-type'>
          <Vehicle />
        </div>

        <div className='logIn-menu'>

          <div className='profile-btn'>
            <button className='logIn' >Log In</button>
            <button>Post an ad</button>
          </div>
          <div className='under-profile'>
            
          </div>

        </div>
        
      </div>
    );
  }
  
  export default Header;