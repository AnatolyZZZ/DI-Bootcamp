const Form = (props) => {
    return (<>
    <form onSubmit={props.submit}>
        <label htmlFor="name">Enter your name</label>
        <input type="text" name="firstname" placeholder="name" onChange={props.change}/>
        <br/>
        <label htmlFor="sex">Enter your sex</label>
        <br/>
        <label htmlFor="sex">Male</label>
        <input type="radio" name="sex" value="male" onChange={props.change}/>
        <label htmlFor="sex">Female</label>
        <input type="radio" name="sex" value="female" onChange={props.change}/>
        <br/>
        <label htmlFor="age">Enter your age</label>
        <input type="text" name="age" placeholder="age" onChange={props.change}/>

        <input type="submit"/>
    </form>
    {/* <p>{props.inputs}</p> */}
    </>)
}
export default Form