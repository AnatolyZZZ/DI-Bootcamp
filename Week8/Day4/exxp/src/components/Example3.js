import complexData from '../complexdata.json';

console.log(complexData.Experiences)


const Example3 = () => {
    return (<>
     {complexData.Experiences.map((elt, index) => {return (<div>
        <img src={elt.logo}/>
        <br/>
        <a href={elt.url}>{elt.companyName}</a>
        <h2>{elt.roles[0].title}</h2>
        <p>{elt.roles[0].startDate +' '+ elt.roles[0].location}</p>
        <p>{elt.roles[0].description}</p>
        </div>)})}
    </>
    )
}

export default Example3;

