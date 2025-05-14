import { Categories, ProductType } from '../const';


export type Products = {
  id: string;
  title: string;
  category: Categories;
  type: ProductType;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isNew: boolean;
}
