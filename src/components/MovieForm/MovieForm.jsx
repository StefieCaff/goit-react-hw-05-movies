
import { func } from 'prop-types';
import { useNavigate, useSearchParams } from "react-router-dom";

import StyledForm from './styled-movie-form';

const MovieForm = ({onSubmit}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const nav = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query === "") {
            return;
        }
        onSubmit(query);
        nav(`/movies?query=${query}`)
    };

console.log(query, 'query');
    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='movie search'
                    value={query}
                    onChange={e => setSearchParams({ query: e.target.value })}
                />
                <button aria-label='search'type='submit'></button>
            </StyledForm>
        </div>
    );
};

MovieForm.propTypes = {
    onSubmit: func.isRequired,
};

export default MovieForm;

