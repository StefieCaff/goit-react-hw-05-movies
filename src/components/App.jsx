import { Routes } from 'react-router-dom';

import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <NotFound/>
    </div>
  );
};
