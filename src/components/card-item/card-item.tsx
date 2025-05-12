import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function CardItem(): JSX.Element {
  return (
    <div className="card-item card-item--big">
      <Link to={AppRoute.Card} className="card-item__img-link">
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" />
            <img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="241" height="245" alt="Торт голубика." />
          </picture>
        </div>
        <span className="card-item__label">Новинка</span>
      </Link>
      <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like"></use>
        </svg>
      </button>
      <span className="card-item__price">9 300 p</span>
      <Link to={AppRoute.Card} className="card-item__link">
        <h3 className="card-item__title">
          <span>Торт Голубика</span>
        </h3>
      </Link>
    </div>
  );
}

export default CardItem;
