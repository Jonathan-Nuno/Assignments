import React, { Component } from 'react'
import '../components_css/NavBar.css'

class NavBar extends Component {

    render() {
        return (
            <div>
                <ul id='nav'>
                    <li><a href='#'><h1>{this.props.siteName}</h1></a></li>
                    <li><a href='#'><h2 className='cat'>{this.props.catOne}</h2></a></li>
                    <li><a href='#'><h2 className='cat'>{this.props.catTwo}</h2></a></li>
                </ul>

            </div>
        )
    }
}


export default NavBar
