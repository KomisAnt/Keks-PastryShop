import React from 'react';

import { fetchProducts } from '../../store/api-actions';

import { useAppDispatch } from '../../store/store';
import { setCategoryFilteredProducts, setCategoryFilterValue } from '../../store/slices/products-data/products-data-slice';

import CatalogFilterSecondLevel from '../catalog-filter-second-level/catalog-filter-second-level';

import { CategoryName } from '../../const';

const filterNamesFirstLevel = ['Бисквит', 'Десерт', 'Чизкейк', 'Песочное'] as const;

function CatalogFilter(): JSX.Element {

  const dispatch = useAppDispatch();

  const [isActiveFilterFirstLevel, setIsActiveFilterFirstLevel] = React.useState<boolean>(false);
  const [activeFilterFirstLevelIndex, setActiveFilterFirstLevelIndex] = React.useState<number | null>(null);

  const [isFilterSecondLevelView, setIsFilterSecondLevelView] = React.useState<boolean>(false);

  const handlerButtonFirstFilterClick = (index: number) => {
    if (index === activeFilterFirstLevelIndex) {
      setIsActiveFilterFirstLevel(!isActiveFilterFirstLevel);
    } else if (index !== activeFilterFirstLevelIndex) {
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
    if (isActiveFilterFirstLevel && activeFilterFirstLevelIndex !== null) {
      dispatch(setCategoryFilterValue(CategoryName[filterNamesFirstLevel[activeFilterFirstLevelIndex]]));
      dispatch(setCategoryFilteredProducts());
    } else if (!isActiveFilterFirstLevel) {
      dispatch(fetchProducts());
    }
  }, [isActiveFilterFirstLevel, activeFilterFirstLevelIndex]);

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
                    onClick={() => handlerButtonFirstFilterClick(index)}
                  >
                    {filterName}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>

        {isFilterSecondLevelView ? <CatalogFilterSecondLevel /> : ''}

      </div>
    </div >
  );
}

export default CatalogFilter;
