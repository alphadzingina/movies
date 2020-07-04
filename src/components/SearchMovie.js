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
        <div className="ui container">
            <form className="form ui container" onSubmit={fetchMovies}>
                <div class="ui huge fluid icon input">    
                    <input 
                        className="input" 
                        type="text" 
                        name="query" 
                        placeholder="Search..." 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i class="circular search link icon"></i>
                </div>
            </form>
            <MovieList movies={movies}/>
        </div>
    );
};

export default SearchMovie; 