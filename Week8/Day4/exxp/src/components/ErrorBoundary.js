import React from "react"

class ErrorBoundary extends React.Component {
    constructor () {
        super();
        this.state = {
            _error : null,
            hasError : false,
            errorInfo : ""
        }
    }
    componentDidCatch  (error, errorInfo) {
        this.setState({_error : error, hasError : true, errorInfo : errorInfo})
    }
    componentDidMount (error, errorInfo) {
        this.setState({_error : null, hasError : false, errorInfo : ''})
    }
    static getDerivedStateFromError(_error) {
        return { hasError: true };
      }
    
      componentDidUpdate(prevProps, _previousState) {
        if(!this.state.hasError && _previousState.hasError) {
          this.setState({ hasError: false });
        }
      }

    render () {
        if (this.state.hasError) {
            console.log(this.state._error)
            return <h1>Error ocured</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary