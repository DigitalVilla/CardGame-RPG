import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
  
    componentDidCatch () {
        this.setState({hasError:true})
    }

    render() {
        if (this.state.hasError) 
            return  <h1 style={{marginTop:"5rem"}}>Please Reload the page</h1>
        return this.props.children;
  }
}
