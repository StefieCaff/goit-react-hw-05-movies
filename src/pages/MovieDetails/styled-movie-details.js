import styled from 'styled-components';
import { StyledLink } from 'components/Nav/styled-nav';

import { StyledCard } from 'pages/Movies/styled-movies';

const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    
    ul {
        @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
        }
    }
    li {
        margin-bottom: 10px;
        margin-left: 10px;
    }
   
    h4 {
        
        margin-right: 0px;
    }

    p {
        margin-right: 10px;
        color: grey;
        font-size: 14px;
    }
`;

const StyledDetailsCard = styled(StyledCard)`
    margin-bottom: 10px;
    // img {
    //     width: 300px;
    //     border-bottom: .5px solid transparent;
        
    //     @media (min-width: 768px) {
    //         width: 343px;
    //     }
    //     @media (min-width: 1024px) {
    //         width: 310px;
    //     }
    // }

`;

const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 0 20px 0;
    border-bottom: 2px solid #4FB3F3;
    background: linear-gradient(195deg, #61f34f, #4ff38f, #b3f34f);

    @media (min-width: 768px) {
        justify-content: flex-end;
    }
`;
const StyledDetailsLink = styled(StyledLink)`
    margin: 5px 20px;
    font-size: 18px;
    font-weight: 500;
    &:hover,
    &:focus,
    &:active{
    color: #E14FF3;
    }
`;
const StyledDetailsFlex = styled.div`
`
export {
    StyledMovieDetails,
    StyledDetailsCard,
    StyledDetailsLink,
    StyledLinkContainer,
    StyledDetailsFlex
};