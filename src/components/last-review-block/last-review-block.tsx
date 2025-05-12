import Review from '../review/review';

function LastReviewBlock(): JSX.Element {
  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        <Review />
      </div>
    </section>
  );
}

export default LastReviewBlock;
