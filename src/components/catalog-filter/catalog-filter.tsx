import React from 'react';

const filterNamesFirstLevel = ['Бисквит', 'Десерт', 'Чизкейк', 'Песочное'] as const;

function CatalogFilter(): JSX.Element {

  const [isActiveFilterFirstLevel, setIsActiveFilterFirstLevel] = React.useState<boolean>(false);
  const [activeFilterFirstLevelIndex, setActiveFilterFirstLevelIndex] = React.useState<number | null>(null);
  const [isFilterSecondLevelView, setIsFilterSecondLevelView] = React.useState<boolean>(false);

  const handleButtonFirstFilterClick = (index: number) => {
    if (index === activeFilterFirstLevelIndex) {
      setIsActiveFilterFirstLevel(!isActiveFilterFirstLevel);
    } else if (index !== activeFilterFirstLevelIndex) {
      setIsActiveFilterFirstLevel(false);
      setActiveFilterFirstLevelIndex(index);
      setIsActiveFilterFirstLevel(true);
    }
  };

  const isActiveFilterFirstLevelActive = (index: number) => {
    if (isActiveFilterFirstLevel) {
      return activeFilterFirstLevelIndex === index ? 'is-active' : '';
    }
    return '';
  };

  React.useEffect(() => {
    setIsFilterSecondLevelView(isActiveFilterFirstLevel);
  }, [isActiveFilterFirstLevel]);

  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {
              filterNamesFirstLevel.map((filterName, index) => (
                <li
                  className="catalog-filter__item catalog-filter__item--first-level"
                  key={filterName}
                >
                  <button
                    className={`btn btn--filter-first-level ${isActiveFilterFirstLevelActive(index)}`}
                    type="button"
                    onClick={() => handleButtonFirstFilterClick(index)}
                  >
                    {filterName}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>

        {
          isFilterSecondLevelView
            ?
            <div className="catalog-filter__second-level">
              <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
              <ul className="catalog-filter__list catalog-filter__list--second-level">
                <li className="catalog-filter__item catalog-filter__item--second-level">
                  <div className="custom-toggle custom-toggle--checkbox">
                    <input type="checkbox" value="chocolate" id="catalog-second-level-id-1" name="catalog-second-level" />
                    <label className="custom-toggle__label" htmlFor="catalog-second-level-id-1">Шоколадный</label>
                  </div>
                </li>
                <li className="catalog-filter__item catalog-filter__item--second-level">
                  <div className="custom-toggle custom-toggle--checkbox">
                    <input type="checkbox" value="vegetarian" id="catalog-second-level-id-2" name="catalog-second-level" />
                    <label className="custom-toggle__label" htmlFor="catalog-second-level-id-2">Вегетарианский</label>
                  </div>
                </li>
                <li className="catalog-filter__item catalog-filter__item--second-level">
                  <div className="custom-toggle custom-toggle--checkbox">
                    <input type="checkbox" value="new-york" id="catalog-second-level-id-3" name="catalog-second-level" />
                    <label className="custom-toggle__label" htmlFor="catalog-second-level-id-3">Нью-Йорк</label>
                  </div>
                </li>
                <li className="catalog-filter__item catalog-filter__item--second-level">
                  <div className="custom-toggle custom-toggle--checkbox">
                    <input type="checkbox" value="lemon" id="catalog-second-level-id-4" name="catalog-second-level" />
                    <label className="custom-toggle__label" htmlFor="catalog-second-level-id-4">Лимонный</label>
                  </div>
                </li>
                <li className="catalog-filter__item catalog-filter__item--second-level">
                  <div className="custom-toggle custom-toggle--checkbox">
                    <input type="checkbox" value="vanilla" id="catalog-second-level-id-5" name="catalog-second-level" />
                    <label className="custom-toggle__label" htmlFor="catalog-second-level-id-5">Ваниль</label>
                  </div>
                </li>
              </ul>
            </div>
            : ''
        }


      </div>
    </div >
  );
}

export default CatalogFilter;
