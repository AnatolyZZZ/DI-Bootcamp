// import {connect} from "react-redux";
import { showDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";


const MovieList = (props) => {
    const movies = useSelector(state => state.movie_reducer.movieL)
    const dispatch = useDispatch();
    console.log(props);
    return (
        movies.map((elt, index) => {return (<div key={index}>
            {elt.title}
            <button onClick={()=>dispatch(showDetail(elt))}>select</button>
        </div>)})
    )
}


// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         movies : state.movie_reducer.movieL
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectMovie : (obj) => dispatch(showDetail(obj))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
export default MovieList