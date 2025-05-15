import { Products } from './types/types';

// Получение случайных 3-х карточек для начальной страницы //

export const getRandomProducts = (array: Products): Products => {
  const randomNumbers: number[] = [];
  const randomProducts: Products = [];

  while (randomNumbers.length < 3) {
    const randomNumber: number = Math.floor(Math.random() * (array.length - 1));
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  randomNumbers.forEach((number) => {
    randomProducts.push(array[number]);
  });
  return randomProducts;
};
