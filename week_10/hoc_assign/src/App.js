
//importing react framework 
import React, { Component } from 'react'
import ArticleName from './components/ArticleName'
import BilboardArticle from './components/BilboardArticle'
import NavBar from './components/NavBar'
import './App.css'

// in order to make 'App' a react component, it has to inherit
// from class Component, when component added, it will be imported
// refer to line 3 
class App extends Component {

  // provides display that can be rendered
  render () {
    return (
      // can't return multiple elements unless they are wrapped
      // with a common element, for examle <div> is the common parent
      <div>
        <NavBar siteName='HighOnCoding' catOne='Home' catTwo='Categories'/>
        <ul className='appCss'>
          <BilboardArticle title = 'Curse of the current Reviews' description = 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.'/>

          {/* The below variables would pull info from a json file containing article titles and article descriptions to then be plugged in instead of typed in */}

          <ArticleName title = 'Hello WatchKit' description = 'Last month Apple released the anticipated Watchkit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.' commentCount = '12' likeCount = '124' />
          <ArticleName title = 'Introduction to Swift' description = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift Language and how you can get started.' commentCount = '15' likeCount = '45' />
        </ul>
      </div>
    )
  }


}

// need to export 'App' component
export default App