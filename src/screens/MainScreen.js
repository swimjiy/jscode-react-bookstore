import React from 'react';

import './MainScreen.css';
import CardList from '../components/CardList';

const MainScreen = ({ bookData }) => {
  return (
    <div className="main-container">
      <h2 className="main-title">전체 책 목록</h2>
      <CardList bookList={bookData} />
    </div>
  );
}

export default MainScreen;
