import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderNotAuthtorized from '../../components/header-not-authtorized/header-not-authtorized';
import BackLinkBlock from '../../components/back-link-block/back-link-block';
import CardItemsDetailsBlock from '../../components/card-items-details-block/card-items-details-block';
import FilterSort from '../../components/filter-sort/filter-sort';
import ReviewsBlock from '../../components/reviews-block/reviews-block';
import ReviewsEmptyResults from '../../components/reviews-empty-results/reviews-empty-results';

import { useAppDispatch } from '../../store/store';
import { fetchProductDetails, fetchReviews } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getProductsDetails } from '../../store/slices/products-data/products-data-slice';
import { getReviews } from '../../store/slices/reviews-data/reviews-data-slice';


function CardPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const params = useParams();

  React.useEffect(() => {
    const { id } = params;
    if (id !== undefined) {
      dispatch(fetchProductDetails(id));
      dispatch(fetchReviews(id));
    }
    window.scroll(0, 0);
  }, [params]);

  const reviews = useSelector(getReviews);

  return (
    <>
      <HeaderNotAuthtorized />
      <main>
        <BackLinkBlock />
        <CardItemsDetailsBlock />
        {
          reviews && reviews.length > 0
            ?
            <>
              <FilterSort />
              <ReviewsBlock />
            </>
            :
            <ReviewsEmptyResults />
        }
      </main>
    </>
  );
}

export default CardPage;
