import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { fetchUserStatusData, userLogin, userRegistration } from '../../api-actions';
import { AutorizationStatus } from '../../../const';

import { UserData } from '../../../types/types';
// import { Action } from 'history';

type InitialState = {
  autorizationStatus: AutorizationStatus;
  userStatusData: UserData | null;
  isSuccessRegistered: boolean;
  isSuccessLogin: boolean;
}

const initialState: InitialState = {
  autorizationStatus: AutorizationStatus.Unknown,
  userStatusData: null,
  isSuccessRegistered: false,
  isSuccessLogin: false,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state) => {
      state.isSuccessRegistered = false;
    });
    builder.addCase(userRegistration.fulfilled, (state) => {
      state.isSuccessRegistered = true;
    });
    builder.addCase(userRegistration.rejected, (state) => {
      state.isSuccessRegistered = false;
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.autorizationStatus = AutorizationStatus.Auth;
      state.isSuccessLogin = true;
    });
    builder.addCase(fetchUserStatusData.fulfilled, (state, action: PayloadAction<UserData>) => {
      state.userStatusData = action.payload;
    });
  }
});

export const getAutorizationStatus = (state: RootState) => state.userData.autorizationStatus;
export const getIsSuccessRegistered = (state: RootState) => state.userData.isSuccessRegistered;
export const getIsSuccessLogin = (state: RootState) => state.userData.isSuccessLogin;
export const getUserStatusData = (state: RootState) => state.userData.userStatusData;

export default userDataSlice.reducer;
