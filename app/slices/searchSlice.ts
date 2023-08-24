'use client';
import { createSlice } from '@reduxjs/toolkit';

export const searchResultsSlice = createSlice({
	name: 'search',
	initialState: {
		searchResults: [],
		searchQuery: '',
	},
	reducers: {
		setSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSearchResults, setSearchQuery } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
