import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    return (
        <div className="card-list">
            found {props.movies.length} results <br />
            {props.movies.filter(movie => movie.poster_path).map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MovieList;