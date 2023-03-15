import './Child.css'
export const Child = (props) => {
    return (<div className="card">
        <span>{props.icon}</span><span>{props.name}</span>
        <p>{props.number}</p>
    </div>)
} 