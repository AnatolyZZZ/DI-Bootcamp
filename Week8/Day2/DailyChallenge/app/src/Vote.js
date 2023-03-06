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
    increaseVote = (arg, index) => {
       const arr = [...this.state.languages];
       console.log(arr[index]);
       arr[index].votes++;
       this.setState({languages : arr})
    }
    render () {
        return (<>
            {this.state.languages.map((lang,i) => {
                    return (<div
                    // type="button"
                    className="plate" 
                    onClick={() => this.increaseVote(lang.name , i)}
                    key={i}
                    >
                        <p>Language: {lang.name}</p>
                        <p>Votes: {lang.votes}</p>
                    </div>)
            }
            )}   
        </>)
    }
}

export default Vote;