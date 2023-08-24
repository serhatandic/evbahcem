'use client';

import { configureStore } from '@reduxjs/toolkit';
import blurSliceReducer from './slices/blurSlice';
import searchSliceReducer from './slices/searchSlice';
import stylingSliceReducer from './slices/stylingSlice';

export const store = configureStore({
	reducer: {
		blur: blurSliceReducer,
		search: searchSliceReducer,
		styling: stylingSliceReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
