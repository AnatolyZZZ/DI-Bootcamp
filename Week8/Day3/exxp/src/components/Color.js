import React from "react";
import Child from "./Child"

class Color extends React.Component {
    constructor () {
        super();
        this.state = {
            favoriteColor : "red",
            show : true,
            message : "",
            messageFromSnapshot : "",
            message2 : ""
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
    componentDidUpdate (prevProps, prevState, snapshot) {
        if (this.state.message === "") {
            this.setState({message2 : this.state.messageFromSnapshot})
            this.setState({message : `My favorite color was chaged from ${prevState.favoriteColor} to ${this.state.favoriteColor}`})
        }
    }
    getSnapshotBeforeUpdate (prevProps, prevState) {
        if (this.state.messageFromSnapshot === "") {
            this.setState({messageFromSnapshot: `Now color is ${prevState.favoriteColor}`})
        }
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
        {this.state.message}
        <br/>
        {this.state.messageFromSnapshot}
        </>)
    }
}

export default Color;