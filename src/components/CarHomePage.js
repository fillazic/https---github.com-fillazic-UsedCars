import React from "react";
import Form from "./Forms/Form";
import Posts from "./Posts";
import './CarHomePage.css'

function CarHomePage({search}) {

    const vehicle='Car';
    
    return (
        <div>
            <div className= { search? 'visibleForm' : 'hiddenForm'}>
            <   Form />
            </div>
        <Posts vehicle={vehicle}/>
        </div>
    )
}

export default CarHomePage;
