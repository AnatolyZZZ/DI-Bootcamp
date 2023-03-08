import logo from './logo.svg';
import './App.css';
import React from "react"

class  App extends React.Component {
  constructor (){
    super()
    this.state = {
      email : "",
      username : "",
      message : "",
      color : "",
      onoff : false
    }
  } 
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) => {
    const value = e.target.type == "checkbox" ? e.target.checked : e.target.value
    this.setState({[e.target.name] : value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Forms</h1>
          <form onSubmit={this.submitHandler}>
            <input type="text" name="name" placeholder="name" onChange={this.handleChange}/>
            <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
            <textarea onChange={this.handleChange} name="message"/>
            <select name="color" onChange={this.handleChange}>
              <option value="">Please select</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select> <br/>
            <input type="checkbox" name="onoff" onChange={this.handleChange}>
            </input>
            <input type="submit"/>
          </form>
        </header>
      </div>
    )

  }
}

export default App;
