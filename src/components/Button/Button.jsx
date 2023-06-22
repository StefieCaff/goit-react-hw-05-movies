import {useNavigate} from 'react-router-dom';

const GoBackButton = ({className}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
      <div className={className }>
          <button onClick={goBack}>
              Go Back
          </button>
      </div>
  );
};

export default GoBackButton;