import React from 'react';

const SearchMovie = () => {
    const fetchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "The Irishman";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=655b7759e480c5448f597d5535f76938&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div>
            <form className="form" onSubmit={fetchMovies}>
                <label className="label" htmlFor="query">Movie name</label>
                <input className="input" type="text" name="query" placeholder="i.e. The Irishman"/>
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchMovie; 