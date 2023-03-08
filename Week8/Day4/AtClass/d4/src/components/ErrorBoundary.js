import React from "react";

class ErrorBoundary extends React.Component {
    constructor () {
        super();
        this.state = {
            error : null,
            errorInfo : null
        }
    }

    componentDidCatch (error, errorInfo) {
        console.log('error =>', error);
        console.log('error info =>', errorInfo)
        this.setState({error:error, errorInfo : errorInfo})
    }

    render () {
        if (this.state.error) {
            return (<h1>Something went wrong</h1>)
        }
        return this.props.children

    }
}

export default ErrorBoundary;