import Header from '../../components/header/header';
import BackLinkBlock from '../../components/back-link-block/back-link-block';
import Footer from '../../components/footer/footer';

function FavoritesPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>

          <BackLinkBlock />

          <section className="number-of-favourites favorites-page__qty">
            <div className="container">
              <h2 className="visually-hidden">Количество товаров в избранном.</h2>
              <p className="number-of-favourites__cakes">2 кекса</p>
              <div className="number-of-favourites__wrapper">
                <div className="number-of-favourites__wrap-price">
                  <p className="number-of-favourites__text">Всего</p>
                  <p className="number-of-favourites__price">13&nbsp;400&nbsp;р</p>
                </div>
              </div>
              <div className="number-of-favourites__button">
                <a className="btn" href="catalog.html">В каталог</a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
