import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { IMAGE_URL } from "API/api-params";

import { getSearch } from "API/get-search";
import MovieForm from "components/MovieForm/MovieForm";
import {StyledMovie, StyledCard} from "./styled-movies";
import { StyledTitle } from "pages/Home/styled-home";
import { StyledSection } from "components/Section/styled-section";
import { StyledContainer } from "components/Container/styled-container";
import NotFound from "pages/NotFound/NotFound";

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

    useEffect(() => {
        if (query === '') return;
        else {
            return setSearch(query);
        };
    }, [query]);


    return (
        <StyledSection>
            <StyledContainer>
            <StyledMovie>
                <h1>Movie Search</h1>
                <MovieForm onSubmit={handleSubmit} />
                <ul>
                    {searchData.map((data, idx) => (
                        <li key={idx}>
                            <Link to={`./${data.id}`} >
                                <StyledCard>
                                    <img src={ data.poster_path
                                        ? IMAGE_URL + data.poster_path
                                        :'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                                        }
                                        alt={data.title ? data.title : 'Title coming soon'}
                                    />
                                    <StyledTitle>
                                        <h3>{data.title
                                            ? data.title  
                                            : data.original_title
                                        }
                                        </h3>
                                        <p>{data.release_date
                                            ? new Date(data.release_date).getFullYear()
                                            : '---'
                                            }
                                        </p>
                                    </StyledTitle>
                                </StyledCard>
                            </Link>
                        </li>
                    ))}
                </ul>
            </StyledMovie>
            </StyledContainer>
        </StyledSection>
    );
};

export default Movies;