import React from 'react';

import { MAX_STARS_COUNT } from '../../const';
import { useAppDispatch } from '../../store/store';
import { postReview } from '../../store/api-actions';

const REVIEW_MIN_LENGTH = 5;
const REVIEW_MAX_LENGTH = 500;

type ReviewFormProps = {
  id: string;
}

function ReviewForm({ id }: ReviewFormProps): JSX.Element {

  // console.log('ReviewForm - UPDATE');

  const dispatch = useAppDispatch();

  const [isFormButtonDisabled, setIsFormButtonDisabled] = React.useState<boolean>(true);

  const [inputStarValue, setInputStarValue] = React.useState<number | null>(null);

  // const [isInputStarCheked, setIsInputStarChecked] = React.useState<boolean>(false);

  const [isPositiveInputReviewRequired, setIsPositiveInputReviewRequired] = React.useState<boolean>(true);
  const [isNegativeInputReviewRequired, setIsNegativeInputReviewRequired] = React.useState<boolean>(true);

  const [positiveReviewLength, setPositiveReviewLength] = React.useState<number>(0);
  const [negativeReviewLength, setNegativeReviewLength] = React.useState<number>(0);

  const starRatingRef = React.useRef<HTMLDivElement>(null);

  const positiveReviewInputRef = React.useRef<HTMLInputElement>(null);
  const negativeReviewInputRef = React.useRef<HTMLInputElement>(null);

  const reviewFormRef = React.useRef<HTMLFormElement>(null);

  const isChecked = (index: number): boolean => (index + 1) === inputStarValue;

  // const handleButtonClick = (evt: React.MouseEvent<HTMLButtonElement>): void => {
  //   console.log(evt.target);
  // };

  const handlerStarInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setInputStarValue(Number(evt.target.value));
  };

  const handlerPositiveReviewInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPositiveReviewLength(evt.target.value.length);
    // console.log(positiveReviewInputRef.current?.validity.valid);
  };

  const handlerNegativeReviewInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setNegativeReviewLength(evt.target.value.length);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    // const formData = new FormData(reviewFormRef.current);

    //                                                         //
    // https://www.webdevtutor.net/blog/typescript-useref-form //
    //                                                         //

    if (positiveReviewInputRef.current && negativeReviewInputRef.current && inputStarValue) {
      dispatch(
        postReview({
          id,
          advantages: positiveReviewInputRef.current.value,
          disadvantages: negativeReviewInputRef.current?.value,
          'input-star-rating': inputStarValue,
        }));
    }
    // console.log('data = ', Object.fromEntries(formData));
  };

  React.useEffect(() => {
    if (inputStarValue !== null && inputStarValue <= 3) {
      setIsNegativeInputReviewRequired(true);
      setIsPositiveInputReviewRequired(false);
    } else if (inputStarValue !== null && inputStarValue > 3) {
      setIsNegativeInputReviewRequired(false);
      setIsPositiveInputReviewRequired(true);
    }

    if (inputStarValue
      && positiveReviewInputRef.current?.validity.valid
      && negativeReviewInputRef.current?.validity.valid) {
      setIsFormButtonDisabled(false);
    } else {
      setIsFormButtonDisabled(true);
    }

  }, [inputStarValue, negativeReviewInputRef.current?.validity.valid, positiveReviewInputRef.current?.validity.valid]);

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form
              ref={reviewFormRef}
              action="#"
              method="post"
              autoComplete="off"
              encType="multipart/form-data"
              onSubmit={handleFormSubmit}
            >
              <div className="review-form__inputs-wrapper">
                <div className="custom-input" style={{ marginBottom: '11px' }}>
                  <label>
                    <span className="custom-input__label">
                      Достоинства
                    </span>
                    <input
                      ref={positiveReviewInputRef}
                      type="text"
                      name="advantages"
                      placeholder="Достоинства"
                      minLength={REVIEW_MIN_LENGTH}
                      maxLength={REVIEW_MAX_LENGTH}
                      required={isPositiveInputReviewRequired}
                      onChange={handlerPositiveReviewInputChange}
                    />
                  </label>
                </div>
                <div style={{ marginBottom: '90px' }}>
                  Осталось символов: {REVIEW_MAX_LENGTH - positiveReviewLength}
                </div>
                <div className="custom-input" style={{ marginBottom: '11px' }}>
                  <label>
                    <span className="custom-input__label">
                      Недостатки
                    </span>
                    <input
                      ref={negativeReviewInputRef}
                      type="text"
                      name="disadvantages"
                      placeholder="Недостатки"
                      minLength={REVIEW_MIN_LENGTH}
                      maxLength={REVIEW_MAX_LENGTH}
                      required={isNegativeInputReviewRequired}
                      onChange={handlerNegativeReviewInputChange}
                    />
                  </label>
                </div>
                <div style={{ marginBottom: '90px' }}>
                  Осталось символов: {REVIEW_MAX_LENGTH - negativeReviewLength}
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating" ref={starRatingRef}>
                    {
                      Array.from({ length: MAX_STARS_COUNT }).map((_, index) => (
                        <>
                          <input
                            key={Math.floor(Math.random() * 50000)}
                            type="radio"
                            name="input-star-rating"
                            id={`input-star-rating-${index + 1}`}
                            value={index + 1}
                            aria-label={`${index + 1} звезд`}
                            onChange={handlerStarInputChange}
                            checked={isChecked(index)}
                          />
                          <label htmlFor={`input-star-rating-${index + 1}`}>
                            <svg width="40" height="40" aria-hidden="true">
                              <use xlinkHref="#icon-star"></use>
                            </svg>
                          </label>
                        </>
                      )).reverse()
                    }
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button
                    className="btn review-form__button"
                    type="submit"
                    disabled={isFormButtonDisabled}
                  // onClick={handleButtonClick}
                  >
                    Отправить отзыв
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ReviewForm);
