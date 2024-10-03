import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchPage() {

    const { cars, loading, error } = useSelector((state) => state.search);


    return (
    <div>
      <h2>Search Results</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cars.length > 0 ? (
        cars.map((car) => (
            
            <div id="car" className="car" key={car.id} >
             <Link to={`/car/${car.id}`}>
               <div className="car-image">
                   <img src={car.image[0]} alt={car.Makes.make_name}  />
               </div>

               <div className="info">
                   <p id="mark">{car.Makes.make_name}  {car.Models.model_name}</p>
                   <p className="price">{car.price}$</p>
               </div>

               <div className="engine">
                   <p className="fuel">{car.fuel} | {car.ccm + 'ccm'}</p>
                   <p className="year">{car.year}</p>
               </div>
             </Link> 
           </div>
   
        ))
      ) : (
        <p>No cars found</p>
      )}
    </div>
  );
};

export default SearchPage;