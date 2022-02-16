import './CardItem.css';
import book1 from '../images/img-book1.jpeg';

const CardItem = () => {
  return (
    <li>
      <a href="#" className="card-item">
        <div className="card-item-img">
          <img src={book1} alt="책 커버"/>
        </div>
        <div className="card-item-content">
          <strong className="card-item-title">NFT 디지털 자산의 미래</strong>
          <span className="card-item-author">이임복</span>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
