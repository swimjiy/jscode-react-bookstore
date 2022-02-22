import React from 'react';

import './CardList.css';
import CardItem from './CardItem';

const CardList = ({ bookList }) => {
  return (
    <ul className="card-list">
      {bookList.map((bookItem) => (
        <CardItem key={bookItem.url} item={bookItem} />
      ))}
    </ul>
  );
}

export default CardList;
