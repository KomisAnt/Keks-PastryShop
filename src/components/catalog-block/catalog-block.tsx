import React from 'react';
import { useSelector } from 'react-redux';

import CardItem from '../card-item/card-item';
import { getFilteredProducts } from '../../store/slices/products-data/products-data-slice';

const CATALOG_COUNT_ITEMS_VIEW = 6;

function CatalogBlock(): JSX.Element {

  const filteredProducts = useSelector(getFilteredProducts);

  const [cardsCountView, setCardsCountView] = React.useState<number>(CATALOG_COUNT_ITEMS_VIEW);
  const [isButtonView, setIsButtonView] = React.useState<boolean>(true);

  const handlerButtonShowMore = () => {
    if (cardsCountView <= filteredProducts.length) {
      setCardsCountView(cardsCountView + CATALOG_COUNT_ITEMS_VIEW);
    }
  };

  const handlerButtonToTop = () => {
    window.scroll(0, 0);
  };

  React.useEffect(() => {
    if (filteredProducts.length > 0 && cardsCountView >= filteredProducts.length) {
      setIsButtonView(false);
    } else if (filteredProducts.length > 0 && cardsCountView < filteredProducts.length) {
      setIsButtonView(true);
    }
  }, [cardsCountView, filteredProducts]);

  const cardsView = filteredProducts.slice(0, cardsCountView);

  return (

    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">

          <ul className={`catalog__list ${!filteredProducts ? 'loader' : ''}`}>
            {
              cardsView.map((item, i) => (
                <CardItem
                  key={item.id}
                  {...item}
                  currentClass={'catalog__item'}
                />
              ))
            }
          </ul>
          <div className="catalog__button-wrapper">
            <button
              className="btn btn--second"
              type="button"
              onClick={isButtonView ? handlerButtonShowMore : handlerButtonToTop}
            >
              {
                isButtonView ? 'Показать еще' : 'в начало'
              }

            </button>
          </div>
        </div>
      </div>
    </section>

  );
}

export default CatalogBlock;
