import Counter from "./Counter"

const Parent = (props) => {
    console.log(props)
    if (props.auth == "admin") {
        return (
            <Counter/>
       )
    } else {
        return (
            props.children
        )
    }

}

export default Parent