import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Nav } from "./Nav";

const StyledNav = styled(Nav)`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding: 25px;
   background: linear-gradient(195deg, #61f34f, #4ff38f, #b3f34f);
   border-bottom: 2px solid #4FB3F3;
`
const StyledLink = styled(NavLink)`
    margin-left: 25px;
    color: #4FB3F3;
    font-size: 20px;
    font-weight: 700;

    &:hover{
    color: #E14FF3;
    }
`
export { StyledNav, StyledLink };