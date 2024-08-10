import './Form.css';


function Form() {

    return (
        <div className='form'>
            <form>
                <div className='model'>
                    <select name="mark" id="mark">
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
                    <button className='detail'>More Detail</button>
                    <button id='search-form'>
                       <div className='search-div'>
                        <h4>Search</h4>
                        <img src="./images/search-white.png"/>
                       </div>
                    </button>
                </div>


// DETAIL FORM

                <div>
                     <input type="number" id="kw" name="kw" placeholder="kW From" />
                     <input type="number" id="kw" name="kw" placeholder="kW To" />


                     <input type="number" id="ccm" name="ccm" placeholder="ccm From" />
                     <input type="number" id="ccm" name="ccm" placeholder="ccm To" />

                    <select name="trensmission" id="transmission">
                        <option value="Automatic" >Automatic</option>
                        <option value="Manual gearbox">Manual gearbox</option>
                        <option value="Semi-automatic">Semi-automatic</option>
                    </select>
                    </div>

                    <div>

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

                <div>
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

                <div>
                    <p>Safety</p>
                    <input type="radio" id="ABS" name="ABS" value="ABS" />
                    <label for="ABS">ABS</label>

                    <input type="radio" id="ESP" name="ESP" value="ESP" />
                    <label for="ESP">ESP</label>

                    <input type="radio" id="ASR" name="ASR" value="ASR" />
                    <label for="ASR">ASR</label>

                    <input type="radio" id="airbags" name="airbags" value="Driven Airbags" />
                    <label for="airbags">Driven Airbags</label>

                    <input type="radio" id="airbags" name="airbags" value="Front Airbags" />
                    <label for="airbags">Front Airbags</label>

                    <input type="radio" id="airbags" name="airbags" value="Side Airbags" />
                    <label for="airbags">Side Airbags</label>

                    <input type="radio" id="airbags" name="airbags" value="More Airbags" />
                    <label for="airbags">More Airbags</label>

                    <input type="radio" id="alarm" name="alarm" value="Alarm system" />
                    <label for="alarm">Alarm system</label>

                    <input type="radio" id="central-lock" name="central-lock" value="Central lock" />
                    <label for="central-lock">Central lock</label>

                    <input type="radio" id="child-lock" name="child-lock" value="Child Lock" />
                    <label for="child-lock">Child lock</label>

                    <input type="radio" id="blind-spot" name="blind-spot" value="Blind spot monitor" />
                    <label for="blind-spot">Blind spot monitor</label>
 
                </div>

                <div>
                    <p>Features</p>
                    
                    <input type="radio" id="metalic-color" name="metalic-color" value="Metalic color" />
                    <label for="metalic-color">Metalic color</label>

                    <input type="radio" id="power-steering" name="power-steering" value="Power steering" />
                    <label for="power-steering">Power steering</label>

                    <input type="radio" id="remote-locking" name="remote-locking" value="Remote locking" />
                    <label for="remote-locking">Remote locking</label>

                    <input type="radio" id="trip-computer" name="trip-computer" value="Trip computer" />
                    <label for="trip-computer">Trip computer</label>

                    <input type="radio" id="sunroof" name="sunroof" value="Sunroof" />
                    <label for="sunroof">Sunroof</label>

                    <input type="radio" id="panoramic-roof" name="spanoramic-roof" value="Panoramic roof" />
                    <label for="panoramic-roof">Panoramic roof</label>

                    <input type="radio" id="panoramic-roof" name="spanoramic-roof" value="Panoramic roof" />
                    <label for="panoramic-roof">Panoramic roof</label>

                    <input type="radio" id="tinted-windows" name="tinted-windows" value="Tinted windows" />
                    <label for="tinted-windows">Tinted-windows</label>

                </div>
               

            </form>
        </div>
    )
}

export default Form;