import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Review, Reviews } from '../../../types/types';

import { RootState } from '../../store';
import { fetchLastReview, fetchReviews } from '../../api-actions';

type InitialState = {
  lastReview: Review | null;
  reviews: Reviews | null;
}

const initialState: InitialState = {
  lastReview: null,
  reviews: null,
};

export const reviewsDataSlice = createSlice({
  name: 'reviewsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLastReview.fulfilled, (state, action: PayloadAction<Review>) => {
      state.lastReview = action.payload;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action: PayloadAction<Reviews>) => {
      state.reviews = action.payload;
    });
  }
});

export const getLastReview = (state: RootState) => state.reviewsData.lastReview;
export const getReviews = (state: RootState) => state.reviewsData.reviews;

export default reviewsDataSlice.reducer;
