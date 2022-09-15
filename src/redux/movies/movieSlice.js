import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../apis/movieApi';
import {APIKey} from '../../apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
       

    return response.data;
});

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async (term) => {

    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
       

    return response.data;
});

export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {

    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
       

    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    movieDetail: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,

    reducers: {
        removeSelectMovieOrShow: (state) => {
            state.movieDetail = {};
        }
    },

    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pendding');
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('fulfilled');

            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected');
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
            console.log('fulfilled series');

            return {...state, shows: payload};
        },
        [fetchAsyncDetail.rejected]: () => {
            console.log('rejected detail');
        },
        [fetchAsyncDetail.fulfilled]: (state, {payload}) => {
            console.log('fulfilled detail');

            return {...state, movieDetail: payload};
        }
    }
});

export const { removeSelectMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state => state.movies.movies);

export default movieSlice.reducer;