import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderNotAuthtorized(): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to={AppRoute.Root} className="header__logo" aria-label="Переход на главную">
            <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
          </Link>
          <div className="header__buttons">
            <div className="header__btn">
              <Link
                to={AppRoute.Register}
                className="btn btn--third header__link header__link--reg"
              >
                Регистрация
              </Link>
            </div>
            <div className="header__btn">
              <Link to={AppRoute.Login} className="btn">Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNotAuthtorized;
