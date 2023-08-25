'use client';
import { createSlice } from '@reduxjs/toolkit';

export const searchResultsSlice = createSlice({
	name: 'search',
	initialState: {
		searchResults: [],
		searchQuery: '',
		sourcePage: '',
	},
	reducers: {
		setSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload;
		},
		setSourcePage: (state, action) => {
			state.sourcePage = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSearchResults, setSearchQuery, setSourcePage } =
	searchResultsSlice.actions;

export default searchResultsSlice.reducer;
