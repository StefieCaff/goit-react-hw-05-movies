import { StyledGoBackLink } from "./styled-button";
import { useLocation } from "react-router-dom";
const GoBackButton = ({ className }) => {
  const location = useLocation();
  return (
    <div className={className}>
      <StyledGoBackLink to={location.state.from} state={{ from: location.pathname }}>Back</StyledGoBackLink>
    </div>);
};

export default GoBackButton;