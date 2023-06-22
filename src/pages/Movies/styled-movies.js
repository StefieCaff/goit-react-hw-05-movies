import styled from "styled-components";

const StyledMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 26px;

    h1 {
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    ul {
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
`;

const StyledCard = styled.div`
    margin-bottom: 10px;
    padding-bottom: 5px;
    background-color: #fff;
    height: 100%; 
    
    img {
        width: 300px;
        height: auto;
        margin-bottom: 5px;
        border-bottom: .5px solid #F4F5FF;
        
        @media(min-width:768px) {
            width: 350px;
            height: 525px;
        }
        @media (min-width: 1024px) {
            width: 310px;
            height: 465px;
        }

    }
    
`;

export {
    StyledMovie,
    StyledCard
};