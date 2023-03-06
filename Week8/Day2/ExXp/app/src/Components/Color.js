import React from "react";

class Color extends React.Component {
    constructor () {
        super();
        this.state = {
            favoriteColor : "red"
        }
    }
    componentDidMount () {
        console.log(this.state.favoriteColor)
        setTimeout(
            this.setState({favoriteColor : "yellow"}),
            5000
        )  
    }
    changeToBlue = () => {
        this.setState({favoriteColor :  "blue"})
    }
    render () {
        return (<>
        <header>My favorite color is {this.state.favoriteColor}</header>
        <button onClick={this.changeToBlue}>Change fav color to blue</button>
        </>)
    }
}

export default Color;