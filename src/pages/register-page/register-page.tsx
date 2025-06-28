import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { userRegistration } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { getIsSuccessRegistered } from '../../store/slices/user-data/user-data-slice';

function RegisterPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const [isInputNameValue, setIsInputNameValue] = React.useState<string>('');
  const [isInputEmailValue, setIsInputEmailValue] = React.useState<string>('');
  const [isInputPasswordValue, setIsInputPasswordValue] = React.useState<string>('');

  const userInputNameRef = React.useRef<HTMLInputElement>(null);
  const userInputEmailRef = React.useRef<HTMLInputElement>(null);
  const userInputPasswordRef = React.useRef<HTMLInputElement>(null);

  const formRef = React.useRef<HTMLFormElement>(null);

  const isUserSuccessRegistered = useSelector(getIsSuccessRegistered);

  const handleInputNameChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setIsInputNameValue(evt.target.value);
  };

  const handleInputEmailChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setIsInputEmailValue(evt.target.value);
  };

  const handleInputPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setIsInputPasswordValue(evt.target.value);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(
      userRegistration(
        {
          name: isInputNameValue,
          email: isInputEmailValue,
          password: isInputPasswordValue
        }
      )
    );
  };

  React.useEffect(() => {
    if (userInputNameRef.current?.validity.valid && userInputEmailRef.current?.validity.valid && userInputPasswordRef.current?.validity.valid) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isInputNameValue, isInputEmailValue, isInputPasswordValue]);

  React.useEffect(() => {
    if (isUserSuccessRegistered) {
      navigate(AppRoute.Root);
    }
  }, [isUserSuccessRegistered]);

  return (
    <div className="wrapper">
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img className="register-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картинка кота." />
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <div className="register-page__form">
                <form
                  action="#"
                  method="post"
                  autoComplete="off"
                  ref={formRef}
                  onSubmit={handleFormSubmit}
                >
                  <div className="register-page__fields">
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="text"
                          name="user-name-1"
                          placeholder="Имя"
                          ref={userInputNameRef}
                          pattern='[A-Za-z0-9]+'
                          title='Имя должно иметь минимум одну букву'
                          onChange={handleInputNameChange}
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input
                          type="email"
                          name="user-mail-1"
                          placeholder="Почта"
                          ref={userInputEmailRef}
                          pattern='[A-Za-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}'
                          title='Введите корректный email. Например: example@example.com'
                          onChange={handleInputEmailChange}
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input
                          type="password"
                          name="user-password-1"
                          placeholder="Пароль"
                          ref={userInputPasswordRef}
                          pattern='^(?=.*[A-Za-z])(?=.*\d)[^\s]+$'
                          title='Пароль должен включать в себя минимум 1 букву и 1 цифру'
                          onChange={handleInputPasswordChange}
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="file"
                          name="user-name-1"
                          data-text="Аватар"
                          accept="image/jpeg"
                        />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn register-page__btn btn--large"
                    type="submit"
                    disabled={isButtonDisabled}
                  >Зарегистрироваться
                  </button>
                </form>
              </div>
              <p className="register-page__text-wrap">
                Уже зарегистрированы?
                <Link to={AppRoute.Login} className="register-page__link">Войдите</Link> в свой аккаунт.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;
