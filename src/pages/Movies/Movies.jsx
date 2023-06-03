import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";

import { getSearch } from "API/get-search";
import MovieForm from "components/MovieForm/MovieForm";

const Movies = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    
    console.log(query, 'query');
    
    useEffect(() => {
        if (query === '') return;
        
        getSearch(query)
            .then(data => {
                setSearchData(data)
            })
        console.log(searchData, 'movies');
    }, [query]);


    return (
        <div>
            <Link to={backLinkHref}>Go Back</Link>
            <h1>Movie Search</h1>
            <MovieForm/>
            <Outlet/>
        </div>
    );
};

export default Movies;