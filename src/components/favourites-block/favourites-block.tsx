import CardItem from '../card-item/card-item';

function FavouritesBlock(): JSX.Element {
  return (
    <section className="favourites">
      <div className="container">
        <h2 className="visually-hidden">Избранные товары</h2>
        <div className="favourites__button">
          <button className="btn btn--second" type="button">Очистить</button>
        </div>
      </div>
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">
            <ul className="catalog__list">
              <li className="catalog__item">
                <CardItem />
              </li>
              <li className="catalog__item">
                <CardItem />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FavouritesBlock;
