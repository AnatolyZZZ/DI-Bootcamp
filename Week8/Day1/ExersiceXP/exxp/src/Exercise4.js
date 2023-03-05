import "./Exercise4.css"
const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Ex4 = () => {
    return (
        <>
        <h1 style={{backgroundColor: "lightblue", color : "red"}}>Some h1 tag</h1>
        <p>This is p</p>
        <a href="https://www.kotikiteam.ru">This is a link</a>
        <form>
            <label htmlFor="inp">Enter your name</label>
            <input type="text" id="inp" name="name"></input>
            <input type="submit"/>
        </form>
        <img src="/Asya.jpg" style={{width: "100px"}}></img>
        <ul>The list:
            <li>Smth1</li>
            <li>Smth2</li>
            <li>Smth3</li>
        </ul>
        <h1 style={style_header}>This is styled with object</h1>
        <p className="para">This is styled with class</p>
        </>
    )
}

export default Ex4