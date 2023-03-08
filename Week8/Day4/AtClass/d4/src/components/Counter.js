import React from 'react'

class Counter extends React.Component {
    constructor () {
        super ();
        this.state = {
            count : 0
        }
    }

add = () => {
    this.setState({count : this.state.count + 1})
}
render() {
    if (this.state.count > 5) {
        throw Error ("Error is so bad")
    }
    return (
        <>
         {this.state.count}
         <button onClick={this.add}>Increase</button>
        </>
    )
}

}

export default Counter