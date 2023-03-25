import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {Edit} from './Edit'
export const Product = () => {
    const [product, setProduct] = useState([])
    const [editmode, setEdit] = useState(false)
    const [deleted, setDeleted] = useState(false)
    let{id} = useParams()
    // console.log(id);

    const getProduct = async () => {
        try {
            const res = await fetch(`/api/products/${id}`);
            const data = await res.json();
            setProduct(data[0])
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {getProduct()}, [editmode])

    let Ed = (editmode===true) ? <Edit product={product} function={setEdit} deleted={setDeleted}/> : ""

    if (!deleted) {
        return (<>
            <h1>Product page</h1>
            <h1>Name: {product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Id: {product.id}</p>
            <Link to='/'>To store</Link>
            <button onClick={(e) => setEdit(true)}>Edit</button>
            {Ed}
            </>)
    } else {
        return (<>
        <h1>Product have been deleted</h1>
        <h1><Link to='/'>To store</Link></h1>
        </>)
    }
   
}