//import { Link } from 'react-router-dom';
import Cave from '../../images/cave-of-wonders.jpg';

const NotFound = () => {

    return (
        <div>
            <h1>Sorry, something went wrong...</h1>
            <img src={Cave} alt=""></img>
            {/* <p>please navigate back to the{" "}
                <Link to="/">Home </Link>page or to the{" "}
                <Link to="/Movies">Movie Search </Link>page. 
            </p> */}


        </div>
    )
};

export default NotFound;