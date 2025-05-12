function HeaderNotAuthtorized(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="header__logo" href="index.html" aria-label="Переход на главную">
            <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
          </a>
          <div className="header__buttons">
            <div className="header__btn">
              <a className="btn btn--third header__link header__link--reg" href="register-page.html">Регистрация</a>
            </div>
            <div className="header__btn">
              <a className="btn" href="login-page.html">Войти</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNotAuthtorized;
