import './Vehicle.css';

function Vehicle() {

    return (
        <div className='vehicle'>
            <div className='close-path'>
                <h4>Close</h4>
                <img src="images/close.png" alt="close"/>
            </div>
            <button className='type-sedann'><img src="images/sedann.png" alt="car"/></button>
            <button className='type-motorcycle'><img src="images/motorcycle.png" alt="motorcycle"/></button>
            <button className='type-truck' ><img src="images/truck2.png" alt="truck"/></button>
            <button className='type-tire' ><img src="images/tire.png" alt="tire"/></button>
        </div>
    );
  }
  
  export default Vehicle;