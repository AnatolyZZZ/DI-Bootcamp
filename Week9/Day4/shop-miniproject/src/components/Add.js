import { useState } from "react"
import {Link} from "react-router-dom"
export const Add = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')  
    const [products, setProducts] = useState([])
    const add = async () => {
        const req = {
            method : "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({'name' : name, 'price' : price})
        }
        try {
            const res = await fetch('/api/products',req);
            console.log(res)
            const data = await res.json();
            setProducts(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (<div>
        <h4>Add product</h4>
        <form >
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={(e) => {
               e.preventDefault()
               add()
            }}>Submit</button>
        </form>
        <Link to={'/'}>Back to store</Link>
        <div style={{display : 'flex', gap : '20px', flexWrap : 'wrap'}}>
            {
                products.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>You added: {item.name}</h2>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`}>
                                To product</Link>
                            <Link to={`/`}>
                                To store</Link>
                            <p>{item.id}</p>
                        </div>
                    )
                })
            }
            </div>
    </div>)
}