import { Categories, ProductTypes } from '../const';

export type Products = {
  id: string;
  title: string;
  category: Categories;
  type: ProductTypes;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type Product = {
  id: string;
  title: string;
  category: Categories;
  type: ProductTypes;
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
