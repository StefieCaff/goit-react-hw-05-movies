import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { getMovie } from "API/get-movie";




const Movies = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

//     const { movieID } = useParams;
//     const [movieData, setMovieData] = useState([]);
//     console.log(movieId);

//  useEffect(() => {
//         let mounted = true;
        
//         getMovie(movieID)
//             .then(data => {
//                 if (mounted) {
//                     setMovieData(data)
//                 }
//             });
//         console.log(movieData, 'movie');
//         return () => mounted = false;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);


    return (
        <div>
            <Link to={backLinkHref}>Go Back</Link>
            <h1>Movies</h1>
        </div>
    );
};

export default Movies;