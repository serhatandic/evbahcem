'use client';
import { createSlice } from '@reduxjs/toolkit';

export const stylingSlice = createSlice({
	name: 'styling',
	initialState: {
		navbarRounded: true,
	},
	reducers: {
		setNavbarRounded: (state, action) => {
			state.navbarRounded = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setNavbarRounded } = stylingSlice.actions;

export default stylingSlice.reducer;
