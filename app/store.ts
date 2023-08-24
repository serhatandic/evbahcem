'use client';

import { configureStore } from '@reduxjs/toolkit';
import blurSliceReducer from './slices/blurSlice';
import searchSliceReducer from './slices/searchSlice';
export const store = configureStore({
	reducer: {
		blur: blurSliceReducer,
		search: searchSliceReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
