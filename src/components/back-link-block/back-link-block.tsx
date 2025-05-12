function BackLinkBlock(): JSX.Element {
  return (
    <div className="back-link">
      <div className="container">
        <a className="back-link__link" href="#">
          Назад
          <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
            <use xlinkHref="#icon-arrow-left"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BackLinkBlock;
