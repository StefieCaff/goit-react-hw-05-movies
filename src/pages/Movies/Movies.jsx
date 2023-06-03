import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { getSearch } from "API/get-search";
import MovieForm from "components/MovieForm/MovieForm";

const Movies = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [searchData, setSearchData] = useState([]);
   // const [search, setSearch] = useState('');

    console.log(query, 'query');
    
    useEffect(() => {
        if (query === '') return;
        
        getSearch(query)
            .then(data => {
                setSearchData(data)
            })
        console.log(searchData, 'movies');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    return (
        <div>
            <Link to={backLinkHref}>Go Back</Link>
            <h1>Movie Search</h1>
            <MovieForm />
            {searchData.map((data, idx) => (
                <h3 key={ idx }>{ data.title}</h3>

            ))}
        </div>
    );
};

export default Movies;