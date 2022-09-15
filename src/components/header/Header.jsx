import {useState} from 'react';
import '../header/Header.css';
import { Link } from 'react-router-dom';
import userImg from '../../images/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../redux/movies/movieSlice';

const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(term === '') return alert('Please enter search term');

        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncSeries(term));

        setTerm('');
    }

    return (
        <div className='header'>
            <div className="logo">
                <Link to='/'>
                    Movie App
                </Link>
            </div>
            <div className="search-bar">
                <form onSubmit={onSubmitHandler}>
                    <input type="text" placeholder='Search Movies'
                        value={term}
                        onChange={e => setTerm(e.target.value)}/>
                    <button type="submit"><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={userImg}/>
            </div>
        </div>
    );
}

export default Header;