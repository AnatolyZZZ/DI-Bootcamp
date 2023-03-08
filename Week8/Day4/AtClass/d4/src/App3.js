import React from "react";
import "./App.css"
import CounterHook from "./components/CounterHook";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ErrorBoundary from "./components/ErrorBoundary";

const App3 = () => {
    return (
        <div className="App-header">
            {/* <ErrorBoundary>
                <Counter/>
                <Parent auth="admin">
                    <Child/>
                </Parent>
            </ErrorBoundary> */}
            <CounterHook/>
           
        </div>
    )
}

export default App3;