import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

// import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';

import { RootState } from './store';
import { ProductDetails, Products, Review, Reviews, ReviewPostData, UserRegistrationData, UserData, UserLoginData } from '../types/types';
import { saveToken } from '../services/token';


const FetchActions = {
  FETCH_PRODUCTS: 'products/fetch',
  FETCH_PRODUCT: 'product/fetch',
  FETCH_CATEGORIES: 'categories/fetch',
  FETCH_FAVORITE: 'favorites/fetch',
  POST_FAVORITE: 'product/post-favorite',
  DELETE_FAVORITE: 'product/delete-favorite',
  FETCH_REVIEWS: 'product/fetch-reviews',
  POST_REVIEW: 'product/post-review',
  LAST_REVIEW: 'reviews/last-review',
  USER_REGISTRATION: 'user/regictration',
  USER_AVATAR: 'user/fetch-avatar',
  USER_LOGIN: 'user/login',
  USER_POST_LOGIN: 'user/post-login',
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

// Получение отзывов

//получение последнего отзыва

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

// Получение всех отзывов для товара по id

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

// Отправка отзыва на сервер

export const postReview = createAsyncThunk<Review, ReviewPostData, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.POST_REVIEW,
  async ({ id,
    advantages: positive,
    disadvantages: negative,
    'input-star-rating': rating }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Reviews}/${id}`, { positive, negative, rating });
    return data;
  }
);

// Регистрация пользователя

export const userRegistration = createAsyncThunk<void, UserRegistrationData, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.USER_REGISTRATION,
  async ({ name, email, password }, { extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.UserRegistration, { name, email, password });
    saveToken(token);
  }
);

// Авторизация пользователя

export const userLogin = createAsyncThunk<void, UserLoginData, {
  state: RootState;
  extra: AxiosInstance;
}>(
  FetchActions.USER_POST_LOGIN,
  async ({ email, password }, { extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.UserLogin,
      { email, password });
    saveToken(token);
  }
);
