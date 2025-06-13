import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/store';
import { userLogin } from '../../store/api-actions';
import { useSelector } from 'react-redux';
import { getIsSuccessLogin } from '../../store/slices/user-data/user-data-slice';

import { AppRoute } from '../../const';

function LoginPage(): JSX.Element {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isSuccessLogin = useSelector(getIsSuccessLogin);

  const formRef = React.useRef<HTMLFormElement>(null);
  const inputEmailRef = React.useRef<HTMLInputElement>(null);
  const inputPasswordRef = React.useRef<HTMLInputElement>(null);

  const [inputEmailValue, setInputEmailValue] = React.useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = React.useState<string>('');

  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);

  const handleInputEmailChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setInputEmailValue(evt.target.value);
  };

  const handleInputPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setInputPasswordValue(evt.target.value);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (inputEmailRef.current && inputPasswordRef.current) {
      dispatch(userLogin({
        email: inputEmailRef.current.value,
        password: inputPasswordRef.current.value,
      }));
    }
  };

  React.useEffect(() => {
    if (inputEmailRef.current?.validity.valid
      && inputPasswordRef.current?.validity.valid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputEmailRef.current?.validity.valid, inputPasswordRef.current?.validity.valid, inputEmailValue, inputPasswordValue]);

  React.useEffect(() => {
    if (isSuccessLogin) {
      navigate(AppRoute.Root);
    }
  }, [isSuccessLogin]);


  return (
    <div className="wrapper">
      <main>
        <section className="login-page">
          <div className="login-page__header">
            <div className="login-page__img-wrap">
              <img className="login-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
            </div>
          </div>
          <div className="login-page__content">
            <div className="login-page__inner">
              <h1 className="login-page__title">Вход</h1>
              <div className="login-page__form">
                <form
                  ref={formRef}
                  action="#"
                  method="post"
                  autoComplete="off"
                  onSubmit={handleFormSubmit}
                >
                  <div className="login-page__fields">
                    <div className="custom-input login-page__field">
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input
                          ref={inputEmailRef}
                          type="email"
                          name="user-mail-1"
                          placeholder="Почта"
                          required
                          onChange={handleInputEmailChange}
                        />
                      </label>
                    </div>
                    <div className="custom-input login-page__field">
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input
                          ref={inputPasswordRef}
                          type="password"
                          name="user-password-1"
                          placeholder="Пароль"
                          required
                          onChange={handleInputPasswordChange}
                        />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn login-page__btn btn--large"
                    type="submit"
                    disabled={isButtonDisabled}
                  >
                    Войти
                  </button>
                </form>
              </div>
              <p className="login-page__text-wrap">
                Ещё не зарегистрированы?
                <Link to={AppRoute.Register} className="login-page__link">
                  Создайте
                </Link>
                аккаунт прямо сейчас.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
