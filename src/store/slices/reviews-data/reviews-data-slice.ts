import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Review, Reviews } from '../../../types/types';

import { RootState } from '../../store';
import { fetchLastComment } from '../../api-actions';

type InitialState = {
  lastReview: Review | null;
}

const initialState: InitialState = {
  lastReview: null,
};

export const reviewsDataSlice = createSlice({
  name: 'reviewsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLastComment.fulfilled, (state, action: PayloadAction<Review>) => {
      state.lastReview = action.payload;
    });
  }
});

export const getLastReview = (state: RootState) => state.reviewsData.lastReview;

export default reviewsDataSlice.reducer;
