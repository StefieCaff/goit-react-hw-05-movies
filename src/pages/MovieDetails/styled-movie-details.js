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
            margin-left: 20px;
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
   
`

const StyledFlexContainer = styled.div`
    margin-top: 20px;
    display: flex;

`
const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
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
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    @media (min-width: 1024px) {
        margin-left: 20px;
    }

`
export {
    StyledMovieDetails,
    StyledDetailsCard,
    StyledDetailsLink,
    StyledLinkContainer,
    StyledDetailsFlex,
    StyledFlexContainer
};