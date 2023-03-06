import React from "react"

const clickMe = () => {
    alert('I was clicked')
}
const handleKeyPress = (val) => {
    alert(`The key Enter was pressed, the value of input is ${val}`)
}

class Events extends React.Component {
    constructor () {
        super ()
        this.state = {
            inputValue : "",
            isTogleOn : true,
            onButton : "On"
        }
    }
    setValue = (event) => {
        this.setState({inputValue : event.target.value})
        // console.log(this.state.inputValue);
    }
    switchProperty = () => {
        const obj = {...this.state};
        obj.isTogleOn = !this.state.isTogleOn;
        obj.onButton = this.state.isTogleOn ? "Off" : "On";
        this.setState(obj);
        // console.log(this.state.isTogleOn);
    }
    render () {
        return (<>
        <button onClick={clickMe}>Click me</button>
        <br></br>
        <br></br>
        <input type='text'
         onKeyDown={(event) => {
            if (event.code === 'Enter') {handleKeyPress(this.state.inputValue)}
            // console.log(event.code)
            }} 
        onChange={this.setValue}
            id="theInput"></input>
        <br></br>
        <br></br>
        <button onClick={this.switchProperty}>{this.state.onButton}</button>
        </>)
    }
}

export default Events;