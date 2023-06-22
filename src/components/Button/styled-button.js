import styled from 'styled-components';

import GoBackButton from './Button';

const StyledGoBack = styled(GoBackButton)`
    display: flex;
    justify-content: flex-end;
    
    button{
        margin-bottom: 15px;
        margin-right: 10px;
        padding: 10px 10px 0 5px;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #4FB3F3;
        background: transparent;
        transition: box-shadow, .9s;
    
        &:hover,
        &:focus{
            outline: none;
            box-shadow: 
                rgba(240, 46, 170, 0.4) 0px 5px, 
                rgba(240, 46, 170, 0.3) 0px 10px, 
                rgba(240, 46, 170, 0.2) 0px 15px,
                rgba(240, 46, 170, 0.1) 0px 20px,
                 rgba(240, 46, 170, 0.05) 0px 25px;
        }
    }
`;

export default StyledGoBack
