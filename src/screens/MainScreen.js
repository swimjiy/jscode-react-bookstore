import './MainScreen.css';
import CardList from '../components/CardList';

const MainScreen = () => {
  return (
    <div className="main-container">
      <h2 className="main-title">전체 책 목록</h2>
      <CardList />
    </div>
  );
}

export default MainScreen;
