import { StyledGoBackLink } from "./styled-button";

const GoBackButton = ({ className }) => {
   
  return (
    <div className={className}>
      <StyledGoBackLink>Back</StyledGoBackLink>
    </div>);
};

export default GoBackButton;