import styled from 'styled-components';
import { StyledLink } from 'components/Nav/styled-nav';


const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    img {
        width: 300px;
        border-bottom: .5px solid transparent;
        @media (min-width: 768px) {
            width: 235px;
        }
        @media (min-width: 1024px) {
            width: 310px;
        }
    }

    h4 {
        margin: 5px;
    }

    div {
        color: #E14FF3;
        font-size: 16px;
    }
    p {
        margin: 0px 10px;
        color: grey;
    }
`;
const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 2px solid #4FB3F3;
    background: linear-gradient(195deg, #61f34f, #4ff38f, #b3f34f);
`;
const StyledDetailsLink = styled(StyledLink)`
    margin: 5px 20px;
    font-size: 18px;
    font-weight: 500;
    &:hover,
    &:focus,
    &:active{
    color: #E14FF3;
    box-shadow: none;
    }
`;

export {
    StyledMovieDetails,
    StyledDetailsLink,
    StyledLinkContainer
};