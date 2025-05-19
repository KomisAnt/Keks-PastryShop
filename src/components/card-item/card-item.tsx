import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Product } from '../../types/types';

type CardItemProps = Product & {
  currentClass: string;
}

function CardItem({
  id,
  isFavorite,
  isNew,
  previewImage,
  previewImageWebp,
  price,
  title,
  currentClass
}: CardItemProps): JSX.Element {

  return (
    <li className={currentClass}>
      <div className="card-item card-item--big">
        <Link to={`${AppRoute.Card}/${id}`} className="card-item__img-link">
          <div className="card-item__img-wrapper">
            <picture>
              <source
                type="image/webp"
                srcSet={previewImageWebp}
              />
              <img src={previewImage} width="241" height="245" alt="Торт голубика." />
            </picture>
          </div>

          {
            isNew && <span className="card-item__label">Новинка</span>
          }

        </Link>
        <button className={`card-item__favorites ${isFavorite ? 'card-item__favorites--active' : ''} `} >
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button>
        {
          currentClass !== 'random-main__item'
            ? <span className="card-item__price">{price} p</span>
            : ''
        }

        <Link to={`${AppRoute.Card}/${id}`} className="card-item__link">
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </Link>
      </div>
    </li>
  );
}

export default CardItem;
