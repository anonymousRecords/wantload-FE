import React from 'react';
// import Puzzle from './components/Puzzle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
