import React from 'react'
const Car = (props) => 
    {
        return (
            // <h1>I'm a {props.carBrand} named {props.name}</h1>
            props.cars.map(car => (
                <ul>
                    <li>{car.name}</li>
                    <li>{car.year}</li>
                </ul>
            )
            )     
        )
    }


export default Car