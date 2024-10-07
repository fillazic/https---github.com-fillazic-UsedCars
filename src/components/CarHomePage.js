import React from "react";
import Form from "./Forms/Form";
import Posts from "./Posts";

function CarHomePage() {

    const vehicle='Car';

    return (
        <div>
        <Form />
        <Posts vehicle={vehicle}/>
        </div>
    )
}

export default CarHomePage;
