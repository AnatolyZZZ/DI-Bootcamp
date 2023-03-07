const User = (props) => {
    // console.log(props)
    const user_style = 
    {
        display: "inline-block",
        padding: '10px',
        margin : '20px',
        border: '1px solid white'
    }
    return (
        <div style={user_style}> 
            <h2>User is {props.name}</h2>
            <h3>Email is: {props.email}</h3>
        </div>
       
    )
}

export default User