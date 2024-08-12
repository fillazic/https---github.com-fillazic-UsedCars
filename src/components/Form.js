import './Form.css';


function Form() {

    return (
        <div className='form' >
            <form>
                <div className='model' >
                    <select name="mark" id="mark" >
                            <option value="All models" >All models</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Audi">Audi</option>
                            <option value="Wolksvagen">Wolksvagen</option>
                            <option value="BMW">BMW</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Saab">Saab</option>
                    </select>
                    <input name='model' placeholder='model'/>
                    <input name='price' placeholder='price'/>
                </div>

                <div className='features'>
                    <select name="year" id="year">
                            <option value="year" >Year</option>
                    </select>

                    <select name="type" id="type">
                            <option value="Vehicle-type" >Vehicle type</option>
                            <option value="Saloon">Saloon</option>
                            <option value="Estate-Car">Estate Car</option>
                            <option value="Off-road">Off-road/Pickup Truck/SUV</option>
                            <option value="Sports">Sports Car/Coupe</option>
                            <option value="Van">Van/Minibus</option>
                    </select>

                    <select name="fuel" id="fuel">
                            <option value="Fuel" >Fuel</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electic">Electic</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Natural gas">Natural gas</option>
                    </select>
                </div>
                <div className='search-button'>
                    <button className='hidden-btn'>More Detail</button>
                    <button className='detail'>Less Detail</button>
                    <button id='search-form'>
                       <div className='search-div'>
                        <h4>Search</h4>
                        <img src="./images/search-white.png"/>
                       </div>
                    </button>
            </div>
            
                <div className="power" >
                    <div>
                     <input type="number" id="kw" name="kw" placeholder="kW From" />
                     <input type="number" id="kw-1" name="kw-1" placeholder="kW To" />
                     </div>

                    <div>
                     <input type="number" id="ccm" name="ccm" placeholder="ccm From" />
                     <input type="number" id="ccm-1" name="ccm-1" placeholder="ccm To" />
                    </div>

                    <select name="trensmission" id="transmission">
                        <option value="" ></option>
                        <option value="Automatic" >Automatic</option>
                        <option value="Manual gearbox">Manual gearbox</option>
                        <option value="Semi-automatic">Semi-automatic</option>
                    </select>
                </div>

                <div className='feature-one' >

                    <select name="color" id="color">
                        <option value="Color" >Color</option>
                        <option value="Silver">Silver</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                    </select>

                    <select name="door" id="door">
                        <option value="Number od doors" >Number of doors</option>
                        <option value="two-doors">2/3</option>
                        <option value="four-doors">4/5</option>
                    </select>

                    <select name="seats" id="seats">
                        <option value="Number od seats" >Number of seats</option>
                        <option value="two-doors">2/3</option>
                        <option value="four-doors">4/5</option>
                    </select>
                </div>

                <div className='feature-two' >
                <select name="AC" id="AC">
                    <option value="Air-condition" >Air-condition</option>
                    <option value="No-AC">No air conditioning</option>
                    <option value="Manual-AC">Manual air conditionig</option>
                    <option value="Automatic-AC">Automatic air conditioning</option>
                </select>

                <select name="emission" id="emission">
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

                <select name="Interior" id="Interior">
                    <option value="Interior" >Interior</option>
                    <option value="Cloth">Cloth</option>
                    <option value="Full-leather">Full-leather</option>
                </select>
                </div>

                <h3>Safety</h3>
                <div className='safety' >
                    <div>
                    <input type="radio" id="ABS" name="ABS" value="ABS" />
                    <label for="ABS">ABS</label>
                    </div>

                    <div>
                    <input type="radio" id="ESP" name="ESP" value="ESP" />
                    <label for="ESP">ESP</label>
                    </div>

                    <div>
                    <input type="radio" id="ASR" name="ASR" value="ASR" />
                    <label for="ASR">ASR</label>
                    </div>

                    <div>
                    <input type="radio" id="airbags" name="airbags" value="Driven Airbags" />
                    <label for="airbags">Driven Airbags</label>
                    </div>

                    <div>
                    <input type="radio" id="airbags" name="airbags" value="Front Airbags" />
                    <label for="airbags">Front Airbags</label>
                    </div>

                    <div>
                    <input type="radio" id="airbags" name="airbags" value="Side Airbags" />
                    <label for="airbags">Side Airbags</label>
                    </div>

                    <div>
                    <input type="radio" id="airbags" name="airbags" value="More Airbags" />
                    <label for="airbags">More Airbags</label>
                    </div>

                    <div>
                    <input type="radio" id="alarm" name="alarm" value="Alarm system" />
                    <label for="alarm">Alarm system</label>
                    </div>

                    <div>
                    <input type="radio" id="central-lock" name="central-lock" value="Central lock" />
                    <label for="central-lock">Central lock</label>
                    </div>

                    <div>
                    <input type="radio" id="child-lock" name="child-lock" value="Child Lock" />
                    <label for="child-lock">Child lock</label>
                    </div>

                    <div>
                    <input type="radio" id="blind-spot" name="blind-spot" value="Blind spot monitor" />
                    <label for="blind-spot">Blind spot monitor</label>
                    </div>

               
            </div>
                <h3>Features</h3>
                <div className='all-feature'>
                    
                    <div>
                    <input type="radio" id="metalic-color" name="metalic-color" value="Metalic color" />
                    <label for="metalic-color">Metalic color</label>
                    </div>
                    
                    <div>
                    <input type="radio" id="power-steering" name="power-steering" value="Power steering" />
                    <label for="power-steering">Power steering</label>
                    </div>
                    
                    <div>
                    <input type="radio" id="remote-locking" name="remote-locking" value="Remote locking" />
                    <label for="remote-locking">Remote locking</label>
                    </div>

                    <div>
                    <input type="radio" id="trip-computer" name="trip-computer" value="Trip computer" />
                    <label for="trip-computer">Trip computer</label>
                    </div>

                    <div>
                    <input type="radio" id="sunroof" name="sunroof" value="Sunroof" />
                    <label for="sunroof">Sunroof</label>
                    </div>

                    <div>
                    <input type="radio" id="tow-hitch" name="tow-hitch" value="Tow hitch" />
                    <label for="tow-hitch">Tow hitch</label>
                    </div>
                    
                    <div>
                    <input type="radio" id="panoramic-roof" name="spanoramic-roof" value="Panoramic roof" />
                    <label for="panoramic-roof">Panoramic roof</label>
                    </div>

                    <div>
                    <input type="radio" id="tinted-windows" name="tinted-windows" value="Tinted windows" />
                    <label for="tinted-windows" >Tinted-windows</label>
                    </div>

                    <div>
                    <input type="radio" id="electric-windows" name="electric-windows" value="Electric windows" />
                    <label for="electric-windows">Electric windows</label>
                    </div>
                    
                    <div>
                    <input type="radio" id="electric-mirrors" name="electric-mirrors" value="Electric mirrors" />
                    <label for="electric-mirrors">Electric mirrors</label>
                    </div>
                    
                    <div>
                    <input type="radio" id="mirror-heaters" name="mirror-heaters" value="Mirror heaters" />
                    <label for="mirror-heaters">Mirror heaters</label>
                    </div>

                    <div>
                    <input type="radio" id="s.-wheel-heater" name="s.-wheel-heater" value="S. wheel heater" />
                    <label for="s.-wheel-heater">S. wheel heater</label>
                    </div>

                    <div>
                    <input type="radio" id="height-adj-seat" name="height-adj-seat" value="Height adj. seat" />
                    <label for="height-adj-seat">Height adj. seat</label>
                    </div>

                    <div>
                    <input type="radio" id="electrically-adj-seat" name="electrically-adj-seat" value="Electrically adj. seat" />
                    <label for="helectrically-adj-seat">Electrically adj. seat</label>
                    </div>

                    <div>
                    <input type="radio" id="seat-heaters" name="seat-heaters" value="Seat heaters" />
                    <label for="seat-heaters">Seat heaters</label>
                    </div>

                    <div>
                    <input type="radio" id="fog-lights" name="fog-lights" value="Fog lights" />
                    <label for="fog-lights">Fog lights</label>
                    </div>

                    <div>
                    <input type="radio" id="xenon-lights" name="xenon-lights" value="Xenon lights" />
                    <label for="xenon-lights">Xenon lights</label>
                    </div>

                    <div>
                    <input type="radio" id="lights-sensors" name="lights-sensors" value="Lights sensors" />
                    <label for="lights-sensors">Lights sensors</label>
                    </div>

                    <div>
                    <input type="radio" id="rain-sensors" name="rain-sensors" value="Rain sensors" />
                    <label for="rain-sensors">Rain sensors</label>
                    </div>

                    <div>
                    <input type="radio" id="parking-sensors" name="parking-sensors" value="Praking sensors" />
                    <label for="parking-sensors">Parking sensors</label>
                    </div>

                    <div>
                    <input type="radio" id="roof-rack" name="roof-rack" value="Roof rack" />
                    <label for="roof-rack">Roof rack</label>
                    </div>

                    <div>
                    <input type="radio" id="aluminum-rims" name="aluminum-rims" value="Aluminum rims" />
                    <label for="aluminum-rims">Aluminum rims</label>
                    </div>

            </div>
            
            <div className='search-button'>
                    <button className='hidden-btn'>More Detail</button>
                    <button className='detail'>Less Detail</button>
                    <button id='search-form'>
                       <div className='search-div'>
                        <h4>Search</h4>
                        <img src="./images/search-white.png"/>
                       </div>
                    </button>
            </div>

            </form>
        </div>
    )
}

export default Form;