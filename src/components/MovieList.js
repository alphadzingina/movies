import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    return (
        <div className="card-list">
            {props.movies.filter(movie => movie.poster_path).map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MovieList;