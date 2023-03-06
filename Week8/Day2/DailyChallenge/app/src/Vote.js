import React from 'react'
import './vote.css';

class Vote extends React.Component {
    constructor () {
        super ()
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }
    increaseVote = (arg) => {
        console.log("Fn called")
        const ind = this.state.languages.findIndex(elt => elt.name === arg);
        // let i = this.state.languages[ind].votes;
        // i++;
        // this.setState
        this.state.languages[ind].votes++;
    }
    render () {
        return (<>
            {this.state.languages.map(lang => (
                <button
                type="button"
                className="plate" 
                onClick={this.increaseVote(lang.name)}
                key={lang.name}
                >
                    <p>Language: {lang.name}</p>
                    <p>Votes: {lang.votes}</p>
                </button>
            ))}
        </>)
    }
}

export default Vote;