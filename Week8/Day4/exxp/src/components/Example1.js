import complexData from '../complexdata.json';
// const complexData = require('../complexdata.json')


console.log(complexData);
complexData.SocialMedias.map((elt, index) => {console.log(elt)})

const Examle1 = () => {
    return (<ul>
        {complexData.SocialMedias.map((elt, index) => {return <li key={index}>{elt}</li>})}
    </ul>)
}

export default Examle1