import { useState, useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { getSearch } from "API/get-search";
import MovieForm from "components/MovieForm/MovieForm";

const Movies = () => {
   const location = useLocation();
    // const backLinkHref = location.state?.from ?? "/";
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    
    const handleSubmit = () => {
         getSearch(search)
            .then(data => {
                setSearchData(data)
            })
        console.log(searchData, 'movies');
    };
    
    console.log(query, 'query');
    
    useEffect(() => {
        if (query === '') return;
        else {
            return setSearch(query);
        };
    }, [query]);


    return (
        <div>
            {/* <Link to={backLinkHref}>Go Back</Link> */}
            <h1>Movie Search</h1>
            <MovieForm onSubmit={ handleSubmit} />
            {searchData.map((data) => (
            
            <Link to={`./${data.id}`} state={ {from: location} } key={ data.id }><h3>{ data.title}</h3></Link>

            ))}
        </div>
    );
};

export default Movies;