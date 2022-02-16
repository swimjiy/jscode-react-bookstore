import './MainScreen.css';
import CardList from '../components/CardList';
import bookData from '../data/bookData.json';

const MainScreen = () => {
  return (
    <div className="main-container">
      <h2 className="main-title">전체 책 목록</h2>
      <CardList bookList={bookData.data} />
    </div>
  );
}

export default MainScreen;
