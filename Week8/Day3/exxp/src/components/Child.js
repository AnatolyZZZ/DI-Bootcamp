import React from "react"
class Child extends React.Component {
    constructor (props) {
        super(props);
    }
    componentWillUnmount () {
        alert("Child is removed")
    }
}

export default Child