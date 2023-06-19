import styled from 'styled-components';

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        transition: box-shadow, .9s;
        &:hover,
        &:focus{
            box-shadow:
            rgba(240, 46, 170, 0.4) 0px 5px,
            rgba(240, 46, 170, 0.3) 0px 10px,
            rgba(240, 46, 170, 0.2) 0px 15px,
            rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
        }

        @media (min-width: 768px) {
            width: 235px;
        }
        @media (min-width: 1024px) {
            width: 310px;
        }
    }
`;

const StyledTitle = styled.h3`
    margin: 5px;
    font-weight: bold;
    font-size: 18px;

    p {
        font-size: 15px;
        color: #E14FF3;
    }
`;

const StyledHeading = styled.h1`
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: left;
    color: grey;
`

export {
    StyledHome,
    StyledTitle,
    StyledHeading
};