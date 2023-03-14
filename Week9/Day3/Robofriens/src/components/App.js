import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import {connect} from 'react-redux';
import {getRobots} from '../actions';
import './App.css'

class App extends React.Component {
    constructor (props) {
        super();
        // this.state = {
        //     robots : [],
        //     keyword : "",
        //     filtered_robots : []
        // }
    }
    componentDidMount () {
        this.props.setRobots()
    }

    // searchHendler = (e) => {
    //     this.setState({keyword : e.target.value})
    //     const f_robots = this.state.robots.filter(elt => elt.name.toLowerCase().includes(e.target.value.toLowerCase()));
    //     this.setState({filtered_robots : f_robots})
    //     console.log(this.state.keyword);
    // }
    

    render () {
        if (this.props.robots.length === 0) {
            return <h1 className="name">Loading</h1>
        } else 
        return (
            <div className="tc">
            <h1 className="name">Robofriends</h1>
            <SearchBox/>
            <CardList/>
            </div>)
    }
}
const mapStateToProps = (state) => {
    return  {
        searchfield : state.searchfield,
        robots : state.robots
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRobots : (arr) => dispatch(getRobots())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App) 