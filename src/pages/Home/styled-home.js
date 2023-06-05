import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledHome = styled.div`
    display: flex;
    margin: 0 10px 0 10px;
     @media (min-width: 768px) {
            margin: 0 15px 0 16px;
        }
         @media (min-width: 1024px) {
            margin: 10px 25px 0 25px;
        }
    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        @media (min-width: 768px) {
            gap: 15px;
        }
        @media (min-width: 1024px) {
            gap: 20px;
        }
    }
    li {
        width: 300px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        @media (min-width: 768px) {
            width: 235px;
        }
        @media (min-width: 1024px) {
            width: 310px;
        }
    }
    img{
        width; 300px;

        @media (min-width: 768px) {
            width: 235px;
        }
        @media (min-width: 1024px) {
            width: 310px;
        }
`;

const StyledLinkTitle = styled(NavLink)`
    background-color: blue;
`;
const StyledTitle = styled.p`
    height: 71px;
    padding: 5px;
    color: #4FB3F3;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    background-color: #fff;
`;
export {
    StyledHome,
    StyledLinkTitle,
    StyledTitle
};