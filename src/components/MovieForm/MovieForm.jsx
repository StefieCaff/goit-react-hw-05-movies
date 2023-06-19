
import { func } from 'prop-types';
import { useNavigate, useSearchParams } from "react-router-dom";

import StyledForm from './styled-movie-form';
import { StyledSection } from 'components/Section/styled-section';
import { StyledContainer } from 'components/Container/styled-container';
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
        <StyledSection>
            <StyledContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='movie search'
                        value={query}
                        onChange={e => setSearchParams({ query: e.target.value })}
                    />
                    <button aria-label='search'type='submit'></button>
                </StyledForm>
            </StyledContainer>
        </StyledSection>
    );
};

MovieForm.propTypes = {
    onSubmit: func.isRequired,
};

export default MovieForm;

