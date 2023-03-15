import { useState } from "react"
export const Edit = (props) => {
    const [productName, setName] = useState(props.product.name)
    const [productPrice, setPrice] = useState(props.product.price)
    const onSubmitHandler = async () => {
        const req = {
            method : "PUT",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({"id" : props.product.id,'name' : productName, 'price' : productPrice})
        }
        try {
            const res = await fetch(`/api/products/${props.product.id}`,req);
            console.log(res)
            const data = await res.json();
            // setProducts(data)
            console.log(data)
        } catch (err) {
            console.log(err);
        }
        props.function(false);
        
    }
    const deleteHandler = async () => {
        const req = {
            method : "DELETE",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({"id" : props.product.id})
        }
        try {
            const res = await fetch(`/api/products/${props.product.id}`,req);
            console.log(res)
            const data = await res.json();
            // setProducts(data)
            console.log(data)
        } catch (err) {
            console.log(err);
        }
        props.deleted(true);
        
    }
    return (<>
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmitHandler()
        }}>
            <input value={productName} onChange={(e) => setName(e.target.value)}/>
            <input value={productPrice} onChange={(e) => setPrice(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <button onClick={(e) => deleteHandler()}>Delete product</button>
        </>
    )
}