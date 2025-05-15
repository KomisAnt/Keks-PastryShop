import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getProducts } from '../../store/slices/products-data/products-data-slice';
import { AppRoute } from '../../const';
import CardItem from '../card-item/card-item';
import { Products } from '../../types/types';
import { getRandomProducts } from '../../utils';

function RandomMainBlock(): JSX.Element {

  const products = useSelector(getProducts);

  const [randomProducts, setRandomProducts] = React.useState<Products>([]);

  React.useEffect(() => {
    if (products.length > 0) {
      setRandomProducts(getRandomProducts(products));
    }
  }, [products]);

  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className={`random-main__list ${!randomProducts ? 'loader' : ''}`}>

          {
            randomProducts.map((item, i) => (
              <CardItem
                key={item.id}
                {...item}
                currentClass={'random-main__item'}
              />
            ))
          }
          <li className="random-main__item">
            <Link to={AppRoute.Catalog} className="random-main__link">
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width="120" height="130" aria-hidden="true">
                    <use xlinkHref="#icon-keks"></use>
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle">Все кексы</h3>
            </Link>
          </li>

          {/* <li className="random-main__item">
            <CardItem />
          </li>
          <li className="random-main__item">
            <CardItem />
          </li>
          <li className="random-main__item">
            <CardItem />
          </li>
          <li className="random-main__item">
            <Link to={AppRoute.Catalog} className="random-main__link">
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width="120" height="130" aria-hidden="true">
                    <use xlinkHref="#icon-keks"></use>
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle">Все кексы</h3>
            </Link>
          </li> */}
        </ul>

      </div>
    </section>
  );
}

export default RandomMainBlock;
