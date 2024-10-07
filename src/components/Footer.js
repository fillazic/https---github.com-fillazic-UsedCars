import React, {useState} from 'react';
import './Footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchVehicle } from '../slices/searchSlice';


function Footer() {
    
    const navigate = useNavigate();

    const quickSearch = (a, b) => {

        const searchCriteria = {
          makeId: a,
          modelId: b,
        };

        const queryParams = new URLSearchParams(searchCriteria).toString();
        navigate(`/search?${queryParams}`);
    }

    return (
        <div className='footer'>
            <div className="popular" >
                <h2>Most searched</h2>
                    <div>
                        <button className='popular-btn'  onClick={() => quickSearch(1, 7)} >Audi A4</button>
                        <button className='popular-btn'  onClick={() => quickSearch(1, 11)} >Audi A7</button>
                        <button className='popular-btn'  onClick={() => quickSearch(1, 6)} >Audi A3</button>
                        <button className='popular-btn'  onClick={() => quickSearch(67, 537)} >Volkswagen Golf 7</button>
                        <button className='popular-btn'  onClick={() => quickSearch(71, 529)} >Škoda Octavia</button>
                        <button className='popular-btn'  onClick={() => quickSearch(67, 470)} >Volkswagen Golf 6</button>
                        <button className='popular-btn'  onClick={() => quickSearch(71, 534)} >Škoda Superb</button>
                        <button className='popular-btn'  onClick={() => quickSearch(19, 536)} >Fiat Punto</button>
                   </div>
            </div>

            <div className="contact">
                    <h2>Contact us</h2>
                    <div>
                        <img className="logo" src="images/facebook.png" alt="" />
                        <img className="logo" src="images/instagram.png" alt="" />
                        <img className="logo" src="images/tiktok.png" alt="" />
                        <img className="logo" src="images/youtube.png" alt="" />
                        <img className="logo" src="images/linkedin.png" alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Footer;