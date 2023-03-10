import "./Card.css"

const Card = (props) => {
    return (
    <div className="quote">
        <h2 style={{color:props.headerColor}}>{props.quote}</h2>
        <p className="author">- {props.author} -</p>
        <button className="button" onClick={props.func} style={{backgroundColor:props.buttonColor}}>New quote</button>
    </div>
    )
}

export default Card;