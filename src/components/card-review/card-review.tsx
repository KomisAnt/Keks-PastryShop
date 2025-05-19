import { MAX_STARS_COUNT } from '../../const';
import { Review } from '../../types/types';

type CardReviewProps = Review;

const getDateTimeReview = (isoDate: string): string => {
  const date = new Date(isoDate);
  const currentDay = date.getDay();
  const currentMonth = date.getMonth();

  return (`${currentDay < 10 ? `0${currentDay}` : currentDay}.${currentMonth < 10 ? `0${currentMonth}` : currentMonth}`);
};

function CardReview({ isoDate, negative, positive, rating, user }: CardReviewProps): JSX.Element {

  return (
    <div className="review">
      <div className="review__inner-wrapper review__inner-wrapper--border">
        <time className="review__date" dateTime="2023-05-15">{getDateTimeReview(isoDate)}</time>
        <span className="review__author">Уважаемый(-ая) {user.name}</span>
        <div className="star-rating">
          {
            Array.from({ length: MAX_STARS_COUNT }).map((_, index) => (
              <svg
                key={index}
                className={`star - rating__star ${rating >= (index + 1) ? 'star-rating__star--active' : ''} `}
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            ))
          }
        </div>
        <div className="review__text-wrapper">
          <p className="review__text">
            {
              `${rating > 3 ? positive : negative} `
            }
          </p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x" />
            <img src={user.avatarUrl} width="162" height="162" alt="Кот" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
