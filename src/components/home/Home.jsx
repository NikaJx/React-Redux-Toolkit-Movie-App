import {useEffect} from 'react';
import '../home/Home.css';
import MovieListing from '../movieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();

    const movieText = 'Harry';
    const serialText = 'Friends';

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncSeries(serialText));
    }, [dispatch]);

    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing/>
        </div>
    );
}

export default Home;