import React from 'react'

class Actor extends React.Component {
    constructor () {
        super ();
        this.state = {
            firstName : "Jack",
            lastName : "Daniels",
            image : "/asya.jpg"
        }
    }
    render() {
        return (<div>
            <p>Hi I'm {this.state.firstName}{this.state.lastName}</p>
            <img src={this.state.image}/>
        </div>)
    }
}


// const Actors = (props) => {
//     return (
//         props.actors.map(actor => (
//             <ul style={{textAlign: "center"}}>
//                 <li>First name: {actor.firstName}</li>
//                 <li>Last name: {actor.lastName}</li>
//                 <img src={actor.image} className="image bordered"/>
//             </ul> 
//         ))
//     )
// }

export default Actor;