import React from "react";
import Child from "./Child"

class Color extends React.Component {
    constructor () {
        super();
        this.state = {
            favoriteColor : "red",
            show : true
        }
    }
    logStatus = () => {
        console.log(this.state.favoriteColor)
    }

    componentDidMount () {
        this.logStatus()
        setTimeout( () =>
            this.setState({favoriteColor : "yellow"}, this.logStatus),
            5000
        )  
    }
    shouldComponentUpdate () {
        return true
    }
    componentDidUpdate () {
        console.log (`My favorite color is ${this.state.favoriteColor}`)
    }
    getSnapshotBeforeUpdate () {
        // console.log (`Before update : ${this.prevState.favoriteColor}`)
        return null
    }

    removeChild = () => {
        this.setState({show : false})
    }

    changeToBlue = () => {
        this.setState({favoriteColor :  "blue"})
    }
    render () {
        let the;
        if (this.state.show) {
             the = <>
             <Child/>
             <button onClick={this.removeChild}>Remove child</button>
             </>
             
        } else the = ''
        return (<>
        {the}
        <header>My favorite color is {this.state.favoriteColor}
        </header>
        <button onClick={this.changeToBlue}>Change fav color to blue</button>
        </>)
    }
}

export default Color;