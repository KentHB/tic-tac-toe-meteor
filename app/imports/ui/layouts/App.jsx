import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicTacToe from '../pages/TicTacToe';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<TicTacToe />} />
    </Routes>
  </Router>
);

export default App;
