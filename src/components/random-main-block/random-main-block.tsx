import CardItem from '../card-item/card-item';

function RandomMainBlock(): JSX.Element {
  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className="random-main__list">
          <li className="random-main__item">
            <CardItem />
          </li>
          <li className="random-main__item">
            <CardItem />
          </li>
          <li className="random-main__item">
            <CardItem />
          </li>
          <li className="random-main__item">
            <a className="random-main__link" href="#">
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width="120" height="130" aria-hidden="true">
                    <use xlinkHref="#icon-keks"></use>
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle">Все кексы</h3>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RandomMainBlock;
