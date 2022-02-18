import React from 'react';

import './TopBar.css';

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <h1>
          <a href="/" className="topbar-logo">윌리의 서재</a>
        </h1>
      </div>
    </header>
  );
}

export default TopBar;
