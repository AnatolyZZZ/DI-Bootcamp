import posts2 from "../data.json";
const posts = require("../data.json");

// function calcDigit (a) {
//     if (a<10) {
//         return a
//     } else {
//         const str = a.toString().split('');
//         console.log(str);
//         let s = 0;
//         for (let d of str) {
//             s += Number(d)
//         } 
//         return calcDigit(s)
//     }
// }

// console.log(calcDigit(132189));

const PostList = () => {
    const postObj = posts
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