import React from 'react';
import './Footer.css';


function Footer() {

    return (
        <div className='footer'>
            <div className="popular">
                <h2>Most searched</h2>
                    <div>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                        <button>Volvo s60</button>
                    </div>
            </div>

            <div className="contact">
                    <h2>Contact us</h2>
                    <div>
                        <img className="logo" src="images/instagram.png" alt="" />
                        <img className="logo" src="images/facebook.png" alt="" />
                        <img className="logo" src="images/tiktok.png" alt="" />
                        <img className="logo" src="images/youtube.png" alt="" />
                        <img className="logo" src="images/linkedin.png" alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Footer;