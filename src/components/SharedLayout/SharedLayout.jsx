import { Link, Outlet } from "react-router-dom";

const SharedLayout = () => {

    return (
        <div>
            <h1>Header Nav</h1>
            <nav>
                <Link to="/">Home</Link>{' '}
                <Link to="/movies">Movies</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default SharedLayout;