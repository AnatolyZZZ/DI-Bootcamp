import React from "react"

class UserC extends React.Component {
    // constructor () {
    //     super()
    // }
    render() {
        return (
            <div style={    {
                display: "inline-block",
                padding: '10px',
                margin : '20px',
                border: '1px solid white'
            }}> 
                <h2>User is {this.props.name}</h2>
                <h3>Email is: {this.props.email}</h3>
            </div>
           
        )
    }
}

export default UserC