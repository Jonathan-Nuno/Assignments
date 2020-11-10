import React, { Component } from 'react'
import Counter from './Components/Counter'
import Stepper from './Components/Stepper'
import Movies from './Components/Movies'
import News from './Components/News'

// named export
// when importing make sure to use curly brackets
class App extends Component {

  constructor() {
    super()
    console.log('constructor')

    this.state = {
      info: []
    }

  }

  fetchApi = (apiKey) => {

    fetch(apiKey)
      .then(response => response.json())
      .then(result => {
        this.setState({
          info: result.articles
        })
      })
  }

  componentDidMount() {
    // this.fetchApi('https://www.omdbapi.com/?s=Batman&page=2&apikey=564727fa')
    this.fetchApi('https://newsapi.org/v2/top-headlines?country=us&apiKey=0cf790498275413a9247f8b94b3843fd')
  }


  render() {

    return (
      <div>
        {/* <Counter /> */}

        {/* <Stepper /> */}
        {/* <Movies movies = {this.state.movies}/> */}
        <News info = {this.state.info} />
      </div>
    )
  }
}

// default export 
export default App