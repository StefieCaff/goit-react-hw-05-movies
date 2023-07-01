import { useLocation } from "react-router-dom";
import { StyledGoBackLink } from "./styled-button";

const GoBackButton = ({ className }) => {
  const location = useLocation();
 
  return (
    <div className={className}>
      <StyledGoBackLink to={location.state.from}>Back</StyledGoBackLink>
    </div>);
};

export default GoBackButton;