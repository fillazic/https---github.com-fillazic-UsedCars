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

            </form>
        </div>
    )
}

export default Form;