import axios from "axios";
import { KEY_API } from "./api-params";

const TRENDING_PATH = 'trending/movie/day'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


const getTrending = async() => {
    try {
        const { data } = await axios.get(`${TRENDING_PATH}?api_key=${KEY_API}`);
        console.log(data.results, "data");
        const trendingMovies = data.results
        console.log(trendingMovies, "variable");
        return trendingMovies;
    } catch (error) {
        console.log('Something wrong with API', error.message);
    };
};

export { getTrending}