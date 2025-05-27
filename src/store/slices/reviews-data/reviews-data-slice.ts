import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Review, Reviews } from '../../../types/types';

import { RootState } from '../../store';
import { fetchLastReview, fetchReviews, postReview } from '../../api-actions';

type InitialState = {
  lastReview: Review | null;
  reviews: Reviews | null;
  isReviewFormButtonClick: boolean;
}

const initialState: InitialState = {
  lastReview: null,
  reviews: null,
  isReviewFormButtonClick: false,
};

export const reviewsDataSlice = createSlice({
  name: 'reviewsData',
  initialState,
  reducers: {
    setIsReviewFormButtonClick: (state, action: PayloadAction<boolean>) => {
      state.isReviewFormButtonClick = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLastReview.fulfilled, (state, action: PayloadAction<Review>) => {
      state.lastReview = action.payload;
    });
    builder.addCase(fetchReviews.fulfilled, (state, action: PayloadAction<Reviews>) => {
      state.reviews = action.payload;
    });
    builder.addCase(postReview.fulfilled, (state, action: PayloadAction<Review>) => {
      console.log('postReview.fulfilled = ', action.payload);
    });
  }
});

export const getLastReview = (state: RootState) => state.reviewsData.lastReview;
export const getReviews = (state: RootState) => state.reviewsData.reviews;
export const getIsReviewFormButtonClick = (state: RootState) => state.reviewsData.isReviewFormButtonClick;

export const { setIsReviewFormButtonClick } = reviewsDataSlice.actions;

export default reviewsDataSlice.reducer;
