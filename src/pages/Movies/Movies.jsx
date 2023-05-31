import { Link, useLocation } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    return (
        <div>
            <h1>Movies</h1>
            <Link to={backLinkHref}>Go Back</Link>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to ="reviews">Reviews</Link></li>
            </ul>
        </div>
    );
};

export default Movies;