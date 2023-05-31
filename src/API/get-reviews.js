import axios from "axios";

import { KEY_API } from "./api-params";

const REVIEWS_PATH = `reviews`;
const language = 'en-US';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const getReviews = async (movieID) => {
    
    try {
        const { data } = await axios.get(`movie/${movieID}/${REVIEWS_PATH}?api_key=${KEY_API}&language=${language}`);
        console.log(data.results, "data");
        const movieReviews = data.results
        console.log(movieReviews, "variable");
        return movieReviews;
    } catch (error) {
        console.log('Something wrong with API', error.message);
    };
};

export { getReviews}