import React from "react";

class ErrorBoundary extends React.Component {
    constructor () {
        super()
        this.state = {
            error : null,
            info : null
        }
    }
    componentDidCatch (error, errorInfo) {
        this.setState({error : error, info : errorInfo})
    }
    render () {
        if (this.state.error) {
            console.log(this.state);
            return (<>
            <h1>Sorry. Error ocured</h1>
            <p>Details: {JSON.stringify(this.state.info.componentStack)}</p>
            </>)
        }
        return this.props.children
        
    }
}

export default ErrorBoundary;