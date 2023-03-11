import { createSlice } from '@reduxjs/toolkit';

import { getUsers, getUserById, deleteUserById } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentUser: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
        state.currentUser = null;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.currentUser = null;
      })
      .addCase(getUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = null;
        state.error = payload;
      })
      .addCase(deleteUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
        state.error = null;
      })
      .addCase(deleteUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = null;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
