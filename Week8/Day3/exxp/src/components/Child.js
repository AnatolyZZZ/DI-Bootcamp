import React from "react"
class Child extends React.Component {
    // constructor (props) {
    //     super(props);
    // }
    componentWillUnmount () {
        alert("Child is removed")
    }
    render () {
        return <h1>I'm child</h1>
    }
}

export default Child