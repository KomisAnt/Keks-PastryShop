import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchProducts } from '../../api-actions';

import { ProductDetails, Products } from '../../../types/types';
import { RootState } from '../../store';
// import { RootState } from '../../store';
// import { SliceName } from '../../../const';

type InitialState = {
  products: Products;
  productDetails: ProductDetails | null;
}

const initialState: InitialState = {
  products: [],
  productDetails: null,
};

export const productsDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Products>) => {
      state.products = action.payload;
      // console.log('state.products = ', state.products);
    });
  },
});

export const getProducts = (state: RootState) => state.productData.products;

export default productsDataSlice.reducer;
