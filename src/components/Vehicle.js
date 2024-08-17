import React from 'react';


import './Vehicle.css';

function Vehicle() {

    return (
        <div className='vehicle' >
            <button className='type-sedann'><img src="images/sedann.png" alt="car"/></button>
            <button className='type-motorcycle'><img src="images/motorcycle.png" alt="motorcycle"/></button>
            <button className='type-truck' ><img src="images/truck2.png" alt="truck"/></button>
            <button className='type-tire' ><img src="images/tire.png" alt="tire"/></button>
        </div>
    );
  }
  
  export default Vehicle;