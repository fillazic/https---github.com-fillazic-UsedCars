import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Loader from "./Loader";
import { supabase } from '../config/supaBase';  // Import your supabase client
import "./SearchPage.css";

function SearchPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();  // This provides access to the current URL's search params
  const searchParams = new URLSearchParams(location.search);  // Parse the query parameters
  
  const makeId = searchParams.get('makeId');
  const modelId = searchParams.get('modelId');
  const price = searchParams.get('price');
  const yearFrom = searchParams.get('yearFrom');
  const yearTo = searchParams.get('yearTo');
  const vehicleType = searchParams.get('vehicleType');
  const priceFrom = searchParams.get('priceFrom');
  const priceTo = searchParams.get('priceTo');
  const fuel = searchParams.get('fuel');
  const kvFrom = searchParams.get('kvFrom');
  const kvTo = searchParams.get('kvTo');
  const ccmFrom = searchParams.get('ccmFrom');
  const ccmTo = searchParams.get('ccmTo');   
  const transmission = searchParams.get('transmission');   
  const color = searchParams.get('color');   
  const door = searchParams.get('door');   
  const seats = searchParams.get('seats');   
  const aircon = searchParams.get('aircon');   
  const emission = searchParams.get('emission');   
  const interior = searchParams.get('interior');   

  // Fetch cars when search criteria change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchCars = async () => {
      let query = supabase
        .from('Car')
        .select(`*, Models ( model_name ), Makes ( make_name )`);

      // Apply filters based on search params
      if (makeId) query = query.eq('make_id', makeId);
      if (modelId) query = query.eq('model_id', modelId);
      if (priceFrom) query = query.gte('price', priceFrom);
      if (priceTo) query = query.lte('price', priceTo);
      if (yearFrom) query = query.gte('year', yearFrom);
      if (yearTo) query = query.lte('year', yearTo);
      if (kvFrom) query = query.gte('kv', kvFrom);
      if (kvTo) query = query.lte('kv', kvTo);
      if (ccmFrom) query = query.gte('ccm', ccmFrom);
      if (ccmTo) query = query.lte('ccm', ccmTo);
      if (vehicleType) query = query.eq('vehicleType', vehicleType);
      if (fuel) query = query.eq('fuel', fuel);
      if (transmission) query = query.eq('transmission', transmission);
      if (door) query = query.eq('doors', door);
      if (seats) query = query.eq('seats', seats);
      if (color) query = query.eq('color', color);
      if (aircon) query = query.eq('air_condition', aircon);
      if (emission) query = query.eq('emission', emission);
      if (interior) query = query.eq('interior', interior);

      const { data, error } = await query;

      if (error) {
        setError('Error fetching car listings');
        console.error('Error:', error);
      } else {
        setCars(data);  // Set the list of cars
      }
      setLoading(false);  // Stop loading
    };

    const timer = setTimeout(() => {
      fetchCars();  // Call fetch function after delay
    }, 1500);

    return () => clearTimeout(timer);

  }, []);  // Trigger effect when any of these change


  if (loading) return <Loader /> ;
  if (error) return <p>{error}</p>;

  return (
    <div className="car-container-search">
      <h2>Search Results</h2>
      {cars.length > 0 ? (
        cars.map((car) => (
          <div className="car-search" key={car.id}>
            <Link to={`/car/${car.id}`} className="car-image-s">
              <div className="car-image-card">
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
                    <p className="fuel-search">{car.door} doors</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="fail-search">
          <p>Currently, there are no results matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
