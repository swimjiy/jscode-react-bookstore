import React from 'react';

import './BookmarkButton.css';
import bookmarkIcon from '../images/icon-bookmark.svg';
import filledBookmarkIcon from '../images/icon-bookmark-filled.svg';

const BookmarkButton = () => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <button
      onClick={handleClick}
      className={`detail-book-btn ${isBookmarked ? 'active' : undefined}`}
    >
      <img
        src={isBookmarked ? filledBookmarkIcon : bookmarkIcon}
        alt="북마크"
        className="detail-book-btn-icon"
      />
      {isBookmarked ? "북마크 완료!" : "북마크하기"}
    </button>
  );
}

export default BookmarkButton;
