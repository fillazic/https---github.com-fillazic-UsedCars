import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Vehicle.css';

function Vehicle() {
    const [selectedType, setSelectedType] = useState('sedan'); 

  const handleButtonClick = (type) => {
    setSelectedType(type); 
  };

    return (
        <div className='vehicle'>
        <Link href='/'>
        <button
          className={`type-sedann ${selectedType === 'sedan' ? 'white-background' : 'color-background'}`}
          onClick={() => handleButtonClick('sedan')}
        >
          <img src="images/sedann.png" alt="car" />
        </button>
        </Link>
        <Link href='/'>
        <button
          className={`type-motorcycle ${selectedType === 'motorcycle' ? 'white-background' : 'color-background'}`}
          onClick={() => handleButtonClick('motorcycle')}
        >
          <img src="images/motorcycle.png" alt="motorcycle" />
        </button>
        </Link>
        <Link href='/'>
        <button
          className={`type-truck ${selectedType === 'truck' ? 'white-background' : 'color-background'}`}
          onClick={() => handleButtonClick('truck')}
        >
          <img src="images/truck2.png" alt="truck" />
        </button>
        </Link>
        <Link href='/'>
        <button
          className={`type-tire ${selectedType === 'tire' ? 'white-background' : 'color-background'}`}
          onClick={() => handleButtonClick('tire')}
        >
          <img src="images/tire.png" alt="tire" />
        </button>
        </Link>
      </div>
    );
  }
  
  export default Vehicle;