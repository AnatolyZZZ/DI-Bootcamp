import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {
const [products, setProducts] = useState([])
const [searchText, setSearch] = useState('')
// const [name, setName] = useState('')
// const [price, setPrice] = useState('')

useEffect (()=> 
{ if (searchText === "") {
    const getProducts = async () => {
        try {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data)
        } catch (e) {
            console.log(e)
        }
    }
    getProducts()
}
    
}, [searchText])

const searched = async () => {
    console.log('searched ', searchText)
    const query = `?q=${searchText}`
    try {
        const res = await fetch(`/api/products/search${query}`);
        const data = await res.json();
        // console.log(data)
        setProducts(data)
    } catch (e) {
        console.log(e)
    }
}   

// const add = async () => {
//     const req = {
//         method : "POST",
//         headers : {"Content-type" : "application/json"},
//         body : JSON.stringify({'name' : name, 'price' : price})
//     }
//     try {
//         const res = await fetch('/api/products',req);
//         console.log(res)
//         const data = await res.json();
//         setProducts(data)
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }


    return (
        <div>
            <h1>Shop</h1>
            <div>
                <input onChange ={(e) => setSearch(e.target.value)}/>
                <button onClick={searched}>Search</button>
            </div>
            <div>
                <Link to={'/add'}>Add product</Link>
                {/* <h4>Add product</h4>
                <form >
                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                    <button onClick={(e) => {
                       e.preventDefault()
                       add()
                    }}>Submit</button>
                </form> */}
            </div>
            <div style={{display : 'flex', gap : '20px', flexWrap : 'wrap'}}>
            {
                products.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`}>
                                To product</Link>
                            <p>{item.id}</p>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Products