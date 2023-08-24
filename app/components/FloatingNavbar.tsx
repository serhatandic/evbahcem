'use client';
import Link from 'next/link';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type Data = Array<Item>;

type Item = {
	title: string;
	index: string;
	source: string;
};

type SearchResultsState = {
	search: {
		searchResults: Array<Item>;
		searchQuery: string;
	};
};

type BlurState = {
	blur: {
		searchBarHasFocus: boolean;
		isBlurred: boolean;
	};
};

const FloatingNavbar = () => {
	const [navbarShape, setNavbarShape] = useState('rounded-full');
	const searchResults = useSelector(
		(state: SearchResultsState) => state.search.searchResults
	);
	const searchQuery = useSelector(
		(state: SearchResultsState) => state.search.searchQuery
	);
	const searchBarHasFocus = useSelector(
		(state: BlurState) => state.blur.searchBarHasFocus
	);
	useEffect(() => {
		if (searchQuery) {
			setNavbarShape('rounded-t-3xl');
		} else {
			setNavbarShape('rounded-full');
		}
	}, [searchQuery]);
	return (
		<div className='flex justify-center'>
			<nav
				className={`navbar navbar-expand-lg navbar-light bg-light h-12 w-full bg-white mt-7  flex items-center gap-8 ${navbarShape}`}
			>
				<Link href='/'>
					<h2 className='ml-4 font-medium'>Belirti.org</h2>
				</Link>
				<SearchBar />
			</nav>
			<SearchResults
				data={searchResults}
				searchQuery={searchQuery}
				searchBarHasFocus={searchBarHasFocus}
			/>
		</div>
	);
};

export default FloatingNavbar;
