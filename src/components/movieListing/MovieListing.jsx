import React from 'react';
import '../movieListing/MovieListing.css';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';

const MovieListing = () => {
    const movies = useSelector(state => state.movies.movies);
    const shows = useSelector(state => state.movies.shows);

    let renderMovies = '';
    let renderShows = '';

    renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie) => {
            return <MovieCard key={movie.imdbID } {...movie}/>
        })
    ) : (<div className='movies-error'>
            <h3>{movies.Error}</h3>
        </div>);

    renderShows = shows.Response === 'True' ? (
        shows.Search.map((show) => {
            return <MovieCard key={show.imdbID} {...show}/>
        })
    ) : (<div className='shows-error'>
            <h3>{shows.Error}</h3>
        </div>);

    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movie</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
            <div className="show-list">
                <h2>Show</h2>
                <div className="show-container">
                    {renderShows}
                </div>
            </div>
        </div>
    );
}

export default MovieListing;