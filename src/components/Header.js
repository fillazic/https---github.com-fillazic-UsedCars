import './Header.css';

function Header() {
    return (
      <div className='header'>

        <div className='logo'>
          <img  src="images/logo1.png" alt="44"/>
          <h2>Used <br/><span>Cars</span></h2>
        </div>

        <div className='desctop-btn'>
          <h3 className='log'>LOG IN</h3>
          <button className='post'>POST AN AD</button>
        </div>

        <div className='menu'>
          <img  src="images/sedan.png" alt="44"/>
          <img src="images/search.png" alt="44"/>
          <img src="images/hamburger-menu.png" alt="44"/>
        </div>

        <div className='vehicle-type'>
          <button><img  src="images/sedan.png" alt="44"/></button>
          <button><img  src="images/motorcycle.png" alt="44"/></button>
          <button><img  src="images/truck.png" alt="44"/></button>
          <button><img  src="images/tire.png" alt="44"/></button>
        </div>

        <div className='logIn-menu'>
          <button>LogIn</button>
          <button>Post an ad</button>
        </div>
        
      </div>
    );
  }
  
  export default Header;