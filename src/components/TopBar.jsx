import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './TopBar.css';

const TopBar = ({ bookData }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('');
  const filteredData = bookData.filter((book) => book.title.includes(value));
  const handleClick = ((id) => {
    navigate(`/books/${id}`)
    setValue('');
  })
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <h1>
          <Link to="/" className="topbar-logo">윌리의 서재</Link>
        </h1>
        <div className="topbar-search-wrapper">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="topbar-search-form"
            placeholder="책 이름을 입력하세요"
          />
          {value !== '' && (
            <ul className="topbar-search-list">
              {filteredData.map((item) => (
                <li
                  key={item.url}
                  className="topbar-search-listitem"
                  onClick={() => handleClick(item.isbn)}
                >
                  <Link to={`/books/${item.isbn}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopBar;
