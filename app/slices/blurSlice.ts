'use client';
import { createSlice } from '@reduxjs/toolkit';

export const blurSlice = createSlice({
	name: 'blur',
	initialState: {
		isBlurred: false,
	},
	reducers: {
		setBlur: (state, action) => {
			state.isBlurred = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setBlur } = blurSlice.actions;

export default blurSlice.reducer;
