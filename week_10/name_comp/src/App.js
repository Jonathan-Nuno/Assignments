
// using React from react framework
import React, { Component } from 'react'
import SayHello from './SayHello'
import Name from './Name'
import Customers from './Customers'
import Friends from './Friends'

class App extends Component {

  // render function dictates what 
  // the component will display on the screen

  render() {

    let customers = ['Alex', 'Mary', 'John']
    let friends = ['Amy', 'Sasha', 'Mike', 'Asta']

    return (
      <div>
        <h1>Hello World</h1>
        <h1>Second Line</h1>
        <SayHello name = 'Mary' age = '34' />
        <SayHello name = 'Billy' age = '52'/>
        
        <Name lastName = 'Doe' firstName = 'John' />

        <Customers listOfCustomers = {customers} />

        <Friends listOfFriends = {friends} />
      </div>
    )
  }
}

export default App