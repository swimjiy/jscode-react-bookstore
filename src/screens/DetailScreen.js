import './DetailScreen.css';
import CardList from '../components/CardList';
import book1 from '../images/img-book2.jpeg';
import bookmark from '../images/icon-bookmark.svg';

const DetailScreen = () => {
  return (
    <div className="detail-container">
      <div className="detail-book">
        <div className="detail-book-img">
          <img src={book1} alt="책 커버"/>
        </div>
        <div className="detail-book-content">
          <h2>
            <a href="#" className="detail-book-title">
              우리가 빛의 속도로 갈 수 없다면
            </a>
          </h2>
          <span className="detail-book-author">이임복</span>
          <p className="detail-book-desc">
            지난겨울까지 바이오센서를 만드는 과학도였던 김초엽 작가는, 이제 소설을 쓴다. 어디에도 없는 그러나 어딘가에 있을 것 같은, 상상의 세계를 특유의 분위기로 손에 잡힐 듯 그려내며, 정상과 비정상, 성공과 실패, 주류와 비주류의 경계를 끊임없이 질문해온 신인 소설가 김초엽. 그의 첫 소설집 '우리가 빛의 속도로 갈 수 없다면'이 출간되었다.
          </p>
          <button className="detail-book-btn">
            <img src={bookmark} alt="북마크" className="detail-book-btn-icon"/>
            북마크하기
          </button>
        </div>
      </div>
      <div className="detail-other">
        <h2 className="detail-title">다른 책도 보기</h2>
        <CardList />
      </div>
    </div>
  );
}

export default DetailScreen;
