import React from 'react';
import { useParams } from 'react-router-dom';

import './DetailScreen.css';
import CardList from '../components/CardList';
import BookmarkButton from '../components/BookmarkButton';

const DetailScreen = ({ bookData }) => {
  const { bookId } = useParams();
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const currentBookData = bookData.find((book) => book.isbn.includes(bookId));
  const otherBooksData = bookData.filter((book) => book.isbn !== currentBookData.isbn)
  React.useEffect(() => {
    if (bookId) {
      setIsBookmarked(false);
    }
  }, [bookId]);
  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
  };
  if (currentBookData === undefined) return null;
  return (
    <div className="detail-container">
      <div className="detail-book">
        <div className="detail-book-img">
          <img src={currentBookData.thumbnail.replace('R120x174', 'C232x336')} alt="책 커버"/>
        </div>
        <div className="detail-book-content">
          <h2>
            <a
              href={currentBookData.url}
              target="_blank"
              rel="noreferrer noopener"
              className="detail-book-title"
            >
              {currentBookData.title}
            </a>
          </h2>
          <span className="detail-book-author">{currentBookData.author}</span>
          <p className="detail-book-desc">
            {currentBookData.contents}
          </p>
          <BookmarkButton isBookmarked={isBookmarked} handleClick={handleClick} />
        </div>
      </div>
      <div className="detail-other">
        <h2 className="detail-title">다른 책도 보기</h2>
        <CardList bookList={otherBooksData} />
      </div>
    </div>
  );
}

export default DetailScreen;
