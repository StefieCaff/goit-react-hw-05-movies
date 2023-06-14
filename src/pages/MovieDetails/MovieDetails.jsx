import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import { getMovie } from "API/get-movie";
import { IMAGE_URL } from "API/api-params";

import NotFound from "pages/NotFound/NotFound";
import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import { StyledDetailsLink, StyledLinkContainer, StyledMovieDetails } from "./styled-movie-details";
import { StyledTitle } from "pages/Home/styled-home";

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
        <Section>
            <Container>
                {movieData ? (
            <>
                <StyledMovieDetails>
                    <ul>
                        <li>
                            <img src={ movieData.poster_path
                                ? IMAGE_URL + movieData.poster_path
                                :'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                                }
                                alt={movieData.title ? movieData.title : 'Title coming soon'}
                            />
                        </li>
                        <li>
                            <StyledTitle>{movieData.title
                                ? movieData.title  
                                : movieData.original_title
                                    }
                                <div>{movieData.release_date
                                    ? new Date(movieData.release_date).getFullYear()
                                    : '---'
                                }
                                </div> 
                            </StyledTitle>                               
                        </li>
                        <li>
                            <h4>Votes:</h4>
                            <p>{movieData.vote_count}</p>
                        </li>
                        <li>
                            <h4>Genres</h4>
                                {movieData.genres
                                    ? genres.map((genre) => (<p key={genre.id}>{genre.name} </p>))
                                    : <p>Unrecorded genre</p>
                                }
                        </li>
                        <li>
                            <h4>Overview</h4>
                                    <p>{ movieData.overview}</p>
                        </li>
                    </ul>
                </StyledMovieDetails>
                <StyledLinkContainer>
                    <StyledDetailsLink to="cast">Cast</StyledDetailsLink>
                    <StyledDetailsLink to ="reviews">Reviews</StyledDetailsLink>
                </StyledLinkContainer>
            </>
            ) : (<NotFound />)}
            
                <Outlet />
            </Container>
        </Section>
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