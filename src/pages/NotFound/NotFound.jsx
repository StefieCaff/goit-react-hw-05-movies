import Cave from '../../images/cave-of-wonders.jpg';


import StyledNotFound from './styled-not-found';
import StyledGoBack from 'components/Button/styled-button';
import { StyledSection } from 'components/Section/styled-section';
import { StyledContainer } from 'components/Container/styled-container';

const NotFound = () => {

    return (
        
        <StyledSection>
            <StyledContainer>
                <StyledNotFound>
                    <h1>Sorry, something went wrong. Please navigate back and try again.</h1>
                    <img src={Cave} alt=""></img>
                    <StyledGoBack />
                 </StyledNotFound>
            </StyledContainer>
        </StyledSection>


    )
};

export default NotFound;