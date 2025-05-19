import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchProductDetails, fetchProducts } from '../../api-actions';

import { ProductDetails, Products } from '../../../types/types';
import { RootState } from '../../store';

// import { RootState } from '../../store';
// import { SliceName } from '../../../const';

type InitialState = {
  products: Products;
  productDetails: ProductDetails | null;
  categoryFilterValue: string | null;
  typeFilterValue: string[];
  filteredProducts: Products;
  isFilterCategoryChange: boolean;
}

const initialState: InitialState = {
  products: [],
  productDetails: null,
  categoryFilterValue: null,
  typeFilterValue: [],
  filteredProducts: [],
  isFilterCategoryChange: false,
};

export const productsDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    setCategoryFilteredProducts: (state) => {
      state.filteredProducts = state.products;

      if (state.categoryFilterValue && state.typeFilterValue.length > 0) {
        state.filteredProducts = state.products
          .filter((product) => product.category === state.categoryFilterValue)
          .filter(({ type }) => state.typeFilterValue.includes(type));
      } else if (state.categoryFilterValue !== null) {
        state.filteredProducts = state.products
          .filter((product) => product.category === state.categoryFilterValue);
      }
    },
    setCategoryFilterValue: (state, action: PayloadAction<string>) => {
      state.categoryFilterValue = action.payload;
      state.isFilterCategoryChange = true;
    },
    setTypeFilterValue: (state, action: PayloadAction<string>) => {
      state.typeFilterValue.push(action.payload);
      state.isFilterCategoryChange = false;
    },
    setDeleteTypeFilterValue: (state, action: PayloadAction<string>) => {
      if (action.payload === 'clear') {
        state.typeFilterValue = [];
        state.isFilterCategoryChange = false;
      } else {
        state.typeFilterValue = state.typeFilterValue.filter((value) => value !== action.payload);
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Products>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      // console.log('fetchProducts - state.products = ', state.products);
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action: PayloadAction<ProductDetails>) => {
      state.productDetails = action.payload;
    });
  },
});

export const getProducts = (state: RootState) => state.productData.products;
export const getProductsDetails = (state: RootState) => state.productData.productDetails;
export const getFilteredProducts = (state: RootState) => state.productData.filteredProducts;
export const getTypeFilterValue = (state: RootState) => state.productData.typeFilterValue;
export const getIsFilterCategoryChange = (state: RootState) => state.productData.isFilterCategoryChange;

export const { setCategoryFilteredProducts, setCategoryFilterValue, setDeleteTypeFilterValue, setTypeFilterValue } = productsDataSlice.actions;

export default productsDataSlice.reducer;
