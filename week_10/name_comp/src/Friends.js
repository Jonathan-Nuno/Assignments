import React, { Component } from 'react'

class Friends extends Component {
    render () {

        let friendList = this.props.listOfFriends.map((friend, index) => {
            return <li key = {index}>{friend}</li>
        })

        return (
            <h1>This is my list of Friends
            {friendList}</h1>
        )
    }
}

export default Friends