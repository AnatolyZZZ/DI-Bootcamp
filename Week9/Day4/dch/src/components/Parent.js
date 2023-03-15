import cards from '../cards.json'
import { Child } from './Child'
const arr = cards.cards

const Parent = () => {
    return (<div>This is parent
        {arr.map((elt, index) => <Child key={index} icon={elt.icon} name={elt.name} number={elt.number}/>)}
    </div>)
}

export default Parent;