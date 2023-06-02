import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from './NotFound/NotFound';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path='movies/:movieID' element={<MovieDetails/> }>
            <Route path='cast' element={<Cast/> }/>
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
