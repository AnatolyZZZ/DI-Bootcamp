import {connect} from "react-redux";

const MovieDetails = (props) => {
    return (<div>
        <h1>{props.movie.title}</h1>
        <p>Reliase date: {props.movie.releaseDate}</p>
        <p>Rating :{props.movie.rating}</p>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        movie : state.detail_reducer.selected
    }
}

export default connect(mapStateToProps)(MovieDetails)