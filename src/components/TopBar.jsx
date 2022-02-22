import React from 'react';
import { Link } from 'react-router-dom';

import './TopBar.css';

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <h1>
          <Link to="/" className="topbar-logo">윌리의 서재</Link>
        </h1>
      </div>
    </header>
  );
}

export default TopBar;
