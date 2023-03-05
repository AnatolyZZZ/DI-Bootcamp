const Aninals = (props) => {
    return (
        props.animals.map((animal, key) => <li key={key}>{animal}</li>)
    )
}

export default Aninals;