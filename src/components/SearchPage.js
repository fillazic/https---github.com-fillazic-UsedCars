import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./SearchPage.css";

function SearchPage() {

    const { cars, loading, error } = useSelector((state) => state.search);


    return (
      <div className="car-container-search">
      <h2>Search Results</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cars.length > 0 ? (
        cars.map((car) => (
          <div className="car-search" key={car.id}>
            <Link to={`/car/${car.id}` } className="car-image-s" >
              <div className="car-image-card" >
                <div className="car-image-search">
                  <img src={car.image[0]} alt={car.Makes.make_name} />
                </div>
              </div>
              <div className="all-info">
                <div className="info-search">
                  <p id="mark">
                    {car.Makes.make_name} {car.Models.model_name}
                  </p>
                  <p className="price-search">{car.price}$</p>
                </div>
                <div className="baseinfo">
                    <div className="engine-search">
                      <p className="year-search">{car.year}. {car.vehicleType}</p>
                      <p className="fuel-search">{car.fuel} | {car.ccm}cm</p>
                    </div>
                    <div className="engine-search">
                      <p className="year-search">{car.color}</p>
                      <p className="fuel-search">{car.kv}</p>
                    </div>
                    <div className="engine-search">
                      <p className="year-search">{car.transmission}</p>
                      <p className="fuel-search">{car.door}doors</p>
                    </div>
                </div>
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