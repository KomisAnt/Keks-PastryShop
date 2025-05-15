import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../card-item/card-item';
import { getProducts } from '../../store/slices/products-data/products-data-slice';

const CATALOG_COUNT_ITEMS_VIEW = 6;

function CatalogBlock(): JSX.Element {

  const products = useSelector(getProducts);

  const [cardsCountView, setCardsCountView] = React.useState<number>(CATALOG_COUNT_ITEMS_VIEW);
  const [isButtonView, setIsButtonView] = React.useState<boolean>(true);

  const handlerButtonClick = () => {
    if (cardsCountView <= products.length) {
      setCardsCountView(cardsCountView + CATALOG_COUNT_ITEMS_VIEW);
    }
  };

  React.useEffect(() => {
    if (products.length > 0 && cardsCountView >= products.length) {
      setIsButtonView(false);
    }
  }, [cardsCountView]);

  const cardsView = products.slice(0, cardsCountView);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">

          <ul className={`catalog__list ${!products ? 'loader' : ''}`}>
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
              onClick={handlerButtonClick}
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
