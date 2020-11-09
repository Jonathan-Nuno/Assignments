
import React, { Component } from 'react'
import '../components_css/ArticleName.css'

class ArticleName extends Component {

    render() {
        return (
        <div>
            <h2 className='articleTitle'>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <div className='comLikeBar'>
                <label>{this.props.commentCount}<button>Comments</button></label>
                <label>{this.props.likeCount}<button>Likes</button></label>
            </div>
        </div>
        )
    }

}

export default ArticleName