import React, { Component } from 'react'
import '../components_css/BilboardArticle.css'

class BilboardArticle extends Component {

    render() {
        return (
            <div>
                <div className='bilboard'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default BilboardArticle
