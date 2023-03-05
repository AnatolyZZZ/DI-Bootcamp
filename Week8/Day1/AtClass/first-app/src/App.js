import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Car from './Car'
import Actors from './Actors';
import './actor.css'
// import asya from '../public/asya.jpg'

const charactersJson = {
  "people": [
    {
      "id" : "1",
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
    },
    {
      "id" : "2",
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
    },
    {
      "id" : "3",
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
    }
  ]
}

const listCars = [
  {
    id : 1,
    name: "dodge d200",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id : 2,
    name: "hi 1200d",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id : 3,
    name: "datsun pl510",
    year: "1971-01-01",
    origin: "Japan"
  },
  {
    id : 4,
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  }
]

const actors = [
  {
    firstName : "Ivan",
    lastName : "Zlobin",
    image: "/favicon.ico"
  },
  {
    firstName : "Jack",
    lastName : "Done",
    image: "/Asya.jpg"
  }
]

const caracters = JSON.parse(JSON.stringify(charactersJson))

function App() {
  const brand = "Ford"
  return (
    <>
      <Hello/>
      {
        caracters.people.map(item => (
          <ul>
            <li>{item.name}</li>
            <li>{item.height}</li>
          </ul>
        ))
      }
      <Car carBrand={brand} name="MqQeen" cars={listCars}/>
      <Actors actors={actors}/>
    </>
  );
}

export default App;
