import './Score.css'
const Score = (props) => {
    return (<>
    <div className="scoreTable">
        <p className="gamename">Superheroes memory game</p>
        <p className="status">{props.status}</p>
        <p className="score">Score : {props.score} Top score: {props.topscore}</p>
    </div>
    <div className="rules">
        <p>Get points by cliking on different images, but don,t click on one image twice</p>
    </div>
    </>)
}

export default Score;