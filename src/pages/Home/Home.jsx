import {string} from 'prop-types'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrending } from "API/get-trending";
import { IMAGE_URL } from "API/api-params";

const Home = ({className}) => {
    const [trendingData, setTrendingData] = useState([]);
    useEffect(() => {
        let mounted = true;

        getTrending()
            .then(data => {
                if (mounted) {
                    setTrendingData(data);
                    console.log(data, "data");
                } 
            });
        
        return () => mounted = false;
    //getting error calling for trendingMovies to be in dependency array or removal of array. Either of these options cause an infinite loop, so I officially ignored the error.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={className}>
            <h1>Trending Movies updated daily, thanks to the TMDB API</h1>
                <ul>
                    {trendingData.map((movie, idx) => (
                        <li key={idx}>
                            <Link to={`./movies/${movie.id}`}>
                                <img src={IMAGE_URL + movie.poster_path} alt="" width='100px' />
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    );
};

Home.propTypes = {
    className: string,
}
export default Home;