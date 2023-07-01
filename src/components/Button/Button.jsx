// import {useNavigate} from 'react-router-dom';

// const GoBackButton = ({className}) => {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//       <div className={className }>
//           <button onClick={goBack}>
//               Go Back
//           </button>
//       </div>
//   );
// };

import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
const GoBackButton = ({ className }) => {
  const location = useLocation();
  // const {} = useParams();
  // const backLinkHref = {location.state.from};

  return <div className={className}><Link to={location.state.from}>Back</Link></div>;
}

export default GoBackButton;

// const ProductDetails = () => {
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? "/products";

//   return <Link to={backLinkHref}>Back to products</Link>;
// };