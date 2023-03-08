import {useState, useEffect} from 'react'
const CounterHook = (props) => {
    // const [set, setState] = useState(0)
    const [count, setCount] = useState(11)
    const [users, setUsers] =useState([])

    useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
    .catch(err => {
      console.log(err);
    })}, [])

    return (
        <>
        Count : {count}
        <button onClick={()=>setCount(count+1)}>Add</button>
        {
            users.map((item, index) => {
                return (<div key={index}>{item.name}</div>)
            })
        }
        </>
    )
}

export default CounterHook