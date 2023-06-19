import styled from 'styled-components';

import { Container } from './Container';

const StyledContainer = styled(Container)`
  max-width: 320px;
  margin: 0 10px;
  
  @media screen and (min-width:768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1200px;
  }
`;

const StyledContainerNoMargin = styled(Container)`
    margin: 0;

`
export { StyledContainer, StyledContainerNoMargin };