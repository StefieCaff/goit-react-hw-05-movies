import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import { getMovie } from "API/get-movie";
import { IMAGE_URL } from "API/api-params";

import NotFound from "pages/NotFound/NotFound";
import { StyledSection } from "components/Section/styled-section";
import { StyledDetailsFlex, StyledDetailsLink, StyledLinkContainer, StyledMovieDetails, StyledFlexContainer } from "./styled-movie-details";
import { StyledTitle } from "pages/Home/styled-home";
import { StyledContainer } from "components/Container/styled-container";
import { StyledDetailsCard } from "./styled-movie-details";

const MovieDetails = () => {
    const { movieID } = useParams();
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        let mounted = true;
        getMovie(movieID)
            .then(data => {
                if (mounted) {
                    setMovieData(data)
                };
            }); 
        return () => mounted = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const genres = movieData.genres;
    return (
        <StyledSection>
            {movieData ? (
            <>
            <StyledContainer>
                <StyledFlexContainer>        
                    <StyledDetailsCard>
                        <img src={ movieData.poster_path
                            ? IMAGE_URL + movieData.poster_path
                            : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                            }
                            alt={movieData.title ? movieData.title : 'Title coming soon'}
                        />
                        <StyledTitle>{movieData.title
                            ? movieData.title  
                            : movieData.original_title
                            }
                            <p>{movieData.release_date
                                ? new Date(movieData.release_date).getFullYear()
                                : '---'
                                }
                            </p> 
                        </StyledTitle>                               
                    </StyledDetailsCard>
                    <StyledMovieDetails>
                        <ul>
                            <li>
                                <h4>Genres</h4>
                                    {movieData.genres
                                        ? genres.map((genre) => (<p key={genre.id}>{genre.name} </p>))
                                        : <p>Unrecorded genre</p>
                                    }
                            </li>
                            <li>
                                <h4>Original Language</h4>
                                <p>{movieData.original_language}</p>
                            </li>
                            <li>
                                <h4>Run Time</h4>
                                <p>{movieData.runtime}</p>
                            </li>
                            <li>
                                <h4>Votes</h4>
                                <p>{movieData.vote_count}</p>
                            </li>
                        </ul>
                        <StyledDetailsFlex>
                            <h4>Overview</h4>
                            <p>{movieData.overview}</p>
                        </StyledDetailsFlex>
                    </StyledMovieDetails>
                    </StyledFlexContainer>
            </StyledContainer>
            <StyledLinkContainer>
                <StyledDetailsLink to="cast">Cast</StyledDetailsLink>
                    <StyledDetailsLink to ="reviews">Reviews</StyledDetailsLink>
            </StyledLinkContainer>
            </>
            ) : (<NotFound />)}
            <StyledContainer>
                <Outlet />
            </StyledContainer>
        </StyledSection>
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