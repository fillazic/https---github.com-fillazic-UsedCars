import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../config/supaBase';
import Vehicle from './Vehicle';
import './Form.css';


function Form() {

    const navigate = useNavigate();

    const [formVisible, setFormVisible] = useState(false);
    const [detailForm, setDetailForm]= useState(false);
    const [make, setMake] = useState([]);
    const [model, setModel] = useState([]);
    const [selectedModelId, setSelectedModelId] = useState('');
    const [selectedMakeId, setSelectedMakeId] = useState('');
    const [yearFrom, setYearFrom] = useState('');
    const [yearTo, setYearTo] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [priceFrom, setPriceFrom] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [fuel, setFuel] = useState('');
    const [kvFrom, setKvFrom] = useState('');
    const [kvTo, setKvTo] = useState('');
    const [ccmFrom, setCcmFrom] = useState('');
    const [ccmTo, setCcmTo] = useState('');
    const [transmission, setTransmission] = useState('');
    const [color, setColor] = useState('');
    const [door, setDoor] = useState('');
    const [seats, setSeats] = useState('');
    const [aircon,setAircon] = useState('');
    const [emission, setEmission] = useState('');
    const [interior, setInterior] = useState('');
    const [safety, setSafety] = useState('');
    const [features, setFeatures] = useState('');
    const [city, setCity] = useState('');

    const years = [];

    for (let i = 2024; i > 1905; i--) {
      years.push(i);
    }

    useEffect(() => {
  
      fetchMakes();
  
      if (selectedMakeId) {
        fetchModelsForMark(selectedMakeId)
      } 
      }, [selectedMakeId]);

    const detailHandler = () => {
        window.scrollTo(0, 0);
        setDetailForm(!detailForm)
    }

    const handleMarkChange = (e) => {
        setSelectedMakeId(e.target.value);
      };

    const fetchMakes = async () => {
        const { data, error } = await supabase
          .from('Makes')
          .select('id, make_name');
    
        if (error) {
          console.error('Error fetching makes:', error);
          return;
        }
    
        setMake(data || []);
      };

      const fetchModelsForMark = async (selectedMakeId) => {
        const { data, error } = await supabase
          .from('Models')
          .select('id, model_name')
          .eq('make_id', selectedMakeId);
    
        if (error) {
          console.error('Error fetching models:', error);
          return;
        }
    
        setModel(data || []);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const searchCriteria = {
          makeId: selectedMakeId,
          modelId: selectedModelId,
          yearFrom,
          yearTo,
          vehicleType,
          priceFrom,
          priceTo,
          fuel,
          kvFrom,
          kvTo,
          ccmFrom,
          ccmTo,
          transmission,
          color,
          door,
          seats,
          aircon,
          emission,
          interior,
        };
    
        // Dispatch the async action to fetch cars based on criteria
        const queryParams = new URLSearchParams(searchCriteria).toString();
        navigate(`/search?${queryParams}`);
      };

    return (

        <div className={!formVisible? 'form' : 'form-visible'} >
            
            <div className='vehicle-path'>
            < Vehicle/>
            </div>

             <form onSubmit={handleSubmit}>
             <div className='model' >
                    <div className='selected-container'>
                        <select value={selectedMakeId} name="mark" id="selected-items" onChange={handleMarkChange}>
                                <option value="">All Makes</option>
                                {make.map((makes) => (
                                <option key={makes.id} value={makes.id}>
                                {makes.make_name}
                                </option>
                                ))} 
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <div className='selected-container'>
                    <select disabled={!selectedMakeId} value={selectedModelId} name="mark" id="selected-items" onChange={(e) => setSelectedModelId(e.target.value)} >
                                <option value="">All Models</option>
                                {model.map((models) => (
                                <option key={models.id} value={models.id}>
                                {models.model_name}
                                </option>
                                ))} 
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                    </div>
                    <div className='power-input'>
                        <input type="number" id="ccm" name="ccm" placeholder="Price From" value={priceFrom} onChange={(e)=> setPriceFrom(e.target.value)} />
                        <input type="number" id="ccm-1" name="ccm-1" placeholder="Price To" value={priceTo} onChange={(e)=> setPriceTo(e.target.value)} />
                    </div>
                </div>

                <div className='features'>
                    <div className='years'>
                    <div className='selected-container-year'>
                        <select type="number" name="year" id="selected-items-year" value={yearFrom} onChange={(e) => setYearFrom(e.target.value)} >
                            <option>Year From</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                              {year}
                              </option>
                            ))}                       
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <div className='selected-container-year'>
                        <select type="number" name="year" id="selected-items-year" value={yearTo} onChange={(e) => setYearTo(e.target.value)} >
                            <option>Year To</option>
                            {years.map((year) => (
                              <option key={year} value={year}>
                              {year}
                              </option>
                            ))}                       
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    </div>

                    <div className='selected-container'>                    
                        <select name="type" type='text' id="selected-items" onChange={(e) => setVehicleType(e.target.value)} >
                                <option value="Vehicle-type" >Vehicle type</option>
                                <option value="Saloon">Saloon</option>
                                <option value="Estate-Car">Estate Car</option>
                                <option value="Estate-Car">SUV</option>
                                <option value="Off-road">Off-road</option>
                                <option value="Sports">Sports Car/Coupe</option>
                                <option value="Estate-Car">Pickup Truck</option>
                                <option value="Van">Van/Minibus</option>
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <div className='selected-container'>
                        <select type='text' name="fuel" id="selected-items" onChange={(e) => setFuel(e.target.value)} >
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
                        <input type="number" id="kw" name="kw" placeholder="kW From" value={kvFrom} onChange={(e)=> setKvFrom(e.target.value)} />
                        <input type="number" id="kw-1" name="kw-1" placeholder="kW To" value={kvTo} onChange={(e)=> setKvTo(e.target.value)} />
                     </div>

                    <div className='power-input'>
                        <input type="number" id="ccm" name="ccm" placeholder="ccm From" value={ccmFrom} onChange={(e)=> setCcmFrom(e.target.value)} />
                        <input type="number" id="ccm-1" name="ccm-1" placeholder="ccm To" value={ccmTo} onChange={(e)=> setCcmTo(e.target.value)} />
                    </div>

                    <div className='selected-container'>
                        <select name="trensmission" id="selected-items" value={transmission} onChange={(e)=> setTransmission(e.target.value)} >
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
                <select name="color" id="selected-items" value={color} onChange={(e)=> setColor(e.target.value)} >
                        <option value="Color" >Color</option>
                        <option value="Silver">Silver</option>
                        <option value="Red">Grey</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Red">Beige</option>
                        <option value="Red">Gold</option>
                        <option value="Red">Purple</option>
                        <option value="Red">Yellow</option>
                        <option value="Red">Metallic</option>
                        <option value="Red">Brown</option>
                        <option value="Red">Green</option>
                        <option value="Red">Orange</option>
                        <option value="Red">Matte</option>
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                </div>

                <div className='selected-container'>
                    <select name="door" id="selected-items" value={door} onChange={(e)=> setDoor(e.target.value)} >
                        <option value="Number od doors" >Number of doors</option>
                        <option value="two-doors">2/3</option>
                        <option value="four-doors">4/5</option>
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                </div>

                <div className='selected-container'>
                    <select name="seats" id="selected-items" value={seats} onChange={(e)=> setSeats(e.target.value)} >
                        <option value="Number od seats" >Number of seats</option>
                        <option value="Color">1</option>
                        <option value="Color">2</option>
                        <option value="Color">3</option>
                        <option value="Color">4</option>
                        <option value="Color">5</option>
                        <option value="Color">6</option>
                        <option value="Color">7</option>
                        <option value="Color">8</option>
                    </select>
                    <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                    </div>
                </div>

                </div>

                <div className='feature-two' >
                    <div className='selected-container'>
                        <select name="AC" id="selected-items" value={aircon} onChange={(e)=> setAircon(e.target.value)}>
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
                        <select name="emission" id="selected-items" value={emission} onChange={(e)=> setEmission(e.target.value)} >
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
                        <select name="Interior" id="selected-items" value={interior} onChange={(e)=> setInterior(e.target.value)} >
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
                    <input type="checkbox" id="electric-windows" name="electric-windows" value="El. windows" />
                    <label htmlFor="electric-windows">El. windows</label>
                    </div>
                    
                    <div>
                    <input type="checkbox" id="electric-mirrors" name="electric-mirrors" value="El. mirrors" />
                    <label htmlFor="electric-mirrors">El. mirrors</label>
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