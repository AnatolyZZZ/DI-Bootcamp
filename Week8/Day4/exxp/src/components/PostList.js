import posts2 from "../data.json";
const posts = require("../data.json");


const PostList = () => {
    const postObj = posts2
    // JSON.parse(posts);
    return (
        postObj.map((elt, index) => {return (<div key={index}>
            <h2>{elt.title}</h2>
            <p>{elt.content}</p>
            <h5>Date: {elt.date}</h5>
        </div>
        )})
    )
}

export default PostList