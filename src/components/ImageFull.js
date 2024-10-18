import React, {useState} from "react";
import Slider from "react-slick";
import "./ImageFull.css"; 

const ImageFull = ({ isOpen, onClose, car, currentImageIndex, setCurrentImageIndex }) => {

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

  if (!isOpen) return null;

  const modalSliderSettings = {
    initialSlide: currentImageIndex, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (index) => {
      setCurrentSlide(index);
      setCurrentImageIndex(index);
    }, 
  };

  return (
    <div className="image-overlay" onClick={onClose}>
        <div className="full-image-slider" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <span className="full-img-number">{currentSlide + 1} / {car.image.length}</span>
                <Slider {...modalSliderSettings} className='full-car-card'>
                {car.image.map((img, index) => (
                        <img src={img} alt={`car-${index}`} className="full-image" key={index} />                       
                ))}
                </Slider>
        </div>   
    </div>
  );
};

export default ImageFull;
