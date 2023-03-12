import React from 'react'
import './App.css';
import Child from "./components/Child"
import {connect} from 'react-redux'
import {chagePropOne} from './redux/actions'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      property_one : "This is prop 1"
    }
  }
  updState = (e) => {
    this.setState({property_one : e.target.value})
  }

  updGlobalState = (e) => {

  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.property_one}</div>
          <input type="text" onChange={this.updState}/>
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <input type="text" onChange={this.props.changePropA}/>
          <Child prop_one={this.state.property_one}/>
        </header>
      </div>
    );
  }
  
}
const mapStateToProps = (state) => {
  return {
    a : state.property_one,
    b : state.property_two
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePropA : (e) => dispatch(chagePropOne(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
