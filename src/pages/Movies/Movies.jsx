import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { IMAGE_URL } from "API/api-params";

import { getSearch } from "API/get-search";
import MovieForm from "components/MovieForm/MovieForm";
import StyledMovie from "./styled-movies";

const Movies = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState('');
    
    const handleSubmit = () => {
         getSearch(search)
            .then(data => {
                setSearchData(data)
            })
    };
      console.log(searchData);
    useEffect(() => {
        if (query === '') return;
        else {
            return setSearch(query);
        };
    }, [query]);


    return (
        <StyledMovie>
            <h1>Movie Search</h1>
            <MovieForm onSubmit={handleSubmit} />
            <ul>
                {searchData.map((data, idx) => (
                    <Link to={`./${data.id}`} key={idx}>
                        <li>
                            <img src={ data.poster_path
                                ? IMAGE_URL + data.poster_path
                                :'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                                }
                                alt={data.title ? data.title : 'Title coming soon'}
                            />
                            <h3>{data.title}</h3>
                            <div>{data.release_date
                                    ? new Date(data.release_date).getFullYear()
                                    : '---'
                                }
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </StyledMovie>
    );
};

export default Movies;