import { useSelector } from 'react-redux';
import { getProductsDetails } from '../../store/slices/products-data/products-data-slice';
// import { ProductDetails } from '../../types/types';

import { MAX_STARS_COUNT } from '../../const';
import { useAppDispatch } from '../../store/store';
import { setIsReviewFormButtonClick } from '../../store/slices/reviews-data/reviews-data-slice';
import React from 'react';

const DESCRIPTION_CAUNT_VIEW = 140;

function CardItemsDetailsBlock(): JSX.Element {

  const dispatch = useAppDispatch();

  const cardData = useSelector(getProductsDetails);

  const [isReviewFormOpen, setIsReviewFormOpen] = React.useState(false);

  const handlerReviewFormButtonClick = () => {
    setIsReviewFormOpen(!isReviewFormOpen);
  };

  React.useEffect(() => {
    dispatch(setIsReviewFormButtonClick(isReviewFormOpen));
  }, [isReviewFormOpen, dispatch]);

  if (cardData === null) {
    return <>Loading...</>;
  }

  const {
    description,
    // images,
    isFavorite,
    isNew,
    previewImage,
    previewImageWebp,
    price,
    rating,
    reviewCount,
    title,
    weight } = cardData;

  return (
    <section className="item-details">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">
              {title}
            </h2>
            <span className="item-details__price">{`${price} р`}</span>
          </div>
          <div className="item-details__weight-wrapper">
            <span className="item-details__weight">{`${weight} грамм`}</span>
          </div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source type="image/webp" srcSet={previewImageWebp} />
                <img src={previewImage} width="241" height="245" alt="Чизкейк лимонный" />
              </picture>
              <span className="item-details__label">
                {isNew ? 'Новинка' : ''}
              </span>
            </div>
            <div className="item-details__review-wrapper">
              <div className="star-rating star-rating--big">
                {
                  Array.from({ length: MAX_STARS_COUNT }).map((_, index) => (
                    <svg
                      key={Math.floor(Math.random() * 1000)}
                      className={`star-rating__star ${rating >= (index + 1) ? 'star-rating__star--active' : ''} `}
                      width="30"
                      height="30"
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  ))
                }
                <span className="star-rating__count">{reviewCount}</span>
              </div>
              <div className="item-details__text-wrapper">
                <span className="item-details__text">
                  {description}
                </span>
                {
                  description.length > DESCRIPTION_CAUNT_VIEW
                    ?
                    <button className="item-details__more">
                      <span className="visually-hidden">Читать полностью</span>
                      <svg width="27" height="17" aria-hidden="true">
                        <use xlinkHref="#icon-more"></use>
                      </svg>
                    </button>
                    : ''
                }

              </div>
              <div className="item-details__button-wrapper">
                <button className={`item-details__like-button ${isFavorite ? 'item-details__like-button--active' : ''}`}>
                  <svg width="45" height="37" aria-hidden="true">
                    <use xlinkHref="#icon-like"></use>
                  </svg>
                  <span className="visually-hidden">Понравилось</span>
                </button>
                <button
                  className="btn btn--second"
                  type="button"
                  onClick={handlerReviewFormButtonClick}
                >
                  {isReviewFormOpen ? 'Отменить отзыв' : 'Оставить отзыв'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardItemsDetailsBlock;
