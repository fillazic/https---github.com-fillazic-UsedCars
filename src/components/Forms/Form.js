import React, { useState } from 'react';
import Vehicle from './Vehicle';
import './Form.css';


function Form() {

    const [formVisible, setFormVisible] = useState(false);
    const [detailForm, setDetailForm]= useState(false);

    const detailHandler = () => {
        setDetailForm(!detailForm)
    }

    const formHandler = () => {
         setFormVisible(!formVisible)
    }

    return (

        <div className={!formVisible? 'form' : 'form-visible'} >
            
            <div className='vehicle-path'>
            <   Vehicle/>
            </div>

             <form>
                <div className='model' >
                    <div className='selected-container'>
                        <select name="mark" id="selected-items" >
                                <option value="All models" >All models</option>
                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                <option value="Audi">Audi</option>
                                <option value="Wolksvagen">Wolksvagen</option>
                                <option value="BMW">BMW</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Saab">Saab</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <input name='model' placeholder='model'/>
                    <input name='price' placeholder='price'/>
                </div>

                <div className='features'>
                    <div className='selected-container'>
                        <select name="year" id="selected-items">
                                <option value="year" >Year</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>

                    <div className='selected-container'>                    
                        <select name="type" id="selected-items">
                                <option value="Vehicle-type" >Vehicle type</option>
                                <option value="Saloon">Saloon</option>
                                <option value="Estate-Car">Estate Car</option>
                                <option value="Off-road">Off-road/Pickup Truck/SUV</option>
                                <option value="Sports">Sports Car/Coupe</option>
                                <option value="Van">Van/Minibus</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <div className='selected-container'>
                        <select name="fuel" id="selected-items">
                                <option value="Fuel" >Fuel</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electic">Electic</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Natural gas">Natural gas</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                </div>
                <div className='search-button'>
                    <button className='hidden-btn'>More Detail</button>
                    <button type='button' className='detail' onClick={detailHandler} >
                        {!detailForm? 'More Detail' : 'Less Detail'}
                    </button>
                    <button id='search-form'>
                       <div className='search-div'>
                        <h4>Search</h4>
                        <img src="./images/search-white.png"/>
                       </div>
                    </button>
            </div>
            
            <div className={ !detailForm? 'detail-form-hidden' : 'detail-form-visible' } >
                <div className="power" >
                    <div className='power-input'>
                        <input type="number" id="kw" name="kw" placeholder="kW From" />
                        <input type="number" id="kw-1" name="kw-1" placeholder="kW To" />
                     </div>

                    <div className='power-input'>
                        <input type="number" id="ccm" name="ccm" placeholder="ccm From" />
                        <input type="number" id="ccm-1" name="ccm-1" placeholder="ccm To" />
                    </div>

                    <div className='selected-container'>
                        <select name="trensmission" id="selected-items">
                            <option value="">Transmission</option>
                            <option value="Automatic" >Automatic</option>
                            <option value="Manual gearbox">Manual gearbox</option>
                            <option value="Semi-automatic">Semi-automatic</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                </div>

                <div className='feature-one' >
                <div className='selected-container'>
                    <select name="color" id="selected-items">
                        <option value="Color" >Color</option>
                        <option value="Silver">Silver</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                </div>

                <div className='selected-container'>
                    <select name="door" id="selected-items">
                        <option value="Number od doors" >Number of doors</option>
                        <option value="two-doors">2/3</option>
                        <option value="four-doors">4/5</option>
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                </div>

                <div className='selected-container'>
                    <select name="seats" id="selected-items">
                        <option value="Number od seats" >Number of seats</option>
                        <option value="two-doors">2/3</option>
                        <option value="four-doors">4/5</option>
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                </div>

                </div>

                <div className='feature-two' >
                    <div className='selected-container'>
                        <select name="AC" id="selected-items">
                            <option value="Air-condition" >Air-condition</option>
                            <option value="No-AC">No air conditioning</option>
                            <option value="Manual-AC">Manual air conditionig</option>
                            <option value="Automatic-AC">Automatic air conditioning</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>

                    <div className='selected-container'>
                        <select name="emission" id="selected-items">
                            <option value="Any" >Emission</option>
                            <option value="Euro1">Euro1</option>
                            <option value="Euro2">Euro2</option>
                            <option value="Euro3">Euro3</option>
                            <option value="Euro4">Euro4</option>
                            <option value="Euro5">Euro5</option>
                            <option value="Euro6">Euro6</option>
                            <option value="Euro6c">Euro6c</option>
                            <option value="Euro6d-TEMP">Euro6d-TEMP</option>
                            <option value="Euro6d">Euro6d</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>

                    <div className='selected-container'>
                        <select name="Interior" id="selected-items">
                            <option value="Interior" >Interior</option>
                            <option value="Cloth">Cloth</option>
                            <option value="Full-leather">Full-leather</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                </div>

                <h3>Safety</h3>
                <div className='safety' >
                    <div>
                    <input type="checkbox" id="ABS" name="ABS" value="ABS" />
                    <label htmlFor="ABS">ABS</label>
                    </div>

                    <div>
                    <input type="checkbox" id="ESP" name="ESP" value="ESP" />
                    <label htmlFor="ESP">ESP</label>
                    </div>

                    <div>
                    <input type="checkbox" id="ASR" name="ASR" value="ASR" />
                    <label htmlFor="ASR">ASR</label>
                    </div>

                    <div>
                    <input type="checkbox" id="driven-airbags" name="driven-airbags" value="Driven Airbags" />
                    <label htmlFor="driven-airbags">Driven Airbags</label>
                    </div>

                    <div>
                    <input type="checkbox" id="front-airbags" name="front-airbags" value="Front Airbags" />
                    <label htmlFor="front-airbags">Front Airbags</label>
                    </div>

                    <div>
                    <input type="checkbox" id="side-airbags" name="side-airbagss" value="Side Airbags" />
                    <label htmlFor="side-airbags">Side Airbags</label>
                    </div>

                    <div>
                    <input type="checkbox" id="more-airbags" name="more-airbags" value="More Airbags" />
                    <label htmlFor="more-airbags">More Airbags</label>
                    </div>

                    <div>
                    <input type="checkbox" id="alarm" name="alarm" value="Alarm system" />
                    <label htmlFor="alarm">Alarm system</label>
                    </div>

                    <div>
                    <input type="checkbox" id="central-lock" name="central-lock" value="Central lock" />
                    <label htmlFor="central-lock">Central lock</label>
                    </div>

                    <div>
                    <input type="checkbox" id="child-lock" name="child-lock" value="Child Lock" />
                    <label htmlFor="child-lock">Child lock</label>
                    </div>

                    <div>
                    <input type="checkbox" id="blind-spot" name="blind-spot" value="Blind spot monitor" />
                    <label htmlFor="blind-spot">Blind spot</label>
                    </div>

               
            </div>
                <h3>Features</h3>
                <div className='all-feature'>
                    
                    <div>
                    <input type="checkbox" id="metalic-color" name="metalic-color" value="Metalic color" />
                    <label htmlFor="metalic-color">Metalic color</label>
                    </div>
                    
                    <div>
                    <input type="checkbox" id="power-steering" name="power-steering" value="Power steering" />
                    <label htmlFor="power-steering">Power steering</label>
                    </div>
                    
                    <div>
                    <input type="checkbox" id="remote-locking" name="remote-locking" value="Remote locking" />
                    <label htmlFor="remote-locking">Remote locking</label>
                    </div>

                    <div>
                    <input type="checkbox" id="trip-computer" name="trip-computer" value="Trip computer" />
                    <label htmlFor="trip-computer">Trip computer</label>
                    </div>

                    <div>
                    <input type="checkbox" id="sunroof" name="sunroof" value="Sunroof" />
                    <label htmlFor="sunroof">Sunroof</label>
                    </div>

                    <div>
                    <input type="checkbox" id="tow-hitch" name="tow-hitch" value="Tow hitch" />
                    <label htmlFor="tow-hitch">Tow hitch</label>
                    </div>
                    
                    <div>
                    <input type="checkbox" id="panoramic-roof" name="spanoramic-roof" value="Panoramic roof" />
                    <label htmlFor="panoramic-roof">Panoramic roof</label>
                    </div>

                    <div>
                    <input type="checkbox" id="tinted-windows" name="tinted-windows" value="Tinted windows" />
                    <label htmlFor="tinted-windows" >Tinted-windows</label>
                    </div>

                    <div>
                    <input type="checkbox" id="electric-windows" name="electric-windows" value="Electric windows" />
                    <label htmlFor="electric-windows">Electric windows</label>
                    </div>
                    
                    <div>
                    <input type="checkbox" id="electric-mirrors" name="electric-mirrors" value="Electric mirrors" />
                    <label htmlFor="electric-mirrors">Electric mirrors</label>
                    </div>
                    
                    <div>
                    <input type="checkbox" id="mirror-heaters" name="mirror-heaters" value="Mirror heaters" />
                    <label htmlFor="mirror-heaters">Mirror heaters</label>
                    </div>

                    <div>
                    <input type="checkbox" id="s.-wheel-heater" name="s.-wheel-heater" value="S. wheel heater" />
                    <label htmlFor="s.-wheel-heater">S. wheel heater</label>
                    </div>

                    <div>
                    <input type="checkbox" id="height-adj-seat" name="height-adj-seat" value="Height adj. seat" />
                    <label htmlFor="height-adj-seat">Height adj. seat</label>
                    </div>

                    <div>
                    <input type="checkbox" id="electrically-adj-seat" name="electrically-adj-seat" value="El. adj. seat" />
                    <label htmlFor="helectrically-adj-seat">El. adj. seat</label>
                    </div>

                    <div>
                    <input type="checkbox" id="seat-heaters" name="seat-heaters" value="Seat heaters" />
                    <label htmlFor="seat-heaters">Seat heaters</label>
                    </div>

                    <div>
                    <input type="checkbox" id="fog-lights" name="fog-lights" value="Fog lights" />
                    <label htmlFor="fog-lights">Fog lights</label>
                    </div>

                    <div>
                    <input type="checkbox" id="xenon-lights" name="xenon-lights" value="Xenon lights" />
                    <label htmlFor="xenon-lights">Xenon lights</label>
                    </div>

                    <div>
                    <input type="checkbox" id="lights-sensors" name="lights-sensors" value="Lights sensors" />
                    <label htmlFor="lights-sensors">Lights sensors</label>
                    </div>

                    <div>
                    <input type="checkbox" id="rain-sensors" name="rain-sensors" value="Rain sensors" />
                    <label htmlFor="rain-sensors">Rain sensors</label>
                    </div>

                    <div>
                    <input type="checkbox" id="parking-sensors" name="parking-sensors" value="Praking sensors" />
                    <label htmlFor="parking-sensors">Parking sensors</label>
                    </div>

                    <div>
                    <input type="checkbox" id="roof-rack" name="roof-rack" value="Roof rack" />
                    <label htmlFor="roof-rack">Roof rack</label>
                    </div>

                    <div>
                    <input type="checkbox" id="aluminum-rims" name="aluminum-rims" value="Aluminum rims" />
                    <label htmlFor="aluminum-rims">Aluminum rims</label>
                    </div>

            </div>
            
            <div className='search-button'>
                    <button className='hidden-btn'>More Detail</button>
                    <button type='button' className='detail' onClick={detailHandler} >Less Detail</button>
                    <button id='search-form'>
                       <div className='search-div'>
                        <h4>Search</h4>
                        <img src="./images/search-white.png"/>
                       </div>
                    </button>
            </div>

            </div>

            </form>
        </div>
    )
}

export default Form;