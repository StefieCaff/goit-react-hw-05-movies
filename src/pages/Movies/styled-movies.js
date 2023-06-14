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
        margin-top: 20px;
        
    }
    
    li {
        width: 140px;
        height: 340px;
        background-color: white;
    }

    img {
        width: 140px;
        height: auto;
        margin-bottom: 5px;
    }

    h3 {
        //margin-bottom: 5px;
        padding: 0 5px;
        font-size: 16px;
        font-weight: 500;
    }

    div{
        font-size: 14px;
        color: #E14FF3;
        padding: 0 5px;
    }
`;

export default StyledMovie;