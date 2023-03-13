export const showDetail = (movieObj) => {
    return {
        type: "MOVIE_SELECTED",
        payload: movieObj
    }
}