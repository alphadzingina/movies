import React from 'react';

const MovieCard = (props) => {
    return (
        <div className="ui items movie-card">
            <div className="item">
                <div className="image card--image">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`} alt={props.movie.title + ' poster'} /></div>
                <div className="content">
                    <h3 className="header">{props.movie.title}</h3>
                    <div className="meta">
                        <span>RELEASE DATE: {props.movie.release_date}</span>
                    </div>
                    <div className="extra">
                        {props.movie.vote_average}
                    </div>
                    <div className="description">
                       <p>{props.movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;