import React from "react"

class BuggyCounter extends React.Component {
    constructor () {
        super();
        this.state = {
            count : 0
        }
    }
    crush = () => {
        if (this.state.count === 5) {
            throw new Error('I crashed')
        }
    }
    increase = () => {
        this.setState({count : this.state.count + 1}, this.crush);
    }
    
    render () {
        return (<>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increase}>Add 1</button>
        </>)
    }

}

export default BuggyCounter