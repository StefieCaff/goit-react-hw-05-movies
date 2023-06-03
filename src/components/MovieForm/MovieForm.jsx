
//import { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";


const MovieForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const nav = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        nav(`/movies?query=${query}`)
        console.log('Beauty noting');

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={query}
                    onChange={e => setSearchParams({ query: e.target.value })}
                />
                <button type='submit'>Search</button>
            </form>
            <Outlet />
        </div>
    );
};

// MovieForm.propTypes = {
//     setQuery: func.isRequired,
// };

export default MovieForm;

