import User from "./components/User"
import React  from "react";
import UserC from "./components/UserC";
import './App.css';
// import users from "./robots.json"

class App extends React.Component {
  constructor () {
    super();
    console.log ("constr")
    this.state = {
      user_arr : [],
      input_text: "",
      color : "yellow"
    }
  }
  componentDidMount () {
    console.log("did mount");
    setTimeout ( () =>{
      this.setState({color : "pink"})
    }
      , 5000
    )
    // this.setState({user_arr : users})
  }

  showUsers () {
    let users = [];
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({user_arr : data})
    })
    .catch((err) => console.log(err))
    this.setState({user_arr : users})
  }

  changeText = (e) => {
    // console.log(e.target.value);
    this.setState({input_text : e.target.value})
  }

  render () { 
    console.log ("render")
    return (
    <div className="App" style= {{backgroundColor : this.state.color}}>
      <input onChange={this.changeText} type="text"></input>
      <button onClick={() => this.showUsers()}>Show users</button>
    <header className="App-header">
  {
    this.state.user_arr.filter(elt => elt.name.toLowerCase().includes(this.state.input_text.toLowerCase())).map((item, index) => {return (
      <UserC key={index} name={item.name} email={item.email}/>
    )})
  }
    </header>
  </div>)
  };
}

export default App;
