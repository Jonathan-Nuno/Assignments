import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <h1>{this.props.lastName}, {this.props.firstName} has been added to the list of participants</h1>
        )
    }
}

export default Name