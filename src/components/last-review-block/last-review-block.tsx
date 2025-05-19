import { useSelector } from 'react-redux';
import Review from '../review-block/review-block';
import { getLastReview } from '../../store/slices/reviews-data/reviews-data-slice';

function LastReviewBlock(): JSX.Element {

  const lastReview = useSelector(getLastReview);

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        {
          lastReview && <Review {...lastReview} />
        }
      </div>
    </section>
  );
}

export default LastReviewBlock;
