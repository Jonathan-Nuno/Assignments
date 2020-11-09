import React, { Component } from 'react'
import './Customers.css'

class Customers extends Component {
    render () {

        let customerItems = this.props.listOfCustomers.map((customer, index) => {
            return <li className = 'customerItem' key = {index}>{customer}</li>
        })

        return (
            customerItems
        )
    }
}

export default Customers