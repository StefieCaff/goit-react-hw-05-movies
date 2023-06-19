import { useState, useEffect } from "react";


import { getTrending } from "API/get-trending";
import { IMAGE_URL } from "API/api-params";
import { StyledHeading, StyledHome, StyledTitle } from "./styled-home";
import { StyledSection } from "components/Section/styled-section";
import { StyledContainer } from "components/Container/styled-container";
import { Link } from "react-router-dom";
import { StyledCard } from "pages/Movies/styled-movies";

const Home = () => {
    const [trendingData, setTrendingData] = useState([]);
    useEffect(() => {
        let mounted = true;

        getTrending()
            .then(data => {
                if (mounted) {
                    setTrendingData(data);
                } 
            });
        
        return () => mounted = false;
    //getting error calling for trendingMovies to be in dependency array or removal of array. Either of these options cause an infinite loop, so I officially ignored the error.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledSection>
            <StyledContainer>
                <StyledHeading>Today's Trending Movies</StyledHeading>
                    <StyledHome>
                    <ul>
                    {trendingData.map((movie, idx) => (
                        <li key={idx}>
                            <Link to={`./movies/${movie.id}`}>
                                <StyledCard>
                                <img src={IMAGE_URL + movie.poster_path} alt=""/>
                                
                            
                            <StyledTitle>{movie.title
                                ? movie.title  
                                : movie.original_title
                            }<p>{movie.release_date
                                ? new Date(movie.release_date).getFullYear()
                                : '---'
                                }
                            </p> 
                                    </StyledTitle>
                                </StyledCard>
                            </Link>
                        </li>
                    ))}
                </ul>
        </StyledHome></StyledContainer></StyledSection>
    );
};

export default Home;