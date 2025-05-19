import React from 'react';
import { ProductType } from '../../const';
import { getIsFilterCategoryChange, setCategoryFilteredProducts, setDeleteTypeFilterValue, setTypeFilterValue } from '../../store/slices/products-data/products-data-slice';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';


const filterNamesSecondLevel = ['Шоколадный', 'Вегетарианский', 'Нью-Йорк', 'Лимонный', 'Ваниль', 'Медовый', 'Терпкий', 'Воронка', 'Корзинка', 'Шоколадный маффин', 'Фирменный маффин'] as const;

function CatalogFilterSecondLevel() {

  const dispatch = useAppDispatch();

  const isFirstCategoryChange = useSelector(getIsFilterCategoryChange);

  const listRef = React.useRef<HTMLUListElement>(null);
  const listNode = listRef.current;

  const inputNode = listNode?.querySelectorAll('input[type="checkbox"]');

  const [isFilterSecondLevelChecked, setIsFilterSecondLevelChecked] = React.useState<boolean>(false);

  const handlerFilterSecondLevelChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const isCheked = evt.target.checked;
    const currentValue = evt.target.value;

    setIsFilterSecondLevelChecked(isCheked);

    if (isCheked) {
      dispatch(setTypeFilterValue(currentValue));
    } else {
      dispatch(setDeleteTypeFilterValue(currentValue));
    }

    dispatch(setCategoryFilteredProducts());
  };

  React.useEffect(() => {
    dispatch(setCategoryFilteredProducts());
  }, [isFilterSecondLevelChecked]);

  React.useEffect(() => {
    if (isFirstCategoryChange && inputNode !== undefined) {
      inputNode.forEach((inputElement) => {
        inputElement.checked = false;
      });
      dispatch(setDeleteTypeFilterValue('clear'));
      dispatch(setCategoryFilteredProducts());
    }
  });

  return (
    <div className="catalog-filter__second-level">
      <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
      <ul className="catalog-filter__list catalog-filter__list--second-level" ref={listRef}>

        {
          filterNamesSecondLevel.map((filterName, index) => (
            <li
              className="catalog-filter__item catalog-filter__item--second-level"
              key={filterName}
            >
              <div className="custom-toggle custom-toggle--checkbox">
                <input
                  type="checkbox"
                  value={`${ProductType[filterName]}`}
                  id={`catalog-second-level-id-${index + 1}`}
                  name="catalog-second-level"
                  onChange={handlerFilterSecondLevelChange}
                />
                <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${index + 1}`}>{filterName}</label>
              </div>
            </li>
          ))
        }

      </ul>
    </div>
  );
}

export default CatalogFilterSecondLevel;
