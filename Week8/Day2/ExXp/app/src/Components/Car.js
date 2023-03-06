import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
    constructor (props) {
        super ()
        this.state = {
            model : props.model,
            color : props.color
        }
    }
    render () {
        return (<div>
                    <Garage size={this.props.size}/>
                    <p style={{color : this.state.color}}>This is {this.state.model} of {this.state.color} color</p>
                </div>)
        
    }
}

export default Car;

