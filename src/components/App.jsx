import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { StyledNav } from './Nav/styled-nav';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import ('pages/Home/Home'));
const Movies = lazy(()=> import ('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <StyledNav />
      
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>}
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader />}>
            <Movies />
          </Suspense>}
        />
        <Route
          path='movies/:movieID/'
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>}>
            <Route
            path='cast'
            element={
              <Suspense fallback={<Loader />}>
              <Cast />
            </Suspense>}/>
            <Route
            path='reviews'
            element={
              <Suspense fallback={<Loader />}>
              <Reviews />
            </Suspense>}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </>
  );
};
