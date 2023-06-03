import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import { getMovie } from "API/get-movie";
import { IMAGE_URL } from "API/api-params";
import NotFound from "components/NotFound/NotFound";

const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const { movieID } = useParams();
    const [movieData, setMovieData] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        getMovie(movieID)
            .then(data => {
                if (mounted) {
                    setMovieData(data)
                    console.log(data, 'movie');
                };
            }); 
        return () => mounted = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
 
    return (
        <div>
            <Link to={backLinkHref}>Go Back</Link>
            {movieData ? (
            <div>
                <img src={IMAGE_URL + movieData.poster_path } alt="" width='100px'></img>
                <ul>
                    <li>
                        <h3>Title</h3>
                        <p>ReleaseDate</p>
                    </li>
                    <li></li>
                    <li>
                        <h4>Genres</h4>
                        <p></p>
                    </li>
                    <li>
                        <h4>Overview</h4>
                        <p></p>
                    </li>
                </ul>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to ="reviews">Reviews</Link></li>
                </ul>
            </div>
            ) : (<NotFound/>)}
            <Outlet/>
        </div>
    );
};

export default MovieDetails; 


/*
poster
title
year
score %
overview
genre's


additional info links
*/