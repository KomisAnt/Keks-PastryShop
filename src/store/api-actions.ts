import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';

import { RootState } from './store';
import { ProductDetails, Products, Review, Reviews } from '../types/types';


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

// Получение списка товаров и данных по товару

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

export const fetchProductDetails = createAsyncThunk<ProductDetails, string, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.FETCH_PRODUCT,
  async (id, { extra: api }) => {
    const { data } = await api.get<ProductDetails>(`${APIRoute.Products}/${id}`);
    return data;
  },
);

// Получение комментариев

export const fetchLastReview = createAsyncThunk<Review, undefined, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.LAST_REVIEW,
  async (_, { extra: api }) => {
    const { data } = await api.get<Review>(APIRoute.LastReview);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Reviews, string, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.FETCH_REVIEWS,
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    return data;
  }
);

