
import React, { Component } from 'react'

class Movies extends Component {

    render () {

        const movieItems = this.props.movies.map(movie => {
            return <li key = {movie.imdbID}>
                <b>{movie.Title}</b>
                <img src={movie.Poster} />
                </li>
        })




        return (
            <ul>{movieItems}</ul>
        )
    }

}

export default Movies