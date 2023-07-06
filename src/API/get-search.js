import axios from "axios";
import { KEY_API } from "./api-params";

const SEARCH_PATH = 'search/movie';
const language = 'en-US';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const getSearch = async (query) => {
    try {
        const { data } = await axios.get(`${SEARCH_PATH}?api_key=${KEY_API}&query=${query}&language=${language}&include_adult=false`);
        const searchMovies = data.results
        return searchMovies;
    } catch (error) {
        console.log('Something wrong with API', error.message);
    };
};

export { getSearch }