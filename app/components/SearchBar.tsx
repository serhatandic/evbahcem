'use client';

import Fuse from 'fuse.js';
import { debounce } from 'debounce';
import sicknesses from '../data/data.json';
import rawArticles from '../data/saglikRehberi.json';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlur } from '../slices/blurSlice';
import { setSearchResults, setSearchQuery } from '../slices/searchSlice';

type Item = {
	title: string;
	index: string;
	source: string;
};

type Event = {
	target: {
		value: string;
	};
};

type SearchResultsState = {
	search: {
		searchResults: Array<Item>;
		searchQuery: string;
	};
};

const articles = rawArticles as {
	[key: string]: {
		title: string;
		sections: Array<{
			header: string;
			content: string;
		}>;
	};
};

const SearchBar = () => {
	const filteredData = useSelector(
		(state: SearchResultsState) => state.search.searchResults
	);
	const searchQuery = useSelector(
		(state: SearchResultsState) => state.search.searchQuery
	);
	const dispatch = useDispatch();
	const sicknessValues = Object.values(sicknesses).map((sickness, index) => {
		return {
			index: String(index),
			title: sickness.title,
			entryParagraph: sickness.entryParagraph,
			source: 'sicknesses',
		};
	});
	const articleValues = Object.keys(articles).map((key) => {
		return {
			index: key,
			title: articles[key].title,
			source: 'articles',
		};
	});

	useEffect(() => {
		if (!searchQuery) {
			dispatch(setBlur(false));
			dispatch(setSearchResults([]));
			return;
		}
		dispatch(setBlur(true));
		const fuse = new Fuse([...sicknessValues, ...articleValues], {
			keys: ['title', 'entryParagraph'],
			shouldSort: true,
			includeScore: true,
			threshold: 0.4, // You can adjust this value based on how strict you want the matching to be
		});

		const results = fuse.search(searchQuery);
		dispatch(
			setSearchResults(
				results.map(({ item, refIndex }) => ({
					title: item.title,
					index: item.index,
					source: item.source,
				}))
			)
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchQuery]);

	const handleSearch = (e: Event) => {
		dispatch(setSearchQuery(e.target.value));
	};
	return (
		<div className='flex flex-col relative w-full'>
			<input
				className='w-10/12 md:w-11/12 focus:outline-none'
				placeholder='Arama yapın'
				onChange={debounce(handleSearch, 500)}
			/>
		</div>
	);
};

export default SearchBar;
