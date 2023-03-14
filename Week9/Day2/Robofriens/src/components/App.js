import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import {connect} from 'react-redux';
import {getRobots} from '../actions'

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
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            this.props.setRobots(data);
          this.setState({robots : data, filtered_robots : data})
        //   console.log(this.state)
        })
        .catch((err) => console.log(err))
    }

    // searchHendler = (e) => {
    //     this.setState({keyword : e.target.value})
    //     const f_robots = this.state.robots.filter(elt => elt.name.toLowerCase().includes(e.target.value.toLowerCase()));
    //     this.setState({filtered_robots : f_robots})
    //     console.log(this.state.keyword);
    // }

    render () {
        return (<div className="tc">
            <h1>Robofriends</h1>
            <SearchBox/>
            <CardList/>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return  {
        searchfield : state.searchfield
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRobots : (arr) => dispatch(getRobots(arr))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App) 