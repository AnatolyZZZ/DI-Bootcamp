import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        <Color/>
      </header>
    </div>
  );
}

export default App;
