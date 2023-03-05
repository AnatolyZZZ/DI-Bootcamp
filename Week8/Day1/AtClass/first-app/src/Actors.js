
const Actors = (props) => {
    return (
        props.actors.map(actor => (
            <ul style={{textAlign: "center"}}>
                <li>First name: {actor.firstName}</li>
                <li>Last name: {actor.lastName}</li>
                <img src={actor.image} className="image bordered"/>
            </ul> 
        ))
    )
}

export default Actors;