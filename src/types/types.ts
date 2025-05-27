import { CategoryName, ProductType } from '../const';

export type Product = {
  id: string;
  title: string;
  category: CategoryName;
  type: ProductType;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type Products = Product[];

export type ProductDetails = {
  id: string;
  title: string;
  category: CategoryName;
  type: ProductType;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: [string];
  weight: number;
  rating: number;
  reviewCount: number;
}

export type CategoryType = {
  category: string;
  types: [string];
}

export type CategoriesType = CategoryType[];

export type User = {
  name: string;
  avatarUrl: string;
}

export type Review = {
  id: string;
  isoDate: string;
  user: User;
  positive: string;
  negative: string;
  rating: number;
}

export type Reviews = Review[];

// export type ReviewPostData = {
//   id: string;
//   positive: string;
//   disadvantages: string;
//   'input-star-rating': number;
// }
export type ReviewPostData = {
  id: string;
  advantages: string;
  disadvantages: string;
  'input-star-rating': number;
}
