
import { func } from 'prop-types';
import { useNavigate, useSearchParams } from "react-router-dom";


const MovieForm = ({onSubmit}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const nav = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query === "") {
            console.log('empty');
            return;
        }
        onSubmit(query);
        nav(`/movies?query=${query}`)
        console.log('Beauty noting');
    };

console.log(query, 'query');
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
        </div>
    );
};

MovieForm.propTypes = {
    onSubmit: func.isRequired,
};

export default MovieForm;

