import "./Card.css"
const Card = (props) => {

    const checkResult = () => {
        // console.log(props.hero);
        props.nostat();
        if (!props.hero.clicked) {
            props.hero.clicked = true;
            props.rise();
        } else {
            props.finish();
        }
    }
    return (<div className="card" onClick={checkResult}>
        <img src={props.hero.image} className="mainpic"/>
        <div>
        <p className="name"><span style={{'fontWeight': 'bold'}}>Name: </span>{props.hero.name}</p>
        <p className="occupation"><span style={{'fontWeight': 'bold'}}>Ocupation: </span>{props.hero.occupation}</p>
        </div>
    </div>)
}

export default Card;