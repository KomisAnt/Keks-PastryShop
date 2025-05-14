import { configureStore } from '@reduxjs/toolkit';

import productsDataReducer from './slices/products-data/products-data-slice';

import { createAPI } from '../services/api';
import { useDispatch } from 'react-redux';
// import { SliceName } from '../const';

const api = createAPI();

export const store = configureStore({
  reducer: {
    productData: productsDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
