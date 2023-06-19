import styled from "styled-components";

const StyledMovie = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

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
        justify-content: center;
        gap: 10px;
        @media(min-width:768px) {
            gap: 20px;
        }   
    }
`;

const StyledCard = styled.div`
    padding-bottom: 5px;
    background-color: #fff;

     img {
        width: 300px;
        height: auto;
        margin-bottom: 5px;
        border-bottom: .5px solid #F4F5FF;;
        @media(min-width:768px) {
            width: 300px;
            height: 425px;
        }
    }
    
`;

export {
    StyledMovie,
    StyledCard
};