

import React, { Component } from 'react'

class Stepper extends Component {

    constructor() {
        super()
        
        this.state ={
            counter: 91
        }
    }

    increase = () => {
        this.setState ({
            counter: this.state.counter + 1
        },() => {
            console.log('Step count increased')
        })
    }

    decrease = () => {
        this.setState ({
            counter: this.state.counter - 1
        }, () => {
            console.log('Step count decreased')
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increase}>+</button>
            </div>
        )
    }

}

export default Stepper