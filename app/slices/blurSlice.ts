'use client';
import { createSlice } from '@reduxjs/toolkit';

export const blurSlice = createSlice({
	name: 'blur',
	initialState: {
		isBlurred: false,
		searchBarHasFocus: false,
	},
	reducers: {
		setBlur: (state, action) => {
			state.isBlurred = action.payload;
		},
		setSearchBarFocus: (state, action) => {
			state.searchBarHasFocus = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setBlur, setSearchBarFocus } = blurSlice.actions;

export default blurSlice.reducer;
