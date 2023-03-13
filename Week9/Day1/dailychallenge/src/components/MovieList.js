import {connect} from "react-redux";
import { showDetail } from "../actions";

const MovieList = (props) => {
    console.log(props);
    return (
        props.movies.map((elt, index) => {return (<div key={index}>
            {elt.title}
            <button onClick={()=>props.selectMovie(elt)}>select</button>
        </div>)})
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        movies : state.movie_reducer.movieL
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectMovie : (obj) => dispatch(showDetail(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)