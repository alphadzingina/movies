import React, {useState} from 'react';
import MovieList from './MovieList';

const SearchMovie = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=655b7759e480c5448f597d5535f76938&query=${searchTerm}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results)
        }catch(err){
            console.error(err);
        }
    }
    return (
        <div>
            <form className="form" onSubmit={fetchMovies}>
                <label className="label" htmlFor="query">Movie name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. The Irishman" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <MovieList movies={movies}/>
        </div>
    );
};

export default SearchMovie; 