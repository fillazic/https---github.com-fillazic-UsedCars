import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../config/supaBase';
import './FullPost.css';

const FullPost = () => {
  const { id } = useParams();  // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === car.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? car.image.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const fetchCarDetails = async () => {
      const { data, error } = await supabase
        .from('Car')
        .select(` *, Models ( model_name ), Makes ( make_name )`)
        .eq('id', id)
        .single();  // Fetch a single car

      if (error) {
        console.error('Error fetching car details:', error);
      } else {
        setCar(data);
      }
      setLoading(false);
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found</p>;

  return (
    <div>
        <div className="info-fullpost">
            <p id="mark">{car.Makes.make_name}  {car.Models.model_name}</p>
            <p className="price">{car.price}$</p>
        </div>

        <div className="image-slider">
                <div className='car-card'>
                    <button className="slider-button left" onClick={prevImage}>
                        &#60;
                    </button>
                    <div className="image-counter">
                        {currentImageIndex + 1} / {car.image.length}
                    </div>
                    <img
                        src={car.image[currentImageIndex]}
                        alt={`Car ${currentImageIndex + 1}`}
                        className="car-images-gallery"
                    />
                    <button className="slider-button right" onClick={nextImage}>
                        &#62;
                    </button>
                </div>
        </div>

        <div className='basic-info'>
            <h2 className='tech'>Technical data</h2>
            <div className="basic-data">
                <div>
                    <p className="year">Make<span>{car.Makes.make_name}</span></p>
                    <p className="year">Model<span>{car.Models.model_name}</span></p>
                    <p className="year">Year<span>{car.year}</span></p>
                    <p className="year">Vehicle type<span>{car.vehicleType}</span></p>
                    <p className="year">Fuel<span>{car.fuel}</span></p>
                </div>
                <div>
                    <p className="year">ccm<span>{car.ccm} ccm</span></p>
                    <p className="year">Engine power<span>{car.kv} kW</span></p>
                </div>
            </div>
        </div>

        <div className='basic-info'>
            <h2 className='tech'>More information</h2>
            <div className="basic-data">
                <div>
                    <p className="year">Color<span>{car.color}</span></p>
                    <p className="year">Transmission<span>{car.transmission}</span></p>
                    <p className="year">Number of doors<span>{car.door}</span></p>
                    <p className="year">Number of seats<span>{car.seats}</span></p>
                    <p className="year">Emission<span>{car.emission}</span></p>
                </div>
                <div>
                    <p className="year">Air condition<span>{car.air_condition}</span></p>
                    <p className="year">Interior<span>{car.interior}</span></p>
                </div>
            </div>
        </div>

        <div className='basic-info'>
            <h2 className='tech'>Description</h2>
            <div className="basic-data-desc">
                { car.description? 
                    <p>{car.description}</p>
                    :
                <p></p>
                }
            </div>
        </div>

        <div className='basic-info'>
            <h2 className='tech'>Contact</h2>
            <div className="post-contact">
                <p>{car.city}</p>
                <p>{car.addres}</p>
            </div>
        </div>

    </div>
  );
};

export default FullPost;
