import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store';

import { userLogin, userRegistration } from '../../api-actions';
import { AutorizationStatus } from '../../../const';

import { UserData, UserLoginData } from '../../../types/types';

type InitialState = {
  autorizationStatus: AutorizationStatus;
  userLoginStatusData: UserData | null;
  isSuccessRegistered: boolean;
}

const initialState: InitialState = {
  autorizationStatus: AutorizationStatus.Unknown,
  userLoginStatusData: null,
  isSuccessRegistered: false,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegistration.fulfilled, (state) => {
      state.isSuccessRegistered = true;
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.autorizationStatus = AutorizationStatus.Auth;
    });
  }
});

export const getAutorizationStatus = (state: RootState) => state.userData.autorizationStatus;
export const getIsSuccessRegistered = (state: RootState) => state.userData.isSuccessRegistered;

export default userDataSlice.reducer;
