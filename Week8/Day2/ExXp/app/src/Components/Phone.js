import React from "react";

class Phone extends React.Component {
    constructor () {
        super ();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    changeColor = () => {
        const phone = {...this.state}
        phone.color = "blue";
        this.setState(phone);
    }

    render () {
        return (<>
        <h1>My fone is {this.state.brand}</h1>
        <p>It is {this.state.color} {this.state.model} of {this.state.year} year</p>
        <button onClick={this.changeColor}>Change phone color to blue</button>
        </>)
    }
}

export default Phone;