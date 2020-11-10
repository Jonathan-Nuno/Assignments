import React, { Component } from 'react'
import '../Components_css/News.css'

class News extends Component {

    render () {
        
        const newsItems = this.props.info.map(news => {
            return <li>
                            <h2>{news.title}</h2>
                            <p>{news.description}</p>
                            <img src={news.urlToImage} />
                        </li>
        })


        return (
            <ul>{newsItems}</ul>
        )
    }

}
export default News