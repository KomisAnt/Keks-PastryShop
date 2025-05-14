import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';

import { RootState } from './store';
import { ProductDetails, Products } from '../types/types';


const FetchActions = {
  FETCH_PRODUCTS: 'products/fetch',
  FETCH_PRODUCT: 'product/fetch',
  FETCH_CATEGORIES: 'categories/fetch',
  FETCH_FAVORITE: 'favorites/fetch',
  POST_FAVORITE: 'product/post-favorite',
  DELETE_FAVORITE: 'product/delete-favorite',
  FETCH_REVIEWS: 'product/fetch-reviews',
  POST_REVIEWS: 'product/post-review',
  LAST_REVIEW: 'reviews/last-review',
  USER_REGISTRANION: 'user/regictration',
  USER_AVATAR: 'user/fetch-avatar',
  USER_LOGIN: 'user/login',
  USER_LOGOUT: 'user/logout',
};

export const fetchProducts = createAsyncThunk<Products, undefined, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.FETCH_PRODUCTS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Products>(APIRoute.Products);
    return data;
  },
);

export const fetchProductDetails = createAsyncThunk<ProductDetails, number, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.FETCH_PRODUCT,
  async (id, { extra: api }) => {
    const { data } = await api.get<ProductDetails>(`${APIRoute.Products}/${id}`);
    return data;
  },
);
