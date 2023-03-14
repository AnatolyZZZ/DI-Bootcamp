import React from "react";
import Card from "./Card";
import {connect} from 'react-redux'
import './App.css'

const CardList = (props) => {
    return (
        props.robots
        .filter(elt => elt.name.toLowerCase().includes(props.searchfield.toLowerCase()))
        .map((elt) => <Card name={elt.name} email={elt.email} id={elt.id} key={elt.id}/>)
    )
    
}
const mapStateToProps = (state) => {
    return {
        searchfield : state.searchfield,
        robots : state.robots
    }
}

export default connect(mapStateToProps)(CardList);