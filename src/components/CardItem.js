import './CardItem.css';

const CardItem = ({ item }) => {
  return (
    <li>
      <a href="#" className="card-item">
        <div className="card-item-img">
          <img src={item.thumbnail} alt="책 커버"/>
        </div>
        <div className="card-item-content">
          <strong className="card-item-title">{item.title}</strong>
          <span className="card-item-author">{item.author}</span>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
