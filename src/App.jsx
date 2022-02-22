import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopBar from './components/TopBar';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="books/:bookId" element={<DetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
