import './App.css';
import  TheForm from './componets/TransactionForm'
import List from './componets/TransactionList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TheForm/>
       <List/>
      </header>
    </div>
  );
}

export default App;
