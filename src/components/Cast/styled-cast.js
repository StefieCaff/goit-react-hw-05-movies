import styled from "styled-components";

const StyledCast = styled.div`
    display: flex;
    margin: 0 10px 0 10px;
    
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }

    li {
        width: 140px;
        background-color: white;
    }

    img{
        width: 140px;
        height: auto;
        margin-bottom: 5px;
    }

    h3 {
        margin-bottom: 5px;
        padding: 0 5px;
    }
    p {
        margin-bottom: 5px;
        padding: 0 5px;
        color: grey;
    }
`

export default StyledCast;