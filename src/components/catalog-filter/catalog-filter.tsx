function CatalogFilter(): JSX.Element {
  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Бисквит</button>
            </li>
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Десерт</button>
            </li>
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Чизкейк</button>
            </li>
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Песочное</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
