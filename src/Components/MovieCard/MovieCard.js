import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MovieRating from '../Rating/Rating'

const MovieCard = ({movie}) => {
    return (
        <div key={movie.id}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterUrl } />
                <Card.Body>
                <Card.Title>{movie.title} </Card.Title>
                <Card.Text>{movie.description} </Card.Text>
                <MovieRating isMovieRating={true} movieRating={movie.rate} />
                < Button variant="primary" > Trailer </ Button >
                <Link to={`../MovieDetails/MovieDetails.js/${movie.id}`} ></Link>
                </Card.Body>
                </Card>
        </div>
    )
}

export default MovieCard