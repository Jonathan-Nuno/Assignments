import React, { Component } from 'react'

class SayHello extends Component {
    render() {
        return (
        <h1>Hello {this.props.name}! You are {this.props.age} years old today!</h1>
        )
    }
}




export default SayHello