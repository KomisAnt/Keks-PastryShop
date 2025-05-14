import { configureStore } from '@reduxjs/toolkit';


import { createAPI } from '../services/api';
import { useDispatch } from 'react-redux';

const api = createAPI();

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
