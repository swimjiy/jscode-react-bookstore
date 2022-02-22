import React from 'react';
import { Link } from 'react-router-dom';

import './CardItem.css';

const CardItem = ({ item }) => {
  return (
    <li>
      <Link to={`/books/${item.isbn.split(' ')[0]}`} className="card-item">
        <div className="card-item-img">
          <img src={item.thumbnail.replace('R120x174', 'C232x336')} alt="책 커버"/>
        </div>
        <div className="card-item-content">
          <strong className="card-item-title">{item.title}</strong>
          <span className="card-item-author">{item.authors[0]}</span>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
