import complexData from '../complexdata.json';

const SkillSet = (arr) => {
    return (
        arr.map((elt, index) => {return (<li key={index}>{elt.Name}</li>)})
    )
}

const Example2 = () => {
    return (<div>
        {complexData.Skills.map((elt, index) => {return (<>
        <h1>{elt.Area}</h1>
        <ul>
            {SkillSet(elt.SkillSet)}
        </ul>
        </>
        )})}

    </div>)
}

export default Example2