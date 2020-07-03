import React from 'react';

const SearchMovie = () => {
    return (
        <div>
            <form className="form">
                <label className="label" htmlFor="query">Movie name</label>
                <input className="input" type="text" name="query" placeholder="i.e. The Irishman"/>
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchMovie; 