import axios from "axios";

import { KEY_API } from "./api-params";

const MOVIE_PATH = `movie/`;
const language = 'en-US';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const getMovie = async (movieID) => {
    
    try {
        const res = await axios.get(`${MOVIE_PATH}${movieID}?api_key=${KEY_API}&language=${language}`);
        const movieDetails = res.data
        console.log(movieDetails, "variable");
        return movieDetails;
    } catch (error) {
        console.log('Something wrong with API', error.message);
    };
};

export { getMovie}