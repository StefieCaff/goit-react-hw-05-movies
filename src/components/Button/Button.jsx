import {useHistory} from 'react';

const GoBackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button onClick={goBack}>Go Back</button>
  );
};

export default GoBackButton;