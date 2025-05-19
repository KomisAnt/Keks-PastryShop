import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderNotAuthtorized from '../../components/header-not-authtorized/header-not-authtorized';
import BackLinkBlock from '../../components/back-link-block/back-link-block';
import CardItemsDetailsBlock from '../../components/card-items-details-block/card-items-details-block';
import FilterSort from '../../components/filter-sort/filter-sort';
import CommentsBlock from '../../components/comments-block/comments-block';

import { useAppDispatch } from '../../store/store';
import { fetchProductDetails } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getProductsDetails } from '../../store/slices/products-data/products-data-slice';


function CardPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const params = useParams();

  // const cardData = useSelector(getProductsDetails);

  React.useEffect(() => {
    const { id } = params;
    if (id !== undefined) {
      dispatch(fetchProductDetails(id));
    }
    window.scroll(0, 0);

  }, [params]);

  return (
    <>
      <HeaderNotAuthtorized />
      <main>
        <BackLinkBlock />
        <CardItemsDetailsBlock />
        {/* {cardData && <CardItemsDetailsBlock itemDetailsData={cardData} />} */}
        <FilterSort />
        <CommentsBlock />
      </main>
    </>
  );
}

export default CardPage;
