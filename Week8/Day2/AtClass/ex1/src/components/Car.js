import React from 'react'

class Car extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            color: 'red',
            brand: 'ford'
        }
    }
changeColor = () => {
    this.setState({color: 'blue'})
}

randomColor = () => {
    let {colors} = this.props
    let randColor =colors[Math.floor(Math.random()*colors.length)]
    this.setState({color : randColor})
}

    render() {
        return (<>
        <h2 style={{backgroundColor: this.state.color}}>I'm {this.state.brand} of {this.state.color} color</h2>
        <button 
        type="button"
        onClick={this.randomColor}
        >
        Change color
        </button>
        </>)
    }
}
export default Car