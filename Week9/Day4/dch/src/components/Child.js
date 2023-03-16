import './Child.css'
export const Child = (props) => {
    // console.log(String.fromCharCode(props.icon))
    return (<div className="card">
        <span>{String.fromCharCode(props.icon)}</span><span>{props.name}</span>
        <p>{props.number}</p>
    </div>)
} 