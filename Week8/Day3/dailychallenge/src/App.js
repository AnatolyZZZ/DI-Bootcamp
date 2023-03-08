// import './App.css';
import React from "react"
import Form from "./Form"

class App extends React.Component {
constructor () {
  super ();
  this.state = {
      firstname : "",
      age : ""
  }
}
handleChange = (e) => {
  const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
  this.setState({[e.target.name] : value})
}

submit = (e) => {
  e.preventDefault()
  let str = '?';
  for (let n in this.state) {
    str += n + '=' + this.state[n] + "&";
  }
  str = str.slice(0, -1);
  console.log(str)
  window.location.replace(`http://localhost:3000/${str}`);
  console.log(this.state)
}

render () {
  return (
    <div className="App">
      <header className="App-header">
        <Form change={this.handleChange} submit={this.submit}/>
        <p>{JSON.stringify(this.state)}</p>
      </header>
    </div>
  );
}
  
}

export default App;
