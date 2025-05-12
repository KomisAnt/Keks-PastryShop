function Hero(): JSX.Element {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__img-wrapper">
          <img className="hero__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
        </div>
        <div className="hero__wrapper">
          <p className="hero__subtitle">Твоя пушистая кондитерская</p>
          <p className="hero__title">КЕКС</p>
          <div className="hero__button-wrapper">
            <a className="btn" href="catalog-page.html">Скорее смотреть</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
