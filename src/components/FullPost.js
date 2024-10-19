import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../config/supaBase';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader';
import ImageFull from './ImageFull';
import './FullPost.css';

const FullPost = () => {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(currentImageIndex);

const SamplePrevArrow = ({ onClick }) => {
  return (
      <div onClick={onClick}  className="prev-arrow" >
          &#10094;
      </div>
  );
};

const SampleNextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick}  className="next-arrow" >
     &#10095;
</div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  afterChange: (index) => {
    setCurrentSlide(index);
    setCurrentImageIndex(index);
},
}

const openModal = (index) => {
  setCurrentImageIndex(index);
  setIsOpen(true);
};

const closeModal = () => setIsOpen(false);


  useEffect(() => {

    window.scrollTo(0, 0);
    
    const fetchCarDetails = async () => {
      const { data, error } = await supabase
        .from('Car')
        .select(` *, Models ( model_name ), Makes ( make_name )`)
        .eq('id', id)
        .single();  

      if (error) {
        console.error('Error fetching car details:', error);
      } else {
        setCar(data);
      }
      setLoading(false);
    };

    const timer = setTimeout(() => {
      fetchCarDetails(); 
    }, 1500);

    return () => clearTimeout(timer);

  }, [id]);

  if (loading) return <Loader />;
  if (!car) return <p>Car not found</p>;

  return (
    <div className='full-all'>
        <div className="info-fullpost">
            <p id="full-mark">{car.Makes.make_name}  {car.Models.model_name}</p>
            <p className="full-price">{car.price}$</p>
        </div>
        
        <div className="image-slider">
            <span className="img-number">{currentSlide + 1} / {car.image.length}</span>
                <Slider {...settings} className='car-card'>               
                {car.image.map((img, index) => (
                        <img
                            src={img}
                            alt={'car'}
                            key={index}
                            className="car-images-gallery"
                            onClick={() => openModal(index)}
                            title='click for full size'
                        />
                ))}
                </Slider>
                <ImageFull isOpen={isOpen}
                    onClose={closeModal}
                    car={car}
                    currentImageIndex={currentImageIndex}
                    setCurrentImageIndex={setCurrentImageIndex} 
                />
        </div>

        <div className='full-basic-info'>
            <h2 className='tech'>Technical data</h2>
            <div className="full-basic-data">
                <div>
                    <p className="full-year">Make<span>{car.Makes.make_name}</span></p>
                    <p className="full-year">Model<span>{car.Models.model_name}</span></p>
                    <p className="full-year">Year<span>{car.year}</span></p>
                    <p className="full-year">Vehicle type<span>{car.vehicleType}</span></p>
                    <p className="full-year">Fuel<span>{car.fuel}</span></p>
                </div>
                <div>
                    <p className="full-year">ccm<span>{car.ccm} ccm</span></p>
                    <p className="full-year">Engine power<span>{car.kv} kW</span></p>
                </div>
            </div>
        </div>

        <div className='full-basic-info'>
            <h2 className='tech'>More information</h2>
            <div className="full-basic-data">
                <div>
                    <p className="full-year">Color<span>{car.color}</span></p>
                    <p className="full-year">Transmission<span>{car.transmission}</span></p>
                    <p className="full-year">Number of doors<span>{car.doors}</span></p>
                    <p className="full-year">Number of seats<span>{car.seats}</span></p>
                    <p className="full-year">Emission<span>{car.emission}</span></p>
                </div>
                <div>
                    <p className="full-year">Air condition<span>{car.air_condition}</span></p>
                    <p className="full-year">Interior<span>{car.interior}</span></p>
                </div>
            </div>
        </div>

        <div className='full-basic-info'>
            <h2 className='tech'>Description</h2>
            <div className="full-basic-data-desc">
                { car.description? 
                    <p>{car.description}</p>
                    :
                <p></p>
                }
            </div>
        </div>

        <div className='full-basic-info'>
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
